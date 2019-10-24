<?php

// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Origin, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


// include database and object files
include_once '../conf/settings.config.php';
include_once '../modals/Utilities.php';
include_once '../modals/user.php';
require_once('../authentication/validate.php');

// utilities
$utilities = new Utilities();

// instantiate database and user object

$user = new user($localhost);
$data = json_decode(file_get_contents("php://input"));

// $page_url= "http://localhost:81/admin/user/";

// isset data
$page = isset($data->page) ? $data->page : 1;
$records_per_page = isset($data->entry) ? $data->entry : 10;
$filter =  isset($data->filter) ? $data->filter : 'id';
$sort =  isset($data->sort) ? $data->sort : 'ASC';

$num = $user->count();

if ($page > ceil($num / $records_per_page)) {
    $page = 1;
}

$from_record_num = ($records_per_page * $page) - $records_per_page;
$stmt = $user->readPaging($from_record_num, $records_per_page, $sort, $filter);

$authO = Authorization();
// check if more than 0 record found


if ($num > 0) {
    $check = $authO->role == "0" ? true : false;
    if (!$check) {
        // set response code - 404 Not found
        http_response_code(404);

        // tell the user users does not exist
        echo json_encode(
            array("message" => "No users found.")
        );
    }
    // users array
    $users_arr = array();
    $users_arr["records"] = array();
    $users_arr["paging"] = array();

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

    // include paging
    $total_rows = $user->count();
    $page_url = "http://localhost:81/admin/user/";
    $paging = $utilities->getPaging($page, $total_rows, $records_per_page, $page_url);
    $users_arr["paging"] = $paging;

    // set response code - 200 OK
    http_response_code(200);

    // make it json format
    echo json_encode($users_arr);
} else {

    // set response code - 404 Not found
    http_response_code(404);

    // tell the user users does not exist
    echo json_encode(
        array("message" => "No users found.")
    );
}
