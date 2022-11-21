const self = this;

function changeTab(tabUrl,tabRemoveUrl = ''){

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
                if(tabs[i].url === tabRemoveUrl){
                    chrome.tabs.remove(tabs[i].id, function() { });
                }

            }
        }
    )
}

const onMessageListener = async function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    console.log(request)

    // if(request.type === 'display-tabs'){
    //     console.log('we are hereee')
    //     await chrome.tabs.query(
    //         {},
    //         async function(tabs) {
    //             self.tabs = tabs;
    //             console.log(tabs);
    //             sendResponse({hello:"hello"});
    //         }
    //     )
    // }
    if(request.type === 'close-all'){
        chrome.tabs.query(
            {},
            async function(tabs) {
                self.tabs = tabs;
                const host = new URL(request.tabRemoveUrl).host
                for (let i = 0; i < tabs.length ; i++) {
                    const currentHost = new URL(tabs[i].url).host
                    if(currentHost === host){
                        chrome.tabs.remove(tabs[i].id, function() { });
                    }

                }
            }
        )
    }
    if (request.tabUrl){
      changeTab(request.tabUrl,request.tabRemoveUrl);
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

chrome.tabs.onRemoved.addListener((tabId,info)=> {
    console.log('tab was removed', tabId, info)
    fetch('http://localhost:3000/')
});
