<?php
require_once("admin_connect.php");

if (!isset($_GET['search'])) exit;

$res_arr = [];
$search = trim($_GET['search']);
$sql0 = "SELECT title, price, time_ready, nomenc FROM services WHERE title='{$search}'";
$result = send_query($sql0);

if ($result->num_rows == 0) {
    $sql = "SELECT title, price, time_ready, nomenc FROM services WHERE UPPER(title) REGEXP UPPER('{$search}') ORDER BY priority DESC";
    $result = send_query($sql);
    for($i = 0; $i < $result->num_rows; $i++){
        $row = $result->fetch_row();
        array_push($res_arr, [$row[0], $row[2], $row[1], $row[3]]);
    }
} else {
    $row = $result->fetch_row();
    array_push($res_arr, [$row[0], $row[2], $row[1], $row[3]]);
}

echo json_encode($res_arr);

?>