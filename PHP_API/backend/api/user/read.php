<?php
require_once('../conf/header.php');
require_once('../conf/settings.config.php');
require_once('user.php');
try {
   $user = new user($localhost);
   // fetching all user
   $rows = $user->read();
   $users_arr = array();
   $users_arr["user"] = array();
   if ($rows > 0) {
      foreach ($rows as $key => $row) {
         extract($row);
         $user_item = array(
            "id" => $id,
            "username" => $username,
            "password" => $password,
            "name" => $display_name,
            "email" => $email,
            "dateCreated" => $registered_date,
            "role"  => $role
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
   echo json_encode($users_arr);
} catch (PDOException $e) {

   echo "There is some problem in connection: " . $e->getMessage();
}

// pagination 
