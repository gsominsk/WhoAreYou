<?php
include('../config/database.php');

try {
	// $db = new PDO($DB_DSN, $DB_USER, $DB_PASS, $DB_OPT);
	session_start();
	$db = new PDO($DB_DSN, $DB_USER, $DB_PASSWORD);
    $_POST['image_url'] = 'images/1.png';
	$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
	var_dump($e->getMessage());
    echo 'Connection failed: ' . $e->getMessage();
}
?>
