// var array = [ 7, 8, 9, 0, 1, 2, 3 ];

// function processArray() {
//     for (var i = 0; i < array.length; i++) {
//         var result = handleData(arrayOfData[i]);
//         postMessage(result);
//     }  
// }

// function handleData(data) {
//     var response = sendToRemoveServer(data);
//     return response;
// }


var i = 0;

function timedCount() {
    i = i + 1;
    postMessage(i);
    setTimeout("timedCount()",500);
}

timedCount();