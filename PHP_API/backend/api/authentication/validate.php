<?php
use Lcobucci\JWT\Parser;
use Lcobucci\JWT\ValidationData;

// get authorization header
/** 
 * Get header Authorization
 * */
function getAuthorizationHeader()
{
   $headers = null;
   if (isset($_SERVER['Authorization'])) {
      $headers = trim($_SERVER["Authorization"]);
   } else if (isset($_SERVER['HTTP_AUTHORIZATION'])) { //Nginx or fast CGI
      $headers = trim($_SERVER["HTTP_AUTHORIZATION"]);
   } elseif (function_exists('apache_request_headers')) {
      $requestHeaders = apache_request_headers();
      // Server-side fix for bug in old Android versions (a nice side-effect of this fix means we don't care about capitalization for Authorization)
      $requestHeaders = array_combine(array_map('ucwords', array_keys($requestHeaders)), array_values($requestHeaders));
      //print_r($requestHeaders);
      if (isset($requestHeaders['Authorization'])) {
         $headers = trim($requestHeaders['Authorization']);
      }
   }
   return $headers;
}
/**
 * get access token from header
 * */
function getBearerToken()
{
   $headers = getAuthorizationHeader();
   // HEADER: Get the access token from the header
   if (!empty($headers)) {
      if (preg_match('/Bearer\s(\S+)/', $headers, $matches)) {
         return $matches[1];
      }
   }
   return null;
}
// get role
function Authorization()
{
   // required to decode jwt
   require '../conf/core.php';
   require '../libs/vendor/autoload.php';


   $jwt = getBearerToken();

   // decode jwt here
   // if jwt is not empty
   if ($jwt) {

      // if decode succeed, show user details
      try {
         $authO = new ValidationData(); // It will use the current time to validate (iat, nbf and exp)
         $authO->setIssuer($iss);
         $authO->setId($jti);
         $authO->setCurrentTime($_SERVER['REQUEST_TIME']);
         $token = (new Parser())->parse($jwt); // Parses from a string

         // set response code
         http_response_code(200);

         if (!$token->validate($authO)) {
            throw new RuntimeException('Time out! This token had been detroyed!');
         } else {
            // show user details
            return $token->getClaim('data');
         }
      }
      // catch will be here
      // if decode fails, it means jwt is invalid
      catch (Exception $e) {

         // set response code
         http_response_code(401);

         // tell the user access denied  & show error message
         echo json_encode(array(
            "message" => "Access denied.",
            "error" => $e->getMessage()
         ));
      }
   }

   // error if jwt is empty will be here
   // show error message if jwt is empty
   else {

      // set response code
      http_response_code(401);

      // tell the user access denied
      echo json_encode(array("message" => "Access denied."));
   }
}
