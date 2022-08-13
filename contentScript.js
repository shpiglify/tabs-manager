alert('content script injected!')

let button = document.createElement("button");
button.innerHTML = "Change Tab";
button.style.display = "block";
button.style.position = "sticky";
button.style.zIndex = "10000";
button.style.backgroundColor = "yellow";
button.style.color = "black";

document.body.prepend(button);
