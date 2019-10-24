<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

// database connection will be here
// files needed to connect to database
include_once '../conf/settings.config.php';
include_once '../modals/user.php';

// files for jwt will be here
// generate json web token
require '../conf/core.php';
require '../libs/vendor/autoload.php';

use Lcobucci\JWT\Builder;

// get database connection and instantiate product object
$user = new user($localhost);

// check email existence here
// get posted data
$data = json_decode(file_get_contents("php://input"));

// set product property values
// var_dump(file_get_contents("php://input"));
if (filter_var($data->loginInput, FILTER_VALIDATE_EMAIL)) {
    $user->email = $data->loginInput;
    $input_exists = $user->auth_emailOrUserExists();
} else {
    $user->username = $data->loginInput;
    $input_exists = $user->auth_emailOrUserExists();
}

// generate jwt will be here
// check if email exists and if password is correct
if ($input_exists && password_verify($data->password, $user->password)) {

    // set response code
    http_response_code(200);

    // generate jwt
    $user->token = (new Builder())  // Configures the issuer (iss claim)
        ->issuedBy($iss)
        // Configures the id (jti claim)
        ->identifiedBy($jti)
        // Configures the time that the token was issue (iat claim)
        ->issuedAt($time)
        // Configures the time that the token can be used (nbf claim)
        ->canOnlyBeUsedAfter($nbf)
        // Configures the expiration time of the token (exp claim)
        ->expiresAt($exp)
        // Configures a new claim, called "uid"
        ->withClaim(
            'data',
            array(
                "id" => $user->id,
                "username" => $user->username,
                "name" => $user->display_name,
                "email" => $user->email,
                "role" => $user->role
            )
        ) // Data related to the signer user
        // Configures a new header, called "foo"
        ->withHeader('foo', 'bar')
        // Builds a new token
        ->getToken($signer, $Key);

    echo json_encode(
        array(
            "message" => "you have a new token",
            "token" => strval($user->token)
        )
    ); // The string representation of the object is a JWT string (pretty easy, right?)
}

// login failed will be here
// login failed
else {

    // set response code
    http_response_code(401);

    // tell the user login failed
    echo json_encode(array("message" => "Login failed."));
}
