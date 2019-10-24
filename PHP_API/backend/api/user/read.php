<?php

// required headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Authorization, Access-Control-Request-Headers");

// include database and object files

require_once('../conf/settings.config.php');
require_once('../modals/user.php');
require_once('../authentication/validate.php');
try {

   $user = new user($localhost);
   // authorization
   $authO = Authorization();

   // fetching all user
   $rows = $user->count();

   $users_arr = array();
   $users_arr["count"] = array();
   if ($rows > 0 && $authO->role == "0") {

      $users_arr["count"] = $rows;
      // show users data in json format
      echo json_encode($users_arr);
   } else {
      // set response code - 404 Not found
      http_response_code(404);

      // tell the user no users found
      echo json_encode(
         array("message" => "count users = 0")
      );
   }
   // set response code - 200 OK
   http_response_code(200);
} catch (PDOException $e) {

   echo "There is some problem in connection: " . $e->getMessage();
}
