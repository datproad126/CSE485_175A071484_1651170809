<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Origin, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// include database and object file
require_once('../conf/settings.config.php');
require_once('../modals/user.php');
 
// get database connection
$blog = new blog($localhost);
 
// get user id
$data = json_decode(file_get_contents("php://input"));

// set user id to be deleted
$blog->category_id = $data->categogy;

// delete the user
if($user->readBlog()){
 
    // set response code - 200 ok
    http_response_code(200);
 
    // tell the user
    echo json_encode(array("message" => "User ".$user->username." was deleted."));
}
 
// if unable to delete the user
else{
 
    // set response code - 503 service unavailable
    http_response_code(503);
 
    // tell the user
    echo json_encode(array("message" => "Unable to delete user."));
}
?>
