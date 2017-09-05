<?php
$CID = '470b5dbe87974b5ecdc60fbae00bf947';
if(isset($_COOKIE[$CID])){
  $UID = $_COOKIE[$CID];
 }
 else{
   require_once("login.php");
 }
$host="db1.cs.umbc.edu:3306"; // Host name 
$username="rberge1"; // Mysql username 
$password="kZlZKO53OhSr4apG"; // Mysql password 
$db_name="user_cmsc341"; // Database name 
$tbl_name="forum_question"; // Table name

// Connect to server and select databse.
mysql_connect("$host", "$username", "$password")or die("cannot connect"); 
mysql_select_db("$db_name")or die("cannot select DB");

$sql="SELECT * FROM $tbl_name ORDER BY id DESC";
// OREDER BY id DESC is order result by descending 
$result=mysql_query($sql);
?>
</head>

<body>
<table width="100%" border="0" align="center" cellpadding="3" cellspacing="1" bgcolor="#CCCCCC">
<tr>
<th width="6%" align="center" bgcolor="#E6E6E6"><strong>#</strong></th>
<th width="53%" align="center" bgcolor="#E6E6E6"><strong>Topic</strong></th>
<th width="15%" align="center" bgcolor="#E6E6E6"><strong>Views</strong></th>
<th width="13%" align="center" bgcolor="#E6E6E6"><strong>Replies</strong></th>
<th width="13%" align="center" bgcolor="#E6E6E6"><strong>Date/Time</strong></th>
</tr>

<?php
while($rows=mysql_fetch_array($result)){ // Start looping table row 
?>
<tr>
<td bgcolor="#FFFFFF"><? echo $rows['id']; ?></td>
<td bgcolor="#FFFFFF"><a href="view_topic.php?id=<? echo $rows['id']; ?>"><? echo $rows['topic']; ?></a><BR></td>
<td align="center" bgcolor="#FFFFFF"><? echo $rows['view']; ?></td>
<td align="center" bgcolor="#FFFFFF"><? echo $rows['reply']; ?></td>
<td align="center" bgcolor="#FFFFFF"><? echo $rows['datetime']; ?></td>
</tr>

<?php
// Exit looping and close connection 
}
mysql_close();
?>
<tr>
<td colspan="5" align="right" bgcolor="#E6E6E6"><a href="create_topic.php"><strong>Create New Topic</strong> </a></td>
</tr>
</table>
