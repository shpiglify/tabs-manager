document.title = "APEX DEMO";

function closeAll(){
    chrome.runtime.sendMessage({type:'close-all',tabRemoveUrl:window.location.href}, function(response) {
        console.log(response);
    })
}


function changeTab(){
    chrome.runtime.sendMessage({type:'change-tab',tabUrl: "https://www.metropolinet.co.il/"}, function(response) {
        console.log(response.farewell);
    })
}

function changeAndCloseTab(){
    chrome.runtime.sendMessage({type:'change-and-close',tabUrl: "https://www.metropolinet.co.il/",tabRemoveUrl:window.location.href}, function(response) {
        console.log(response.farewell);
    })
}

let button = document.createElement("button");
button.innerHTML = "Change Tab";
button.style.display = "block";
button.style.position = "sticky";
button.style.zIndex = "10000";
button.style.backgroundColor = "yellow";
button.style.color = "black";
button.addEventListener("click", changeTab);

let button2 = document.createElement("button");
button2.innerHTML = "Change And Close Tab";
button2.style.display = "block";
button2.style.position = "sticky";
button2.style.zIndex = "10000";
button2.style.backgroundColor = "pink";
button2.style.color = "black";
button2.addEventListener("click", changeAndCloseTab);

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
