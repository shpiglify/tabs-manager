document.title = "APEX DEMO";

alert('content script injected!')

// function displayAllOpenTabs(){
//     chrome.runtime.sendMessage({type:'display-tabs'}, function(response) {
//         console.log(response);
//     })
// }

function closeAll(){
    chrome.runtime.sendMessage({type:'close-all',tabRemoveUrl:window.location.href}, function(response) {
        console.log(response);
    })
}


function sendMessage(){
    chrome.runtime.sendMessage({tabUrl: "https://www.metropolinet.co.il/",tabRemoveUrl:""}, function(response) {
        console.log(response.farewell);
    })
}

function sendMessageClose(){
    chrome.runtime.sendMessage({tabUrl: "https://www.metropolinet.co.il/",tabRemoveUrl:window.location.href}, function(response) {
        console.log(response.farewell);
    })
}

function closeTab(){
    window.close();
}

let button = document.createElement("button");
button.innerHTML = "Change Tab";
button.style.display = "block";
button.style.position = "sticky";
button.style.zIndex = "10000";
button.style.backgroundColor = "yellow";
button.style.color = "black";
button.addEventListener("click", sendMessage);

let button2 = document.createElement("button");
button2.innerHTML = "Change And Close Tab";
button2.style.display = "block";
button2.style.position = "sticky";
button2.style.zIndex = "10000";
button2.style.backgroundColor = "pink";
button2.style.color = "black";
button2.addEventListener("click", sendMessageClose);

let button3 = document.createElement("button");
button3.innerHTML = "Close all";
button3.style.display = "block";
button3.style.position = "sticky";
button3.style.zIndex = "10000";
button3.style.backgroundColor = "green";
button3.style.color = "black";
button3.addEventListener("click", closeAll);



document.body.prepend(button3);
document.body.prepend(button2);
document.body.prepend(button);

//
// var elt = document.createElement("script");
// elt.innerHTML = "window.onbeforeunload = function() {return \"Are you sure you wish to leave the page?\";}"
// document.head.appendChild(elt);

var actualCode = `
window.onbeforeunload = function() {return "Are you sure you wish to leave the page?";}
`;

var script = document.createElement('script');
script.textContent = actualCode;
(document.head||document.documentElement).appendChild(script);
// script.remove();
