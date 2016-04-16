// saveinput();

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

	var aa = 'Function B';
	// return  aa;
	return a();
}

function c(){
	return b();
}

window.alert(c());