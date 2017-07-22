<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" name="viewport" content="width=device-width">
		<title>WhoAmI</title>
		<link rel="shortcut icon" href="../../images/1.png" type="image/png">

		<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">

		<link href="../../public/css/add_words.css" rel="stylesheet">

		<script src="../../public/js/add_words.js?ver=0.6" charset="utf-8"></script>
	</head>
	<body>
		<div class="wrap">
			<div class="container">
				<div class="form">
					<div class="error_msg">
						Данное слово уже существует.
					</div>
					<div class="success_msg">
						Слово успешно добавлено.
					</div>
					<input type="text" name="word" placeholder="word" required="">
					<div class="table_wrap">
						<table style="width:100%">
							<tr>
								<th>Характеристика</th>
								<th>Мужской</th>
								<th>Женский</th>
							</tr>
							<tr>
								<td>Пол</td>
								<td>
									<input id="male" type="radio" name="gender" value="male" checked>
									<label for="male"></label>
								</td>
								<td>
									<input id="female" type="radio" name="gender" value="female">
									<label for="female"></label>
								</td>
							</tr>
						</table>
						<table style="width:100%">
							<tr>
								<th></th>
								<th>Хорошее</th>
								<th>Плохое</th>
							</tr>
							<tr>
								<td>Слово</td>
								<td>
									<input id="good_word" type="radio" name="word" value="good" checked>
									<label for="good_word"></label>
								</td>
								<td>
									<input id="bad_word" type="radio" name="word" value="bad">
									<label for="bad_word"></label>
								</td>
							</tr>
						</table>
						<table style="width:100%">
							<tr>
								<th></th>
								<th>Русский</th>
								<th>Английский</th>
							</tr>
							<tr>
								<td>Язык</td>
								<td>
									<input id="lan_ru" type="radio" name="lan" value="ru" checked>
									<label for="lan_ru"></label>
								</td>
								<td>
									<input id="lan_en" type="radio" name="lan" value="en">
									<label for="lan_en"></label>
								</td>
							</tr>
						</table>
					</div>
					<div class="btn_send btn">
						send
					</div>
				</div>
			</div>
		</div>
	</body>
</html>
