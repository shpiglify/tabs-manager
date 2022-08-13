a simple extension to change tabs programmatically

## Demo 
open https://www.ynet.co.il/, and https://www.metropolinet.co.il/ in different tabs

install the extension

on ynet.co.il, open the console and paste the following script:
```
 chrome.runtime.sendMessage('fegainhmidjapaakdkcjdncnegchhfoc',{tabUrl: "https://www.metropolinet.co.il/"}, function(response) {
        console.log(response.farewell);
    });
```
you will see the tab changing to focus on metropolinet tab.
you can also press the yellow button to get the same effect.
you can actually change the tabUrl, to any url you want, but the url must be an exact match. we can change this to be more dynamic though.