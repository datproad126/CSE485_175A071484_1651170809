<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');
 
// include database and object files
require_once('../conf/settings.config.php');
require_once('user.php');
 
// get database connection
$user = new user($localhost);
 
// set ID property of record to read
$user->id = isset($_GET['id']) ? $_GET['id'] : die();
 
// read the details of user to be edited
$user->readOne();
 
if($user->name!=null){
    // create array
    $user_arr = array(
        "id" =>  $user->id,
        "username" => $user->username,
        "password" => $user->password,
        "name" => $user->display_name,
        "email" => $user->email,
        "registered_date" => $user->registered_date,
        "role" => $user->role
    );
 
    // set response code - 200 OK
    http_response_code(200);
 
    // make it json format
    echo json_encode($user_arr);
}
 
else{
    // set response code - 404 Not found
    http_response_code(404);
 
    // tell the user user does not exist
    echo json_encode(array("message" => "user does not exist."));
}
?>