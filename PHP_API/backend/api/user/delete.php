<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// include database and object file
require_once('../conf/settings.config.php');
require_once('user.php');
 
// get database connection
$user = new user($localhost);
 
// get product id
$data = json_decode(file_get_contents("php://input"));
 
// set product id to be deleted
$user->id = $data->id;
$user->username = $data->username;
// delete the product
if($user->delete()){
 
    // set response code - 200 ok
    http_response_code(200);
 
    // tell the user
    echo json_encode(array("message" => "User ".$user->username." was deleted."));
}
 
// if unable to delete the product
else{
 
    // set response code - 503 service unavailable
    http_response_code(503);
 
    // tell the user
    echo json_encode(array("message" => "Unable to delete user."));
}
?>