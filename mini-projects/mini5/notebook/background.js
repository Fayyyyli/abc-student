chrome.contextMenus.removeAll(function () {
    chrome.contextMenus.create({
        "title": 'Add "%s" to notebook',
        "contexts": ["selection"],
        "id": "notebook",
    })
});

chrome.contextMenus.onClicked.addListener((clickData) => {
    const inputString = clickData.selectionText;
    console.log(inputString);
    chrome.storage.sync.get({ text:[] }, function(items) {
    items.text.push((inputString)+"<br>"+"<br>"); 
    chrome.storage.sync.set(items);
    })
})

chrome.runtime.onMessage.addListener( function(request,sender,sendResponse)
{
    if( request.msg === "clear" )
    {
        chrome.storage.sync.clear();
    }
})
