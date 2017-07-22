<?php
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
	include('connect.php');

	$data = $_POST['photo'];
	$photoName = base64_encode(str_replace("/", "a" , $_POST['photo_name']));
//    $photoName = iconv ('utf-8', 'windows-1251', $photoName);
//	var_dump(mb_detect_encoding($photoName));
	// $_POST['image_url'] = 'http://fml.danyas.pp.ua/gosha/images/1.png';

// $user = md5(base64_decode($_SESSION['user_email']));
	// var_dump($photoName);

	list($type, $data) = explode(';', $data);
	list(, $data)      = explode(',', $data);
	$data = base64_decode($data);

	$userFiles = scandir('../images/words');

	// var_dump($userFiles);
	$flag = 0;
	// var_dump($photoName);
	for ($i=0; $i < count($userFiles); $i++) {
		// var_dump($userFiles[$i]);
		if ($userFiles[$i] === $photoName.".png") {
			$flag = 1;
		}
	}

	// $counter = strval(count($userFiles));
	if ($flag == 0) {
		if (file_put_contents('../images/words/'.$photoName.'.png', $data) != FALSE)
		    echo (json_encode(["status" => 200, "photo" => "added", "photoUrl" => $photoName.'.png']));
        } else {
            echo (json_encode(["status" => 200, "photo" => "error", "photoUrl" => $photoName.'.png']));
        }
?>
