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
   public $token;
   // read user -> manager
   public function read()
   {
      // select all query
      $query = "SELECT * FROM " . $this->table . "WHERE NOT `role` = 0";
      // getquery statement
      return parent::getQuery($query);
   }
   // used when filling up the update user form -> manager
   public function readOne()
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
         $stmt->bindValue(1, $this->id);

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
   // create user -> auth
   public function auth_create()
   {
      try {
         // insert query
         $query = "INSERT INTO " . $this->table . "(`username`, `password`, `display_name`, `email`, `role`)
         VALUES ( :username, :password, :display_name, :email, :role)";
         // prepare the query
         $stmt = $this->dbc->prepare($query);

         // sanitize
         $this->username = htmlspecialchars(strip_tags($this->username));
         $this->password = htmlspecialchars(strip_tags($this->password));
         $this->display_name = htmlspecialchars(strip_tags($this->display_name));
         $this->email = htmlspecialchars(strip_tags($this->email));
         $this->role = intval(htmlspecialchars(strip_tags($this->role)));

         // bind the values
         $stmt->bindValue(':username', $this->username, PDO::PARAM_STR);
         $stmt->bindValue(':display_name', $this->display_name, PDO::PARAM_STR);
         $stmt->bindValue(':email', $this->email, PDO::PARAM_STR);
         $stmt->bindValue(':role', $this->email, PDO::PARAM_INT);

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
   // emailExists() method will be here -> auth
   // check if given email exist in the database
   public function auth_emailOrUserExists()
   {
      // query to check if email exists
      $query = "SELECT `id`, `username`, `display_name`, `password`, `email`, `role`
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
         $this->display_name = $row['display_name'];
         $this->password = $row['password'];
         $this->email = $row['email'];
         $this->role = $row['role'];

         // return true because email exists in the database
         return true;
      }

      // return false if email does not exist in the database
      return false;
   }
   // update user -> auth
   public function auth_update()
   {

      // if password needs to be updated
      $password_set = !empty($this->password) ? ", password = :password" : "";

      // if no posted password, do not update the password
      $query = "UPDATE " . $this->table . "
            SET
                display_name = :display_name,
                email = :email
                {$password_set}
            WHERE id = :id";

      // prepare the query
      $stmt = $this->dbc->prepare($query);

      // sanitize
      $this->display_name = htmlspecialchars(strip_tags($this->display_name));
      $this->email = htmlspecialchars(strip_tags($this->email));

      // bind the values from the form
      $stmt->bindValue(':display_name', $this->display_name);
      $stmt->bindValue(':email', $this->email);

      // hash the password before saving to database
      if (!empty($this->password)) {
         $this->password = htmlspecialchars(strip_tags($this->password));
         $password_hash = password_hash($this->password, PASSWORD_BCRYPT);
         $stmt->bindValue(':password', $password_hash);
      }

      // unique ID of record to be edited
      $stmt->bindValue(':id', $this->id);

      // execute the query
      if ($stmt->execute()) {
         return true;
      }

      return false;
   }
   // delete user -> manager
   public function delete()
   {
      try {
         // delete query
         $query = "DELETE FROM " . $this->table . " WHERE id = ?";

         // prepare query
         $stmt = $this->dbc->prepare($query);

         // sanitize
         $this->id = htmlspecialchars(strip_tags($this->id));

         // bind id of record to delete`
         $stmt->bindValue(1, $this->id);

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
   public function search($keywords, $field)
   {
      if (!empty($keywords)) {
         // select all query
         $query = "SELECT * FROM " . $this->table . "
                 WHERE
                 id LIKE :keywords OR username LIKE :keywords OR display_name LIKE :keywords 
                 OR email LIKE :keywords OR registered_date LIKE :keywords OR role LIKE :keywords
                 ";
         // prepare query statement
         $stmt = $this->dbc->prepare($query);

         // sanitize
         $keywords = htmlspecialchars(strip_tags($keywords));

         // bind
         $stmt->bindValue(':keywords', $keywords);
         // var_dump($stmt);
      } else {
         $orders = array("id", "username", "display_name", "email", "registered_date", "role");
         $key = array_search($field, $orders);
         $order = $orders[$key];
         // select all query
         $query = "SELECT $order FROM " . $this->table . "
            ORDER BY
            $order ASC";
         // prepare query statement
         $stmt = $this->dbc->prepare($query);

         // sanitize
         $field = htmlspecialchars(strip_tags($field));

         $stmt->bindValue(':field', $field);
      }

      // execute query
      $stmt->execute();
      // $stmt->debugDumpParams();
      return $stmt;
   }
   // used for paging users -> manager
   public function count()
   {
      $query = "SELECT COUNT(*) as total_rows FROM " . $this->table . "";

      $stmt = $this->dbc->prepare($query);
      $stmt->execute();
      $row = $stmt->fetch(PDO::FETCH_ASSOC);

      return $row['total_rows'];
   }
   // read user with pagination
   public function readPaging($from_record_num, $records_per_page, $sort, $filter)
   {
         $orders = array();
         $orders['filter'] = array("id", "username", "display_name", "email", "registered_date", "role");
         $orders['sort'] = array("ASC", "DESC");
         $key1 = array_search($filter, $orders['filter']);
         $key2 = array_search($sort, $orders['sort']);
         $order1 = $orders['filter'][$key1];
         $order2 = $orders['sort'][$key2];

         // select all query
         $query = "SELECT * FROM " . $this->table . "ORDER BY $order1 $order2 LIMIT ?, ?";

         // prepare query statement
         $stmt = $this->dbc->prepare($query);

         // bind variable values
         $stmt->bindParam(1, $from_record_num, PDO::PARAM_INT);
         $stmt->bindParam(2, $records_per_page, PDO::PARAM_INT);

         // execute query
         $stmt->execute();
         // $stmt->debugDumpParams();

         // return values from database
         return $stmt;
   }
}
