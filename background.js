const self = this;

chrome.tabs.query(
    {},
    async function(tabs) {
        self.tabs = tabs;
        console.log(tabs);
        for (let i = 0; i < tabs.length ; i++) {
            if(tabs[i].url === "https://www.metropolinet.co.il/"){
                console.log('metro is found!')
                await chrome.tabs.update(tabs[i].id, { active: true });
                await chrome.windows.update(tabs[i].windowId, { focused: true });
            }

        }
    }
  )
  console.log('hi')


