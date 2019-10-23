<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Headers");
 
// include database and object files
include_once '../conf/core.php';
include_once './utilities.php';
include_once './modal_user.php';
require_once('../conf/settings.config.php');


// home page url
$home_url="http://18.39.105.26:8080/api/";

$data = json_decode(file_get_contents("php://input"));
 
// page given in URL parameter, default page is one
$page = isset($data->page) ? $data->page : 1;
 
// set number of records per page
$records_per_page = $data->entry;


// calculate for the query LIMIT clause
$from_record_num = ($records_per_page * $page) - $records_per_page;

// utilities
$utilities = new Utilities();

 
// instantiate database and user object
$user = new user($localhost);
 
// query users
$stmt = $user->readPaging($from_record_num, $records_per_page);
$num = $user->count();
 
// check if more than 0 record found
if($num>0){
 
    // users array
    $users_arr=array();
    $users_arr["records"]=array();
    $users_arr["paging"]=array();
 
    // retrieve our table contents
    // fetch() is faster than fetchAll()
    // http://stackoverflow.com/questions/2770630/pdofetchall-vs-pdofetch-in-a-loop
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);
 
        $user_item=array(
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
 
 
    // include paging
    $total_rows=$user->count();
    $page_url="{$home_url}user/pagination.php?";
    $paging=$utilities->getPaging($page, $total_rows, $records_per_page, $page_url);
    $users_arr["paging"]=$paging;
 
    // set response code - 200 OK
    http_response_code(200);
 
    // make it json format
    echo json_encode($users_arr);
}
 
else{
 
    // set response code - 404 Not found
    http_response_code(404);
 
    // tell the user users does not exist
    echo json_encode(
        array("message" => "No users found.")
    );
}
