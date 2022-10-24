let display = document.getElementById("disabled");
let bt = document.getElementById("bt");


bt.addEventListener("click", ()=>{
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    let message = true;
    chrome.tabs.sendMessage(tabs[0].id, message);
    bt.style.display = "none";
  });
})
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // console.log(request.data);
  display.innerHTML ="There are "+request.data2+" links on this page, "+request.data1+" of them have been hidden.";
});
