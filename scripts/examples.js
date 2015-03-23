var index = 0;
var maxIndex = 1;

var htmls = [];
var scripts = [];

htmls[0] = "\
<style>\n\
	#theForm {\n\
		margin: 100px auto;\n\
		width: 200px;\n\
		padding: 30px;\n\
		background-color: #E6E6E6;\n\
		border: double #A9A9A9;\n\
		border-radius: 100%;\n\
		box-shadow: 11px 8px 29px rgba(0,0,0,.9);\n\
	}\n\
	.formCaption {\n\
		text-align: center;\n\
		padding: 8px;\n\
	}\n\
	.formT {\n\
		width: 100%;\n\
		margin: 0;\n\
		padding: 0;\n\
	}\n\
	.formInput {\n\
		width: 190px;\n\
		margin-bottom: 15px;\n\
	}\n\
	.formButton {\n\
		text-align: center;\n\
	}\n\
</style>\n\
\n\
<form id = \"theForm\">\n\
<table class = \"formT\" cellspacing = 0>\n\
    <tr><td class = \"formCaption\">Вхід</td></tr>\n\
	<tr><td class = \"formText\">Логін</td></tr>\n\
	<tr><td>\n\
		<input class = \"formInput\" id = \"formLogin\" type = \"text\">\n\
	</td></tr>\n\
	<tr><td class = \"formText\">Пароль</td></tr>\n\
	<tr><td>\n\
		<input class = \"formInput\" id = \"formPass\" type = \"password\">\n\
	</td></tr>\n\
	<tr><td class = \"formButton\">\n\
		<button onClick = \"buttonClick()\">Увійти</button>\n\
	</td></tr>\n\
</table>\n\
</form>\n\
";

scripts[0] = "\
function buttonClick() {\n\
	var login = document.getElementById('formLogin').value;\n\
	var pass = document.getElementById('formPass').value;\n\
	if (login && pass) alert('Login: ' + login + '\\nPass: ' + pass);\n\
	else if (!login) alert('You forgot to enter your login');\n\
	else if (!pass) alert('You forgot to enter your pass');\n\
}\n\
";

htmls[1] = "\
<style>\n\
\n\
body {\n\
  font: 1em 'PT Sans',Tahoma,Arial;\n\
}\n\
\n\
#wrapper {\n\
  -moz-perspective: 900px;\n\
  margin: 80px;\n\
}\n\
\n\
#cube {\n\
  position: relative;\n\
  width: 300px;\n\
  height: 300px;\n\
  -moz-transform-origin: 50% 50% -150px;\n\
  -moz-transform-style: preserve-3d;\n\
}\n\
\n\
.side {\n\
  width: 300px;\n\
  height: 300px;\n\
  background: rgba(0,0,0,.3);\n\
  background: -moz-radial-gradient(rgba(0,0,0,.1),rgba(0,0,0,.5));\n\
  position: absolute;\n\
  border: 10px solid #fff;\n\
  border-radius: 10px;\n\
  font-size: 5em;\n\
  color: #fff;\n\
  line-height: 300px;\n\
  text-align: center;\n\
  text-shadow: 0 1px 3px rgba(0,0,0,.4);\n\
  box-shadow: 0 0 6px rgba(0,0,0,.5);\n\
  -moz-transform-origin: 50% 50% -150px;\n\
}\n\
\n\
#side2 {\n\
  -moz-transform: rotateY(90deg);\n\
}\n\
\n\
#side3 {\n\
  -moz-transform: rotateY(-90deg);\n\
}\n\
#side4 {\n\
  -moz-transform: rotateX(90deg);\n\
}\n\
#side5 {\n\
  -moz-transform: rotateX(-90deg);\n\
}\n\
#side6 {\n\
  -moz-transform: rotateY(180deg);\n\
}\n\
\n\
</style>\n\
<div id=\"wrapper\">\n\
	<div id=\"cube\">\n\
		<div class=\"side\" id=\"side1\">1</div>\n\
		<div class=\"side\" id=\"side2\">2</div>\n\
		<div class=\"side\" id=\"side3\">3</div>\n\
		<div class=\"side\" id=\"side4\">4</div>\n\
		<div class=\"side\" id=\"side5\">5</div>\n\
		<div class=\"side\" id=\"side6\">6</div>\n\
	</div>\n\
</div>\
";

scripts[1] = "\
$(function(){\n\
	$(document).mousemove(function(e){\n\
		$('#cube').css({\n\
			'-moz-transform':'rotateX('+e.pageY+'deg) rotateY('+e.pageX+'deg)'\n\
		});\n\
	});\n\
});\
";

function changeResult() {
	var el = document.getElementById('scr');
	var scriptText = el.value;
	var oldScript = document.getElementById('scriptContainer');
	var newScript;

	if (oldScript) {
	  oldScript.parentNode.removeChild(oldScript);
	}

	newScript = document.createElement('script');
	newScript.id = 'scriptContainer';
	newScript.text = el.value;
	document.body.appendChild(newScript);
	var html = document.getElementById('html');
	document.getElementById('result').innerHTML = html.value;
}

function changeDefaultResult() {
	document.getElementById('scr').value = scripts[index];
	document.getElementById('html').value = htmls[index];
	changeResult();
}

function arrowInvisible() {
	if (index == 0) document.getElementById('leftArrow').style.visibility = "hidden";
	else document.getElementById('leftArrow').style.visibility = "visible";
	if (index == maxIndex) document.getElementById('rightArrow').style.visibility = "hidden";
	else document.getElementById('rightArrow').style.visibility = "visible";
}

function gotoPrev() {
	if (index > 0) {
		--index;
		changeDefaultResult();
		arrowInvisible();
	}
}

function gotoNext() {
	if (index < maxIndex) {
		++index;
		changeDefaultResult();
		arrowInvisible();
	}
}

// text = text.replace(/"/g, "'");
// text = text.replace(/<script>/gi, "<img src = \"../images/000000-0..png\" onload=\"");
// text = text.replace(/<\/script>/gi, "this.parentNode.removeChild(this);\" />");