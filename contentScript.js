alert('content script injected!')


function sendMessage(){
    chrome.runtime.sendMessage({tabUrl: "https://www.metropolinet.co.il/"}, function(response) {
        console.log(response.farewell);
    });
}

let button = document.createElement("button");
button.innerHTML = "Change Tab";
button.style.display = "block";
button.style.position = "sticky";
button.style.zIndex = "10000";
button.style.backgroundColor = "yellow";
button.style.color = "black";
button.addEventListener("click", sendMessage);

document.body.prepend(button);
