<?php
//Step1
 $db = mysqli_connect('db1.cs.umbc.edu','xinliu1','aAa7yvFDtwIwyNnb','user_xinliu1')
 or die('Error connecting to MySQL server.');
?>

<html>
    <body>
          <?php
                $query = "SELECT * FROM `mytable`;";
                $result = mysqli_query($db, $query);
                while($row = mysqli_fetch_assoc($result)) {
                      // Display your datas on the page
                }
          ?>
    </body>
</html>