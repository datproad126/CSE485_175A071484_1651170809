<?php
require_once('../conf/DBConnection.php');
class user extends DBConnection
{
   // table username
   private $table = "user";

   // object properties
   public $id;
   public $username;
   public $password;
   public $display_name;
   public $email;
   public $dateCreated;
   public $role;
   // read user
   public function read()
   {
      // select all query
      $query = "SELECT * FROM " . $this->table;
      // getquery statement
      return parent::getQuery($query);
   }
   // create user
   function create()
   {

      // query to insert record
      $query = "INSERT INTO" . $this->table .
         " SET username=:username, password=:password, display_name=:display_name, email=:email, role=:role";

      // prepare query
      $stmt = $this->dbc->query($query);

      // sanitize
      $this->username = htmlspecialchars(strip_tags($this->username));
      $this->password = htmlspecialchars(strip_tags($this->password));
      $this->display_name = htmlspecialchars(strip_tags($this->display_name));
      $this->email = htmlspecialchars(strip_tags($this->email));
      $this->role = htmlspecialchars(strip_tags($this->role));

      // bind values
      $stmt->bindParam(":username", $this->username);
      $stmt->bindParam(":password", $this->password);
      $stmt->bindParam(":display_name", $this->display_name);
      $stmt->bindParam(":email", $this->email);
      $stmt->bindParam(":role", $this->role);

      // execute query
      if ($stmt->execute()) {
         return true;
      }
      return false;
   }
   // update user
   function update()
   {

      // update query
      $query = "UPDATE
                 " . $this->table . "
             SET
                 username = :username,
                 password = :password,
                 display_name = :display_name,
                 email = :email,
                 role = :role
             WHERE
                 id = :id";

      // prepare query statement
      $stmt = $this->conn->prepare($query);

      // sanitize
      $this->username = htmlspecialchars(strip_tags($this->username));
      $this->password = htmlspecialchars(strip_tags($this->password));
      $this->display_name = htmlspecialchars(strip_tags($this->display_name));
      $this->email = htmlspecialchars(strip_tags($this->email));
      $this->role = htmlspecialchars(strip_tags($this->role));

      // bind values
      $stmt->bindParam(":username", $this->username);
      $stmt->bindParam(":password", $this->password);
      $stmt->bindParam(":display_name", $this->display_name);
      $stmt->bindParam(":email", $this->email);
      $stmt->bindParam(":role", $this->role);

      // execute the query
      if ($stmt->execute()) {
         return true;
      }

      return false;
   }
   // delete user
   function delete()
   {

      // delete query
      $query = "DELETE FROM " . $this->table_name . " WHERE id = ?";

      // prepare query
      $stmt = $this->conn->prepare($query);

      // sanitize
      $this->id = htmlspecialchars(strip_tags($this->id));

      // bind id of record to delete
      $stmt->bindParam(1, $this->id);

      // execute query
      if ($stmt->execute()) {
         return true;
      }

      return false;
   }
   // search user
   function search($keywords)
   {

      // select all query
      $query = "SELECT * FROM " . $this->table_name . "
              WHERE
                  username LIKE ? OR display_name LIKE ? OR email LIKE ? OR role LIKE ?
              ORDER BY
                  registed_date DESC";

      // prepare query statement
      $stmt = $this->conn->prepare($query);

      // sanitize
      $keywords = htmlspecialchars(strip_tags($keywords));
      $keywords = "%{$keywords}%";

      // bind
      $stmt->bindParam(1, $keywords);
      $stmt->bindParam(2, $keywords);
      $stmt->bindParam(3, $keywords);
      $stmt->bindParam(4, $keywords);

      // execute query
      $stmt->execute();

      return $stmt;
   }
      // used for paging products
      public function count()
      {
         $query = "SELECT COUNT(*) as total_rows FROM " . $this->table_name . "";
   
         $stmt = $this->conn->prepare($query);
         $stmt->execute();
         $row = $stmt->fetch(PDO::FETCH_ASSOC);
   
         return $row['total_rows'];
      }
}
