<?php
   if( $_GET["username"] || $_GET["password"] ) {
   }
?>
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <title>Document</title>
</head>
<body>
   <form action="<?php $_PHP_SELF ?>" method="post">

      Username: <input type="text" name="username">
      Password: <input type="password" name="password">
      <input type="submit">
   </form>
   <script src="login.js"></script>
</body>
</html>