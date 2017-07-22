<?php
    include ('connect.php');

    $data_login = "michael";
	// $data_pass = "starlordkephulk08200";
	$data_pass = "11";

    if ($_SESSION['login'] === $data_login && $_SESSION['password'] === $data_pass) {
        echo (json_encode(["status" => 200, "user" => "found"]));
    } else {
        echo (json_encode(["status" => 200, "user" => "not found"]));
    }
?>
