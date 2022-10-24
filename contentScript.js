alert('content script injected!')


function sendMessage(){
    // chrome.runtime.sendMessage({tabUrl: "https://www.metropolinet.co.il/",shouldClose:false}, function(response) {
    //     console.log(response.farewell);
    // });
    chrome.runtime.sendMessage({tabUrl: "https://www.metropolinet.co.il/",tabRemoveUrl:""}, function(response) {
        console.log(response.farewell);
    })
}

function sendMessageClose(){
    // chrome.runtime.sendMessage({tabUrl: "https://www.metropolinet.co.il/",shouldClose:false}, function(response) {
    //     console.log(response.farewell);
    // });
    chrome.runtime.sendMessage({tabUrl: "https://www.metropolinet.co.il/",tabRemoveUrl:"https://www.ynet.co.il/home/0,7340,L-8,00.html"}, function(response) {
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


document.body.prepend(button2);
document.body.prepend(button);
