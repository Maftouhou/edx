function saveToCookie(key, value, onCompletion){
	var cookieValue = key+'; '+ value;
	document.cookie += cookieValue;
	onCompletion(cookieValue);
	console.log(value);
}

function saveinput(){
	var textVal	= document.getElementsByName('nom')[0].value;
	console.log(textVal);
	saveToCookie('position', textVal, showTextSuccess);
}

function showTextSuccess(result){
	window.alert('Vous avez sauvegardé ['+result+'] sur les cookie');
}



function saveradi(){
	var radiovalue;
	var radioOption = document.getElementsByName('dep');
	for (var index = 0; index < radioOption.length; index++){
		if(radioOption[index].checked){
			radiovalue = radioOption[index].value;
			break;
		}
	}

	saveToCookie('Departmenet', radiovalue, function(result){
		window.alert('You did it ['+result+']');
	});
}

document.getElementById('btnId').addEventListener('click', function(){
    window.alert( this.preview );
});

// ===============================================

function a(){
	var aa = 'function A';
	return  aa;
}

function b(){
	// a();
	var aa = 'Function B';
	// return  aa;
	return a();
}

function c(){
	return b();
}

// window.alert(c());

function correctMethodeName(){
	return "Output Message";
}
try{
	var result = wrongMethodeName(3);
	document.writeln(result);

}catch(error){
	// document.writeln(error.message);
	document.writeln('<h3>Error:&nbsp;</h3><p>' + error.message + "</p>");

}finally {
  console.log('we endup here');
}


// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//     if (xhttp.readyState == 4 && xhttp.status == 200) {
//        // Action to be performed when the document is read;
//        document.writeln('xhttp is running succesfuly');
//     }else{
//        document.writeln('There is an error Running xhttp');
    	
//     }
// };
// xhttp.open("GET", "filename", true);
// xhttp.send();

try{
	function getPositionResult(position) {
	    console.log(position.coords.latitude + ' ' +
	    			position.coords.longitude);
	}
	navigator.geolocation.getCurrentPosition(getPositionResult)
}catch(err){
	window.writeln(err.message);
}

function refreshPosition(position) {
    var list = document.getElementById('positionList');
    list.innerHtml += ('<li>' + position.coords.latitude + ' ' + position.coords.longitude + '</li>');
}
navigator.geolocation.getCurrentPosition(refreshPosition);
