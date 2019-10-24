<?php

// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Origin, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


// include database and object files
require_once('../authentication/validate.php');
include_once '../modals/Utilities.php';
include_once '../modals/user.php';
include_once '../conf/settings.config.php';

// instantiate database and user object
$user = new user($localhost);

// get keywords
$data = json_decode(file_get_contents("php://input"));


$keywords = isset($data->search) ? $data->search : null;
$filter_field = isset($data->field) ? $data->field : "id";
// set default pagination 
// query users
$stmt = $user->search($keywords, $filter_field);
$num = $user->count();

$authO = Authorization();
if ($authO->role !== "0") {
   // set response code - 404 Not found
   http_response_code(404);

   // tell the user no users found
   echo json_encode(
      array("message" => "No users found.")
   );
}
// check if more than 0 record found
$boolean = true;
switch ($boolean) {
   case $num > 0 && !empty($keywords):
      // users array
      $users_arr = array();
      $users_arr["records"] = array();
      // $users_arr["paging"] = array();

      // retrieve our table contents
      // fetch() is faster than fetchAll()
      // http://stackoverflow.com/questions/2770630/pdofetchall-vs-pdofetch-in-a-loop
      while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
         // extract row
         // this will make $row['name'] to
         // just $name only
         extract($row);

         $user_item = array(
            "id" => intval($id),
            "username" => $username,
            "password" => $password,
            "name" => $display_name,
            "email" => $email,
            "dateCreated" => date($registered_date),
            "role"  => intval($role)
         );

         array_push($users_arr["records"], $user_item);
      }

      // set response code - 200 OK
      http_response_code(200);

      // show users data
      echo json_encode($users_arr);
      break;
   case $num > 0 && empty($keywords):
      // users array
      $users_arr = array();
      $users_arr["records"] = array();

      // retrieve our table contents
      // fetch() is faster than fetchAll()
      while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
         array_push($users_arr["records"], $row[$filter_field]);
      }
      // set response code - 200 OK
      http_response_code(200);

      // show users data
      echo json_encode($users_arr);
      break;
   default:
      // set response code - 404 Not found
      http_response_code(404);

      // tell the user no users found
      echo json_encode(
         array("message" => "No users found.")
      );
      break;
}
