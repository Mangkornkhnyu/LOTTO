<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "lottery_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$data = json_decode(file_get_contents("php://input"), true);

$lottery_type = $data['lottery_type'];
$top_number = $data['top_number'];
$bottom_number = $data['bottom_number'];
$additional_field = $data['additional_field'];

// Get current timestamp
$timestamp = date("Y-m-d H:i:s");

$sql = "INSERT INTO lottery (lottery_type, top_number, bottom_number, additional_field, timestamp)
VALUES ('$lottery_type', '$top_number', '$bottom_number', '$additional_field', '$timestamp')";

if ($conn->query($sql) === TRUE) {
    echo "เพิ่มข้อมูลสำเร็จ";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
