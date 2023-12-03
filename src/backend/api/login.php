<<?php
header('Access-Controll-Allow-Origin:*');
include("connection.php");
$username = $_POST['username'];
$password = $_POST['password'];
$query=$mysqli->prepare('select username,password from users where username='$username' and password='$password'');
$query->execute();
$query->store_result();
$num_rows=$query->num_rows;
$query->fetch();


$response=[];
if($num_rows== 0){
    $response['status']= 'user not found';
    echo json_encode($response);
} else {
    if(password_verify($password,$hashed_password)){
        $response['status']= 'logged in';
        $response['user_id']=$id;
        $response['name']=$name;
        echo json_encode($response);
    } else {
        $response['status']= 'wrong credentials';
        echo json_encode($response);
    }
};