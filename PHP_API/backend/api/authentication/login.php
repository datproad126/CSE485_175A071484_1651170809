<?php
session_start();
// required headers
header("Access-Control-Allow-Origin: http://localhost/api/");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// database connection will be here
// files needed to connect to database
include_once '../conf/settings.config.php';
include_once '../user/modal_user.php';

// get database connection and instantiate product object
$user = new user($localhost);

// check email existence here
// get posted data
$data = json_decode(file_get_contents("php://input"));

// set product property values
$user->email = $data->email_or_username;
$user->username = $data->email_or_username;

$email_or_user_exists = $user->emailOrUserExists();

// files for jwt will be here
// generate json web token
include_once '../conf/core.php';
include_once '../libs/php-jwt/src/BeforeValidException.php';
include_once '../libs/php-jwt/src/ExpiredException.php';
include_once '../libs/php-jwt/src/SignatureInvalidException.php';
include_once '../libs/php-jwt/src/JWT.php';

use \Firebase\JWT\JWT;

// generate jwt will be here
// check if email exists and if password is correct
if ($email_or_user_exists && password_verify($data->password, $user->password)) {

    $token = array(
        "iss" => $iss,
        "aud" => $aud,
        "iat" => $iat,
        "nbf" => $nbf,
        "data" => array(
            "id" => $user->id,
            "username" => $user->username,
            "name" => $user->name,
            "email" => $user->email
        )
    );

    // set response code
    http_response_code(200);

    // generate jwt
    $jwt = JWT::encode($token, $key);
    echo json_encode(
        array(
            "message" => "Successful login.",
            "jwt" => $jwt
        )
    );
}

// login failed will be here
// login failed
else {

    // set response code
    http_response_code(401);

    // tell the user login failed
    echo json_encode(array("message" => "Login failed."));
}
