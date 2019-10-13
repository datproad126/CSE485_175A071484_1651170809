<?php
require_once('../conf/DBConnection.php');
class user extends DBConnection
{
   // table username
   private $table = "`user`";

   // object properties
   public $id;
   public $username;
   public $password;
   public $display_name;
   public $email;
   public $registered_date;
   public $role;
   // read user
   public function read()
   {
      // select all query
      $query = "SELECT * FROM " . $this->table;
      // getquery statement
      return parent::getQuery($query);
   }
   // used when filling up the update user form
   function readOne()
   {
      try {
         // query to read single record
         $query = "SELECT * FROM " . $this->table_name . "
           WHERE
               p.id = ?
           LIMIT
               0,1";

         // prepare query statement
         $stmt = $this->dbc->prepare($query);

         // bind id of user to be updated
         $stmt->bindParam(1, $this->id);

         // execute query
         $stmt->execute();

         // get retrieved row
         $row = $stmt->fetch(PDO::FETCH_ASSOC);

         // set values to object properties
         $this->id = $row['id'];
         $this->username = $row['username'];
         $this->password = $row['password'];
         $this->display_name = $row['display_name'];
         $this->email = $row['email'];
         $this->registered_date = $row['registered_date'];
         $this->role = $row['role'];
      } catch (PDOException $e) {
         echo "There is some problem: " . $e->getMessage();
      }
   }
   // create user
   // create new user record
   function create()
   {
      try {
         // insert query
         $query = "INSERT INTO " . $this->table . "(`username`, `password`, `display_name`, `email`)
         VALUES ( :username, :password, :display_name, :email)";
         // prepare the query
         $stmt = $this->dbc->prepare($query);

         // sanitize
         $this->username = htmlspecialchars(strip_tags($this->username));
         $this->password = htmlspecialchars(strip_tags($this->password));
         $this->display_name = htmlspecialchars(strip_tags($this->display_name));
         $this->email = htmlspecialchars(strip_tags($this->email));

         // bind the values
         $stmt->bindValue(':username', $this->username, PDO::PARAM_STR);
         $stmt->bindValue(':display_name', $this->display_name, PDO::PARAM_STR);
         $stmt->bindValue(':email', $this->email, PDO::PARAM_STR);

         // hash the password before saving to database
         $password_hash = password_hash($this->password, PASSWORD_BCRYPT);
         $stmt->bindValue(':password', $password_hash, PDO::PARAM_STR);
         $check = $stmt->execute();
         // execute the query, also check if query was successful
         if ($check) {
            return true;
         }

         return false;
      } catch (PDOException $e) {
         echo "There is some problem: " . $e->getMessage();
      }
   }

   // emailExists() method will be here
   // check if given email exist in the database
   function emailOrUserExists()
   {
      // query to check if email exists
      $query = "SELECT `id`, `username`, `display_name`, `password`, `email`
           FROM " . $this->table . "
           WHERE (`email` = ? OR `username` = ?)
           LIMIT 0,1";

      // prepare the query
      $stmt = $this->dbc->prepare($query);

      // sanitize
      $this->email = htmlspecialchars(strip_tags($this->email));
      $this->username = htmlspecialchars(strip_tags($this->username));

      // bind given email value
      $stmt->bindValue(1, $this->email);
      $stmt->bindValue(2, $this->username);

      // execute the query
      $stmt->execute();

      // get number of rows
      $num = $stmt->rowCount();

      // if email exists, assign values to object properties for easy access and use for php sessions
      if ($num > 0) {

         // get record details / values
         $row = $stmt->fetch(PDO::FETCH_ASSOC);

         // assign values to object properties
         $this->id = $row['id'];
         $this->username = $row['username'];
         $this->name = $row['display_name'];
         $this->password = $row['password'];
         $this->email = $row['email'];

         // return true because email exists in the database
         return true;
      }

      // return false if email does not exist in the database
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
      try {
         // delete query
         $query = "DELETE FROM " . $this->table . " WHERE id = ?";

         // prepare query
         $stmt = $this->dbc->prepare($query);

         // sanitize
         $this->id = htmlspecialchars(strip_tags($this->id));

         // bind id of record to delete`
         $stmt->bindParam(1, $this->id);

         // execute query
         if ($stmt->execute()) {
            return true;
         }

         return false;
      } catch (PDOException $e) {
         echo "There is some problem: " . $e->getMessage();
      }
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
   // used for paging users
   public function count()
   {
      $query = "SELECT COUNT(*) as total_rows FROM " . $this->table_name . "";

      $stmt = $this->conn->prepare($query);
      $stmt->execute();
      $row = $stmt->fetch(PDO::FETCH_ASSOC);

      return $row['total_rows'];
   }
}
