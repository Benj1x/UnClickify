var delayInMilliseconds = 5000; //1 second

setTimeout(function () {
    scrapeSite();
}, delayInMilliseconds)

function scrapeSite() {

    console.log("Running"); 
    try {
        var elements = document.getElementsByClassName("section-area");
        var tags = document.getElementsByTagName("a");
        console.dir(elements);
        console.dir(tags);
        if (elements) {
            //console.;
            console.log({ elements });
            console.log("Tags: " + { tags });

            for (let i = 0; i < tags.length; i++)
            {
                displayValue(tags[i]);
            }

        }
    }
    catch (err) {
        console.log(`No Book Title Found`);
        console.log(err);
    }
}

function displayValue(tag) {

    //let parent = tag.parentElement;
    if (tag.hasChildNodes)
    {
        console.log(`Has children`);
        let parent = CheckParent(tag);
        var children = tag.childNodes;
        console.log(`Set children`);
        children.forEach(function (item) {
            console.log(`looping`);
            if (item.hasChildNodes) {
                var grandchildren = item.childNodes;
                console.log(`Set child children`);
                grandchildren.forEach(function (Childitem) {
                    console.log(`looping again`);
                    if (Childitem.tagName == "p") {
                        Childitem.innerHTML = "";
                        console.log(`Set text`);
                    }
                });

                let last = item.lastChild;
                if (last) {
                    last.childNodes.forEach(function (lastSearch) {
                        if (lastSearch.tagName == "p") {
                            lastSearch.innerHTML = "test";
                        }
                    });
                }
            }
            

        });
        
    }
}

function CheckParent(tag) {
    while ((tag = tag.parentElement) && !tag.classList.contains("dre-item"));   
    return tag;
}

function doStuffWithDom(domContent) {
    console.log('I received the following DOM content:\n' + domContent);
}

async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}

// When the browser-action button is clicked...
//chrome.browserAction.onClicked.addListener(function (tab) {
//    // ...check the URL of the active tab against our pattern and...
//    if (urlRegex.test(tab.url)) {
//        // ...if it matches, send a message specifying a callback too
//        chrome.tabs.sendMessage(tab.id, { text: 'report_back' }, doStuffWithDom);
//    }
//});