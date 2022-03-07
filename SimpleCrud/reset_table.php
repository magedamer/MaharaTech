<?php
require 'server.php';

$sqlclear = "DELETE FROM `notes` WHERE 1";
mysqli_query($con, $sqlclear);

$sqlreset = "alter table notes AUTO_INCREMENT=1";
mysqli_query($con, $sqlreset);

header("Location: ./index.php");

mysqli_close($con);
