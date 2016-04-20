var worker;

function startWorker() {
    worker = new Worker("webWorker.js");
    worker.onmessage = function(event) {
        document.getElementById("output").innerHTML += 
        '<li>' + event.data + '</li>';
    };
}

function stopWorker() {
    worker.terminate();
}

console.log('script2');


var mySocket = new WebSocket('ws://echo.websocket.org');

mySocket.onerror = function(data){
	console.log(data);
}

mySocket.onopen = function(evt){
	console.log(evt.data);
}

mySocket.onmessage = function(evt){
	console.log(evt)
}

function sendWsMssg(){
	mySocket.send('Hello');
}

