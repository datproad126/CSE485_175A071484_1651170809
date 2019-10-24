<?php
require_once('../conf/DBConnection.php');
class blog extends DBConnection
{
   // table username
   private $table = "`blog`";

   // object properties
   public $id;
   public $content;
   public $created_date;
   public $title;
   public $category_id;
   public $author_id;
   public $enabled;
   // read user -> manager
   public function readCategory()
   {
      // select all query
      $query = "SELECT * FROM " . $this->table . "";
      // getquery statement
      return parent::getQuery($query);
   }
}
