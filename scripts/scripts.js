var index = 0;
var address = "";

function openImg(argAddress) {
	address = argAddress;
	var iv = document.getElementById('imageViewer');
	iv.style.visibility = 'visible';
	scroll(0, 0);
	iv.style.left = window.screenX;
	iv.style.top = window.screenY;
	iv.style.width = window.innerWidth + 'px';
	iv.style.height = window.innerHeight + 'px';
	document.body.style.overflowY = 'hidden';
	document.getElementById('imageViewerImagePlace').innerHTML = "<img src = \"" + address + "\" id = \"theImage\" />";
	index = parseInt(address.substr(16, address.length - 20));
	arrowInvisible();
}

function closeImg() {
	var iv = document.getElementById('imageViewer');
	iv.style.visibility = 'hidden';
	document.getElementById('leftArrow').style.visibility = "hidden";
	document.getElementById('rightArrow').style.visibility = "hidden";
	iv.style.width = '1px';
	iv.style.height = '1px';
	document.body.style.overflowY = 'initial';
	document.getElementById('imageViewerImagePlace').innerHTML = "";
}

function arrowInvisible() {
	if (index == 1) document.getElementById('leftArrow').style.visibility = "hidden";
	else document.getElementById('leftArrow').style.visibility = "visible";
	if (index == numOfImages) document.getElementById('rightArrow').style.visibility = "hidden";
	else document.getElementById('rightArrow').style.visibility = "visible";
}

function gotoNext() {
	++index;
	address = address.slice(0, 16) + index + address.slice(address.length - 4, address.length);
	document.getElementById('imageViewerImagePlace').innerHTML = "<img src = \"" + address + "\" id = \"theImage\" />";
	arrowInvisible();
}

function gotoPrev() {
	--index;
	address = address.slice(0, 16) + index + address.slice(address.length - 4, address.length);
	document.getElementById('imageViewerImagePlace').innerHTML = "<img src = \"" + address + "\" id = \"theImage\" />";
	arrowInvisible();
}

function zoomIn() {
	document.getElementById('theImage').width += 50;
}

function zoomOut() {
	document.getElementById('theImage').width -= 50;
}