window.onload = function () {
	ajaxGetSessionData('../../php/check.php', function(data) {
		if (data.user === "not found") {
			if (confirm("Вы не зарегестрированы!") == true || confirm("Вы не зарегестрированы!") == false) {
				window.location.href = "../../public/html/index.php";
			}
		}
	});

	function ajaxGetSessionData (url, callback) {
		let xhr = new XMLHttpRequest();
		xhr.open('POST', url, true);
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
		xhr.onload = function (e) {
			if (xhr.status != 200) {
				console.log(xhr.status + ': ' + xhr.statusText);
			} else {
				let str = JSON.parse(xhr.responseText);
				console.log(str);
				callback(str);
			}
		}
		xhr.send();
	}

	var sendWordBtn = document.getElementsByClassName('btn_send')[0];

	sendWordBtn.onclick = function () {
		let wordInput = document.querySelectorAll("[name=\"word\"")[0];
		let sex = (document.getElementById("male").checked == true ? "male" : "female");
		let wordValue = (document.getElementById("good_word").checked == true ? "good" : "bad");
		let lan = (document.getElementById("lan_ru").checked == true ? "ru" : "en");
		let sexChar = (document.getElementById("male").checked == true ? "M" : "W");
		let wordChar = (document.getElementById("good_word").checked == true ? "G" : "B");


		if (wordInput.checkValidity() != false) {
			ajaxSendWord('../../php/send_word.php', function (data) {
				if (data.word == "success") {

					document.getElementsByClassName('success_msg')[0].style.display = "block";
					window.open("http://wau.hol.es/" + "#F" + sexChar + wordChar + "W?wd=" + wordInput.value);
					setTimeout(function () {
						document.getElementsByClassName('success_msg')[0].style.display = "none";
					}, 2000);
					console.log("word added");
				} else {
					document.getElementsByClassName('error_msg')[0].style.display = "block";
					setTimeout(function () {
						document.getElementsByClassName('error_msg')[0].style.display = "none";
					}, 2000);
					console.log("word exists already");
				}
			});
		}

		function ajaxSendWord(url, callback) {
			let xhr = new XMLHttpRequest();
			let body = 'sex=' + encodeURIComponent(sex) +
						'&wordValue=' + encodeURIComponent(wordValue) +
						'&lan=' + encodeURIComponent(lan) +
						'&word=' + encodeURIComponent(wordInput.value);
			console.log(wordInput.value);
			xhr.open('POST', url, true);
			xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			xhr.onload = function (e) {
				if (xhr.status != 200) {
					console.log(xhr.status + ': ' + xhr.statusText);
				} else {
					console.log(xhr.responseText);
					let str = JSON.parse(xhr.responseText);
					callback(str);
				}
			}
			xhr.send(body);
		}

	}

}
