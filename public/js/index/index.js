document.hrefVk  = create_href('http://wau.hol.es/images/1.png', "vk");
document.hrefFacebook = create_href('http://wau.hol.es/images/1.png', "facebook");
document.hrefTwitter  = create_href('http://wau.hol.es/images/1.png', "twitter");

function create_href(imgUrl, social) {
    var href;

    if (social === "vk") {
        href =  'http://vkontakte.ru/share.php?url=http://wau.hol.es/' +
            '&title=Who are you?' +
            '&description=Guess who are you.' +
            '&image=' + imgUrl +
            '&noparse=true';
    } else if (social === "facebook") {
        href =  'http://www.facebook.com/sharer.php?s=100&p[url]=http://wau.hol.es/' +
            '&p[title]=Who are you?' +
            '&p[summary]=Guess who are you.' +
            '&p[images][0]=' + imgUrl;
    } else if (social === "twitter") {
        href =  "http://twitter.com/share?text='Who are you?'" +
            "&via=twitterfeed" +
            "&related=truemisha" +
            "&hashtags=wp,wordpress" +
            "&url=http://wau.hol.es/";
    }

    return (href);
}

function updateHref(data) {
	console.log("[updated img] : " + data.photoUrl);
    document.hrefVk  = create_href('http://wau.hol.es/images/words/' + data.photoUrl, "vk");
    document.hrefFacebook = create_href('http://wau.hol.es/images/words/' + data.photoUrl, "facebook");
    document.hrefTwitter = create_href('http://wau.hol.es/images/words/' + data.photoUrl, "twitter");
    console.log(data.photoUrl);
}

function shareVk() {
    window.open(document.hrefVk, this.title, 'toolbar=0, status=0, width=548, height=325');
}

function shareFacebook() {
    window.open(document.hrefFacebook, this.title, 'toolbar=0, status=0, width=548, height=325');
}

function shareTwitter() {
    window.open(document.hrefTwitter, this.title, 'toolbar=0, status=0, width=548, height=325');
}

function main_start_1337() {
	var chooseLanBtn = document.getElementsByClassName('choose_lan')[0];
	var chooseRu = document.getElementsByClassName('lan_ru')[0];
	var chooseEn = document.getElementsByClassName('lan_en')[0];

	var whoAmIBtn = document.getElementsByClassName('wai_btn')[0];
	var lanBtn = document.getElementsByClassName('center_lan')[0];

	var optionsBtn = document.getElementsByClassName('block_to_click')[0];
	var optionsBlock = document.getElementsByClassName('options')[0];

	var lanFlag = 0;

	function render_elem(elemCreate, elemClassName, elemData, elemParent, funcOnClick)
    {
        newElem = document.createElement(elemCreate);
        newElem.className = elemClassName;
        newElem.innerHTML = elemData;
        newElem.onclick = function () {
            elem_this = this;
            funcOnClick ? funcOnClick(elemData) : 0;
        };
        elemParent.insertBefore(newElem, elemParent.firstChild);
    }

	function randomInteger(min, max) {
    	var rand = min - 0.5 + Math.random() * (max - min + 1)
    	rand = Math.round(rand);
    	return rand;
	}

/*
** ==================================
**			Проверка якоря
** ==================================
*/

	let anchor = location.hash;
	let maleCheckbox = document.getElementById('check1');
	let femaleCheckbox = document.getElementById('check2');
	let goodWordsCheckbox = document.getElementById('check3');
	let badWordsCheckbox = document.getElementById('check4');

	console.log(anchor);
	console.log(window.location); 

	if (anchor) {
		anchor.indexOf("?") != -1 ? renderGetWord(anchor) : changeCheckboxValue(anchor); 
	} else {
		setLocation("#FMGW");
	}

	function changeCheckboxValue (anchor) {
		anchor[2] === "M" ? maleCheckbox.checked = true : femaleCheckbox.checked = true;
		anchor[3] === "G" ? goodWordsCheckbox.checked = true : badWordsCheckbox.checked = true;
	}

	function renderGetWord (arr) {
		arr = arr.split("?");
		let word = arr[1].split("=")[1];
		arr[0] ? changeCheckboxValue(arr[0]) : 0;
		if (arr[1] && word) {
			console.log(word);
			genereateWord(word);
			showBtn();
		}
		console.log(arr);
	}

/*
** ========================================
**		    изменение якоря
** ========================================
*/


    badWordsCheckbox.onchange = checkRadio;
    goodWordsCheckbox.onchange = checkRadio;
    maleCheckbox.onchange = checkRadio;
    femaleCheckbox.onchange = checkRadio;
	var sex = (maleCheckbox.checked == true ? "M" : "W");
	var word = (goodWordsCheckbox.checked == true ? "G" : "B");

	changeHashTag(sex, word);

	function checkRadio () {
		let sexChar = (maleCheckbox.checked == true ? "M" : "W");
		let wordChar = (goodWordsCheckbox.checked == true ? "G" : "B");

		sex = sexChar;
		word = wordChar;
		changeHashTag(sexChar, wordChar);
		setLocation("#F" + sexChar + wordChar + "W");
	}

	function changeHashTag (sexChar, wordChar) {
		let hashTag = (sexChar === "M" ? (wordChar === "G" ? 2 : 3) : (wordChar === "G" ? 0 : 1));
		for (var i = 0; i < 4; i++) {
			if (i === hashTag) {
				document.getElementsByClassName('word_value')[hashTag].style.display = "block";
			} else {
				document.getElementsByClassName('word_value')[i].style.display = "none";
			}
		}
	}

	function setLocation(curLoc){
	    try {
	      history.pushState(null, null, curLoc);
	      return;
	    } catch(e) {}
	    location.hash = '#' + curLoc;
	}

/*
** ==================================
**			Изменение языка
** ==================================
*/
	var stylesLan = getComputedStyle(chooseLanBtn);
	var stylesOptions = getComputedStyle(optionsBlock);

	document.getElementsByClassName('center')[0].onclick = function () {
		if (stylesLan.opacity == 1)
			openClose (stylesLan, chooseLanBtn);
		if (stylesOptions.opacity == 1)
			openClose (stylesOptions, optionsBlock);
	}

	function openClose (styles, blockToChange) {
		if (styles.opacity == 1) {
			blockToChange.style.opacity = 0;
		} else {
			blockToChange.style.opacity = 1;
		}
	}

	lanBtn.onclick = function () {
		openClose (stylesLan, chooseLanBtn);
	}

	ajaxChangeLan('php/change_lan.php', "ru");

	chooseEn.onclick = changeEn;
	chooseRu.onclick = changeRu;

	function changeRu () {
		let ru = document.getElementsByClassName('ru');
		let en = document.getElementsByClassName('en');
		let stylesRu = getComputedStyle(ru[0]);

		if (stylesRu.display != "block") {
			for (var i = 0; i < ru.length; i++) {
				ru[i].style.display = "inline-block";
				en[i].style.display = "none";
			}
			ajaxChangeLan('php/change_lan.php', "ru");
		}
	}

	function changeEn () {
		let ru = document.getElementsByClassName('ru');
		let en = document.getElementsByClassName('en');
		let stylesEn = getComputedStyle(en[0]);

		if (stylesEn.display != "block") {
			for (var i = 0; i < en.length; i++) {
				en[i].style.display = "inline-block";
				ru[i].style.display = "none";
			}
			ajaxChangeLan('php/change_lan.php', "en");
		}
	}

	function ajaxChangeLan (url, lan, callback) {
		let xhr = new XMLHttpRequest();
		let body =  'lan=' + encodeURIComponent(lan);
		xhr.open('POST', url, true);
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
		xhr.onload = function (e) {
			if (xhr.status != 200) {
				console.log(xhr.status + ': ' + xhr.statusText);
			}
		}
		xhr.send(body);
	}

/*
** ========================================
**		Открытие меню настройки слов
** ========================================
*/

	optionsBtn.onclick = function () {
		openClose (stylesOptions, optionsBlock);
	}

/*
** ========================================
**			Открытие/Закрытие лог формы
** ========================================
*/
	var logFormBlock = document.getElementsByClassName('log_form_wrap')[0];
	var closeLogForm = document.getElementsByClassName('close_btn')[0];
	var logBtn = document.getElementsByClassName('bottom_block_to_click')[0];
	var stylesLogForm = getComputedStyle(logFormBlock);


	logBtn.onclick = function () {
		logFormBlock.style.display = "flex";
		setTimeout (function () {
			openClose (stylesLogForm, logFormBlock);
		}, 300);
	}

	closeLogForm.onclick = function () {
		openClose (stylesLogForm, logFormBlock);
		setTimeout (function () {
			logFormBlock.style.display = "none";
		}, 300);
	}

/*
** ========================================
**		Проверка учетных данных лог формы
** ========================================
*/

	var logIn = document.getElementsByClassName('submit_btn')[0];

	logIn.onclick = function () {
		ajaxLogIn("php/log_in.php", function (data) {

		});

		function ajaxLogIn(url, callback) {
			let login = document.querySelectorAll("[name=\"login\"")[0];
			let pass = document.querySelectorAll("[name=\"password\"")[0];
		    let xhr = new XMLHttpRequest();
		    let body =  'login=' + encodeURIComponent(login.value) +
		                '&password=' + encodeURIComponent(pass.value);
		    xhr.open('POST', url, true);
		    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
			xhr.onload = function (e) {
				if (xhr.status != 200) {
					console.log(xhr.status + ': ' + xhr.statusText);
				} else {
					let str = JSON.parse(xhr.responseText);

					if (str.user === "found") {
						window.location.href = "public/html/add_words.php";
					} else {
						console.log("error");
					}
				}
			}
		    xhr.send(body);
		}
	}

/*
** ========================================
**			Создание списка слов
** ========================================
*/

	var notMeBtn = document.getElementsByClassName('not_me_btn')[0];

	whoAmIBtn.onclick = function () {
		genereateWord();
		showBtn();
	}

	notMeBtn.onclick = function () {
		genereateWord();	
	}

	function genereateWord (GETword) {
		let wordList = document.getElementsByClassName('word_list_wrap')[0];

		whoAmIBtn.style.display = "none";
		wordList.style.display = "flex";

		ajaxGetWordList("php/get_word_list.php", function (list) {
			let wordList = document.getElementsByClassName('word_list')[0];
			let elemWord = document.getElementsByClassName('word')[0];
			let word;

			GETword ? word = GETword.toUpperCase() : word = list[0].toUpperCase();
			if (elemWord)
				wordList.removeChild(elemWord);
			render_elem(
						'li',
						'word',
						"" + word,
						wordList
						);
			elemWord = document.getElementsByClassName('word')[0];
			elemWord.style.fontSize = changeWordSize(word);
			elemWord.style.display = "block";
			setTimeout(function () {
				elemWord.style.opacity = "1";
                create_photo(word);
			}, 300);
			
		});

		function changeWordSize (word, elemWord) {
			fsz = 6;

			for (let i = word.length - 10; i > 1; i -= 5) {
				fsz -= 0.5;
			}
			return (fsz < 1 ? "1.5vw" : fsz + "vw");
		}

		function ajaxGetWordList (url, callback) {
			let xhr = new XMLHttpRequest();
			let body =  'sex=' + encodeURIComponent(sex) +
						'&word=' + encodeURIComponent(word);
			xhr.open('POST', url, true);
			xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
			xhr.onload = function (e) {
				if (xhr.status != 200) {
					console.log(xhr.status + ': ' + xhr.statusText);
				} else {
					let str = JSON.parse(xhr.responseText);

                    console.log(str.list);
					if (str.list != "not found") {
						callback(str.list);
					} else {
						let error = ["word not found"];
						callback(error);
					}
				}
			}
			xhr.send(body);
		}
	}

	function showBtn () {
		setTimeout (function () {
			notMeBtn.style.display = "flex";
			setTimeout(function() {
				notMeBtn.style.opacity = "1";
			}, 100)
		}, 1000);
	} 


	function create_photo(imgName) {
		html2canvas(document.getElementsByClassName('wrap')[0], {
			onrendered: function (canvas) {
				var img = canvas.toDataURL("image/png");
			    ajaxAddPhoto("php/add_photo.php", img, imgName, updateHref);
			}
		});
	}

    function ajaxAddPhoto(url, photo, photoName, callback) {
        let xhr = new XMLHttpRequest();
        let body =  'photo=' + encodeURIComponent(photo) +
					'&photo_name=' + encodeURIComponent(photoName);
        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
		xhr.onload = function (e) {
			if (xhr.status != 200) {
				console.log(xhr.status + ': ' + xhr.statusText);
			} else {
				let str = JSON.parse(xhr.responseText);
                callback(str);
			}
		}
        xhr.send(body);
    }

}

document.addEventListener("DOMContentLoaded", main_start_1337);
