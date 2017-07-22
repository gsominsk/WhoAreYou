<?php
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
    include('connect.php');

    $sex = ($_POST['sex'] === "M" ? "male" : "female");
    $word = ($_POST['word'] === "G" ? "good" : "bad");
    $lan = ($_SESSION['lan'] === "en" ? "en" : "ru");

    $i = 0;

    $stmt = $db->prepare('SELECT `word` FROM `'.$lan.'words` WHERE `value` = :value AND `sex` = :sex ORDER BY RAND() LIMIT 1');
	$stmt->execute(['value' => $word, 'sex' => $sex]);
    $res[$i++] = base64_decode($stmt->fetch(PDO::FETCH_NUM)[0]);
    while (1) {
        $row = base64_decode($stmt->fetch(PDO::FETCH_NUM)[0]);
        if (empty($row)) {
            break ;
        }
        $res[$i] = $row;
        $i++;
    }
    if (!empty($res[0]))
        echo (json_encode(["status" => 200, "list" => $res]));
    else
        echo (json_encode(["status" => 200, "list" => "not found"]));
?>
