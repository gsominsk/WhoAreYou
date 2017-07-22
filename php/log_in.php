<?php

	include('connect.php');

	$data_login = "michael";
	// $data_pass = "starlordkephulk08200";
	$data_pass = "11";


	$login = trim($_POST['login']);
	$password = trim($_POST['password']);

	if ($login === $data_login && $password === $data_pass) {
		$_SESSION['login'] = $_POST['login'];
		$_SESSION['password'] = $_POST['password'];
		echo (json_encode(["status" => 200, "user" => "found"]));
	} else {
		echo (json_encode(["status" => 200, "user" => "not found"]));
	}
?>
