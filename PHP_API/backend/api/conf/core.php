<?php
require '../libs/vendor/autoload.php';

use Lcobucci\JWT\Signer\Key;
use Lcobucci\JWT\Signer\Hmac\Sha256;

// show error reporting
ini_set('display_errors', 1);
error_reporting(E_ALL);

// get your default time-zone
date_default_timezone_get();

// variables used for jwt
$iss = "http://cse485admin.com";
$jti = '4f1g23a12aa';
$signer = new Sha256();
$time = time();
$Key = new Key('datngodoan');
$nbf = $time + 2;
$exp = $time + 3600*24;

// page given in URL parameter, default page is one
// $page = isset($_GET['page']) ? $_GET['page'] : 1;

// set number of records per page
// $records_per_page = $_GET['entry'];

// calculate for the query LIMIT clause
// $from_record_num = ($records_per_page * $page) - $records_per_page;
