<?php
require_once("admin_connect.php");
if(isset($_GET['search'])){
	$search = trim($_GET['search']);
	$sql = "SELECT title FROM services WHERE UPPER(title) REGEXP UPPER('{$search}') ORDER BY priority DESC";
	$res = send_query($sql);
    $res_arr = [];
    for($i = 0; $i < $res->num_rows; $i++){
        if ($i == 5) break;
        $row = $res->fetch_row();
        array_push($res_arr, $row[0]);

    }
    echo json_encode($res_arr);
}
?>