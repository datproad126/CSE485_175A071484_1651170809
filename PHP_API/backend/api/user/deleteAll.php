<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Origin, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// include database and object file
require_once('../authentication/validate.php');
require_once('../conf/settings.config.php');
require_once('../modals/user.php');

// get database connection
$user = new user($localhost);

// get user id
$data = json_decode(file_get_contents("php://input"));

$users_arr = array();
$users_arr["records"] = array();

$authO = Authorization();

if ($data > 0 && $authO->role == "0") {
   foreach ($data as $key => $value) {
      $user_item = array("message" => "User " . $value->username . " was deleted.");
      array_push($users_arr['records'], $user_item);
   }


   // set response code - 200 ok
   http_response_code(200);

   // tell the user
   echo json_encode($users_arr);
}

// if unable to delete the user
else {

   // set response code - 503 service unavailable
   http_response_code(503);

   // tell the user
   echo json_encode(array("message" => "Unable to delete user."));
}
