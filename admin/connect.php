<?php
$user = "root";
$pass = "root";
$host = "localhost";
$db = "courseinfo";

$conn = mysqli_conect($host, $user, $pass, $db);

if (!$conn) {
    echo 'sumpin done busted;';
    exit;
}

//echo "connected";

// select all of the data from the table
$myQuery = "SELECT * FROM courseinfo";
$result = mysqli_query($conn, $myQuery);
$rows = array();

while ($row = mysqli_detch_assoc($result)) {
    $rows[] = $row;
};

echo json_encode($rows);

?>