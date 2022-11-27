a simple extension to change tabs programmatically

## Demo 
open https://www.ynet.co.il/, and https://www.metropolinet.co.il/ in different tabs

install the extension

on ynet.co.il, open the console and paste the following script:
```
 chrome.runtime.sendMessage('mgffaoknmkahbikpkfhhjeedjmaainnh',{type:"change-tab", tabUrl: "https://www.metropolinet.co.il/"}, function(response) {
        console.log(response.farewell);
    });
```
you will see the tab changing to focus on metropolinet tab.
you can also press the yellow button to get the same effect.
you can actually change the tabUrl, to any url you want, but the url must be an exact match. we can change this to be more dynamic though.

deploy:
once you have done your changes, follow the guide on the first answer in the following link
https://stackoverflow.com/questions/21497781/how-to-change-chrome-packaged-app-id-or-why-do-we-need-key-field-in-the-manifest/21500707#21500707
to generate a new "key" field for an unchanging extension ID
