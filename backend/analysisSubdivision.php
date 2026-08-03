<?php
require_once("admin_connect.php");
if(isset($_GET['name'])){
	$name = trim($_GET['name']);
	$res_arr = [];
	$sql = "SELECT title, price, time_ready, nomenc FROM services WHERE UPPER(subdivision) REGEXP UPPER('{$name}');";
	$result = send_query($sql);
	for($i = 0; $i < $result->num_rows; $i++){
		$row = $result->fetch_row();
		array_push($res_arr, [$row[0], $row[2], $row[1], $row[3]]);
	}
	echo json_encode($res_arr);
}
?>