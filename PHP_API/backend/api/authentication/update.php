<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// files for decoding jwt will be here
// required to encode json web token
include_once '../conf/core.php';
include_once '../libs/vendor/autoload.php';

use Lcobucci\JWT\Builder;

// database connection will be here
// files needed to connect to database
include_once '../conf/settings.config.php';
include_once '../modals/user.php';

// get database connection and instantiate product object
$user = new user($localhost);

// check email existence here
// get posted data
$data = json_decode(file_get_contents("php://input"));

// get jwt
$jwt = isset($data->jwt) ? $data->jwt : "";

// decode jwt here
// if jwt is not empty
if ($jwt) {

   // if decode succeed, show user details
   try {
      // set user property values here
      // set user property values
      $user->username = $data->username;
      $user->display_name = $data->display_name;
      $user->email = $data->email;
      $user->password = $data->password;
      $user->id = $decoded->data->id;

      // update user will be here
      // update the user record
      if ($user->auth_update()) {
         // regenerate jwt will be here
         // we need to re-generate jwt because user details might be different
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
                  "name" => $user->name,
                  "email" => $user->email
               )
            ) // Data related to the signer user
            // Configures a new header, called "foo"
            ->withHeader('foo', 'bar')
            // Builds a new token
            ->getToken($signer, $Key);

         $jwt = strval($user->token);

         // set response code
         http_response_code(200);

         // response in json format
         echo json_encode(
            array(
               "jwt" => $jwt
            )
         );
      }

      // message if unable to update user
      else {
         // set response code
         http_response_code(401);

         // show error message
         echo json_encode(array("message" => "Unable to update user."));
      }
   }

   // catch failed decoding will be here
   // if decode fails, it means jwt is invalid
   catch (Exception $e) {

      // set response code
      http_response_code(401);

      // show error message
      echo json_encode(array(
         "message" => "Access denied.",
         "error" => $e->getMessage()
      ));
   }
}

// error message if jwt is empty will be here
// show error message if jwt is empty
else {

   // set response code
   http_response_code(401);

   // tell the user access denied
   echo json_encode(array("message" => "Access denied."));
}
