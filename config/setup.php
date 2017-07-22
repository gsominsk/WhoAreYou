<?php
    include ('database.php');

    try {
    	$db = new PDO($DB_DSN_GLOBAL, $DB_USER, $DB_PASSWORD);
    	$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    	$db->query("CREATE DATABASE IF NOT EXISTS words");
    } catch (PDOException $e) {
    	echo "ERROR CREATING DB: " . $e->getMessage() . "\n";
    }

	$db = new PDO($DB_DSN, $DB_USER, $DB_PASSWORD);
	$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $db->query("CREATE TABLE enWords (
		id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        sex VARCHAR(128) NOT NULL,
		value VARCHAR(128) NOT NULL,
		word VARCHAR(128) NOT NULL
	)");
    $db->query("CREATE TABLE ruWords (
		id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        sex VARCHAR(128) NOT NULL,
		value VARCHAR(128) NOT NULL,
		word VARCHAR(128) NOT NULL
	)");
?>
