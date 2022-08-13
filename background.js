const self = this;

function changeTab(tabUrl){

    chrome.tabs.query(
        {},
        async function(tabs) {
            self.tabs = tabs;
            console.log(tabs);
            for (let i = 0; i < tabs.length ; i++) {
                if(tabs[i].url === tabUrl){
                    await chrome.tabs.update(tabs[i].id, { active: true });
                    await chrome.windows.update(tabs[i].windowId, { focused: true });
                }

            }
        }
    )
}


const onMessageListener =  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.tabUrl){
      changeTab(request.tabUrl);
      sendResponse({farewell: "goodbye"});
  };
}

// define listeners for messages from contentScript & webpages scripts
chrome.runtime.onMessage.addListener(
onMessageListener
);

chrome.runtime.onMessageExternal.addListener(
onMessageListener
);