<?php
session_start();
// required headers
header("Access-Control-Allow-Origin: http://localhost:81/api/");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// database connection will be here
// files needed to connect to database
include_once '../conf/settings.config.php';
include_once '../user/modal_user.php';

// get database connection and instantiate product object
$user = new user($localhost);

// submitted data will be here
// get posted data
$data = json_decode(file_get_contents("php://input"));

// set product property values
$user->username = $data->username;
$user->display_name = $data->name;
$user->password = $data->password;
$user->email = $data->email;

// use the create() method here
// create the user
if (
   !empty($user->username) &&
   !empty($user->display_name) &&
   !empty($user->email) &&
   !empty($user->password) &&
   $user->create()
) {
   // set response code
   http_response_code(200);

   // display message: user was created
   echo json_encode(array("message" => "User was created."));
}

// message if unable to create user
else {

   // set response code
   http_response_code(400);

   // display message: unable to create user
   echo json_encode(array("message" => "Unable to create user."));
}
