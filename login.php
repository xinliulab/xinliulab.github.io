<?php
ob_start();
session_start();
if(isset($_POST['login']))
{
if(!$fh = fopen('pwd.dat','w')) {
do_error_exit('Error opening data file. <br />Please contact the system administrator. <br />Sorry for the inconvenience.');
}

$username1[0]= 'kaly';
$username1[1]= crypt('mypassword','rl');

$user_pass_string= implode('=',$username1);
fwrite($fh,"$user_pass_string\n");

flock($fh);
flush($fh);
fclose($fh);

$username = $_POST['username'];
$password = $_POST['pswd'];

$tempwd = crypt($password,'rl');

$fh = fopen('pwd.dat','r');

for($line = fgets($fh); !feof($fh) ; $line = fgets($fh))
{
$line = trim($line);
$userData = explode("=",$line);
if ($userData[0] == $username)
$pass = $userData[1];

}
fclose($fh);

echo "US: ".$username." pass: ".$pass;
exit;
if (crypt($password, $pass) == $pass){
$_SESSION['phplogin'] = true;
header('Location: main_forum.php');
exit;
} else {
?>
<script type="text/javascript">
<!--
alert('Wrong Password, Please Try Again')
//-->
</script>
<?php
}
}
?><!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html>
<head>
<title> PHP Login </title>
</head>
<body>
<center>
Username:<br>
Password:<br>
<form method="post" action="">
<input type="username" name="username">
<input type="password" name="pswd">
<input type="submit" name="login" value="Login">
</form>
</center>
</body>
</html>
<?php ob_flush(); ?> 
