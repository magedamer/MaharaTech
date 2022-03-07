<?php
require 'server.php';


$title = $_POST['title'];
$descr = $_POST['descr'];

if(isset($_POST['sub'])){

    if(empty($title)){

    }
    else{
        $sql = "INSERT INTO `crud`.`notes` (`Sr.No`, `title`, `descr`, `Time`) VALUES (NULL, '{$title}', '{$descr}', NOW());";
        mysqli_query($con,$sql);
    }
}

    header("Location: ./index.php");

mysqli_close($con);


?>
