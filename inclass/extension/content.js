console.log("yassss");

function repl(wordToFind, wordToReplace) {
    console.log("replacing", wordToFind, "with", wordToReplace);
    let finder = new RegExp(wordToFind, "g");
    document.body.innerHTML = document.body.innerHTML.replace(finder, wordToReplace);
}

// setTimeout(() => {
//     repl("and", "xoxooxoxox");
// }
//     , 3000)

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(request);
    repl(request.find, request.replace);
});