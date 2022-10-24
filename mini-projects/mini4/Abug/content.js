// console.log("going");


// let links = document.getElementsByTagName("a");
// let num = links.length;

// function disableLink() {
//     if (num >= 4) {
//         for (let i = 0; i < 20; i++) {
//             let random = Math.floor(Math.random() * (num));
//             let link = links[random];
//             link.style.pointerEvents = "none";
//             link.style.display = "none";

//             let txt = i+".  "+link.innerText;
//             console.log(txt);
//             chrome.runtime.sendMessage({
//                 data: txt
//             });
//         }
//     }
// }


// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     disableLink();
// });

console.log("going");


let links = document.getElementsByTagName("a");
let num = links.length;
let hidNum = Math.floor(Math.random() * (num/3*2))+Math.floor(num/3);

function disableLink() {
    if (num >= 4) {
        for (let i = 0; i < hidNum; i++) {
            let random = Math.floor(Math.random() * (num));
            let link = links[random];
            link.style.pointerEvents = "none";
            link.style.color = "green";
            link.innerHTML += "is gone ";
            // let txt = i+".  "+link.innerText;
            console.log(num);
            chrome.runtime.sendMessage({
                data1:hidNum,
                data2:num
            });
        }
    }
}


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    disableLink();
});

