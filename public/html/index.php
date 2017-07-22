<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" name="viewport" content="width=device-width">
		<title>
			WhoAmI
		</title>
		<link rel="shortcut icon" href="../../images/1.png" type="image/png">
		<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
		<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet">
		<link href="public/css/index.css" rel="stylesheet">
		<link href="public/css/media_index.css" rel="stylesheet">
		<link href="public/css/stylesheet.css" rel="stylesheet">
		<script src="public/js/index/index.js?ver=0.9.9.9.5" charset="utf-8"></script>
		<script src="public/js/html2canvas-0.5.0-alpha1/dist/html2canvas.js" charset="utf-8"></script>
		<script src="public/js/html2canvas-0.5.0-alpha1/dist/html2canvas.svg.js" charset="utf-8"></script>
		<?php
//            include ('php/connect.php');
			$title = 'Привет, мир';
			$description = 'Короткое описание данной статьи, например можно использовать функцию WordPress the_excerpt()';
			$summary = 'Короткое описание данной статьи, например можно использовать функцию WordPress the_excerpt()'; // анонс поста
			$hashtags = 'wp,wordpress';			$image_url = "some";			$url = 'http://fml.danyas.pp.ua/gosha/'; // ссылка на пост
			?>
		</head>
	<body>
		<div class="wrap">
			<div class="container">
				<div class="top">
					<div class="top_right_block">
						<div class="block_to_click"></div>
						<div class="options">
							<div class="checkbox">
									<span class="ru">для парней</span>
									<span class="en">for men</span>
									<input id="check1" type="radio" name="check_sex" value="check1" checked>
									<label for="check1"></label>
									<div class="block"></div>
							</div>
							<div class="checkbox">
								<span class="ru">для девушек</span>
								<span class="en">for woman</span>
								<input id="check2" type="radio" name="check_sex" value="check2">
								<label for="check2"></label>
								<div class="block"></div>
							</div>
							<div class="checkbox">
								<span class="ru">хорошие</span>
								<span class="en">good words</span>
								<input id="check3" type="radio" name="check_word" value="check1" checked>
								<label for="check3"></label>
								<div class="block"></div>
							</div>
							<div class="checkbox">
								<span class="ru">плохие</span>
								<span class="en">bad words</span>
								<input id="check4" type="radio" name="check_word" value="check2">
								<label for="check4"></label>
								<div class="block"></div>
							</div>
						</div>
					</div>
					<div class="top_left_block"></div>
				</div>
				<div class="center">
					<div class="center_logo">
						<img src="images/logo.png" alt="">
					</div>
					<div class="center_main_wrap">
						<!-- <div class="photo_block"> -->
						<div class="center_main">
							<div class="word_value">#хорошие_слова_женского_рода</div>
							<div class="word_value">#плохие_слова_женского_рода</div>
							<div class="word_value">#хорошие_слова_мужского_рода</div>
							<div class="word_value">#плохие_слова_мужского_рода</div>
							<div class="wai_btn">
								<span class="ru" >узнать кто я</span>
								<span class="en" >who am i?</span>
							</div>
							<div class="word_list_wrap">
								<ul class="word_list">
									<div class="not_me_btn">
										<span class="ru" >это не я</span>
										<span class="en" >its not me</span>
									</div>
								</ul>
							</div>
							<div class="links">
								<div class="links_top">
									<a href="https://vk.com/id322943143" target="_blank">#whoareyou</a>
								</div>
								<div class="links_bottom">
									<div class="share ru"> поделиться</div>
									<div class="share en"> share</div>
									<a 	class="vk_share"
										onclick="shareVk()"
										title="Сохранить в Вконтакте"
										target="_parent">
									<i class="fa fa-vk" aria-hidden="true"></i>
									</a>
									<a class="facebook_share"
										onclick="shareFacebook()"
										title="Поделиться ссылкой на Фейсбук" target="_parent">
										<i class="fa fa-facebook" aria-hidden="true"></i>
									</a>
									<a 	class="twitter_share"
										title="Поделиться ссылкой в Твиттере"
										onclick="shareTwitter()"
										target="_parent">
										<i class="fa fa-twitter" aria-hidden="true"></i>
									</a>
								</div>
							</div>
						</div>						<!-- </div> -->
					</div>
					<div class="center_lan">
						<div class="choose_lan_wrap">
							<div class="choose_lan">
								<div class="lan_en">EN</div>
								<div class="lan_ru">RU</div>
							</div>
						</div>
						<div>
							<span class="en">EN</span>
							<span class="ru">RU</span>
						</div>
					</div>
				</div>
				<div class="bottom">
					<div class="bottom_right_block"></div>
					<div class="bottom_left_block">
						<div class="bottom_block_to_click"></div>
						<div class="log_form_wrap">
							<div class="log_form">
								<input type="text" name="login" placeholder="login" required>
								<input type="password" name="password" placeholder="password" required>
								<div class="submit_btn btn">login</div>
								<div class="close_btn btn clearfix">close</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</body>
</html>
