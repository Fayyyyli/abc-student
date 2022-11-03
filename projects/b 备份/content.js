let tags = document.getElementsByTagName("a");
let eating = true;

const getOffset = (el) => {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left,
        top: rect.top
    };
}
console.log(eating+"default")
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log("received");
    if (request.msg == "pause") {
        eating = false;
        console.log(eating+"after clicked false");
    }else{
        eating = true;
        console.log(eating+"unclicked true");
    }
})

  
console.log(eating+"looping true");
for (let i = 0; i < tags.length; i++) {
    if (tags[i].textContent != "") {
        tags[i].addEventListener("mouseover", () => {
            if(eating == true){
                if (tags[i].classList.contains("lizardHasEatenThis") == false) {
                    let eatenLink = {
                        text: tags[i].textContent,
                        link: tags[i].href
                    }
                    setTimeout(()=>{
                    tags[i].style.visibility = "hidden";
                    tags[i].style.pointerEvents = "none";
                    tags[i].classList.add("lizardHasEatenThis");
                    }, 300);
                    console.log(getOffset(tags[i]).left + "+" + getOffset(tags[i]).top);
                    chrome.runtime.sendMessage({ type: 'ate a link', content: eatenLink });

                }
            }
        })

    }
}

