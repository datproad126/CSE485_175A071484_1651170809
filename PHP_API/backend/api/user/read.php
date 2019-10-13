<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// include database and object files

require_once('../conf/settings.config.php');
require_once('modal_user.php');

try {
   $user = new user($localhost);
   // fetching all user
   $rows = $user->read();

   $users_arr = array();
   $users_arr["user"] = array();
   if ((array) $rows > 0) {
      foreach ($rows as $key => $row) {
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
         array_push($users_arr["user"], $user_item);
      }
   } else {
      // set response code - 404 Not found
      http_response_code(404);

      // tell the user no products found
      echo json_encode(
         array("message" => "No products found.")
      );
   }
   // set response code - 200 OK
   http_response_code(200);

   // show products data in json format
   echo json_encode($users_arr);
} catch (PDOException $e) {

   echo "There is some problem in connection: " . $e->getMessage();
}
