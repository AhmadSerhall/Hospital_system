<?php
$host='localhost';
$username='root';
$password='';
$db_name='hospitaldb';

$mysqli = new mysqli($host, $username, $password, $db_name);

if ($mysqli->connect_error) {
    die("" . $mysqli->connect_error);
} else {
    
}
?>