<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Origin, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// include database and object file
require_once('../conf/settings.config.php');
require_once('../modals/blog.php');
try {
   // get database connection
   $blog = new blog($localhost);

   $categories_arr = array();
   $categories_arr["categories"] = array();

   $rows = $blog->readCategory();

   if ($rows > 0) {
      while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
         // extract row
         // this will make $row['name'] to
         // just $name only
         extract($row);

         $category_item = array(
            "id" => intval($id),
            "content" => $content,
            "created_date" => date($created_date),
            "title" => $title,
            "author_id" => intval($author_id),
            "category_id" => intval($category_id),
            "enabled"  => intval($enabled)
         );
      }
   } else {
      // set response code - 404 Not found
      http_response_code(404);

      // tell the category no blog found
      echo json_encode(
         array("message" => "No blog found.")
      );
   }
   // set response code - 200 OK
   http_response_code(200);
   // show blog data in json format
   echo json_encode($categories_arr);
} catch (PDOException $e) {

   echo "There is some problem in connection: " . $e->getMessage();
}
