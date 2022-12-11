console.log("!");

var urlParams = window.location.search
var getQuery = urlParams.split('?')[1]
var params = getQuery.split('&')
console.log(params);


let socket = io();
let namebox = document.getElementById("name");
let chatbox = document.getElementById("chat");
let messagebox = document.getElementById("message");
let sendbutton = document.getElementById("send");
let ppl = document.getElementById("ppl");
let btn = document.getElementById("button");

let left = [];// = new Audio('Left.m4a');
let leftReadyToPlay = true;
let leftIdx = 0;
let right = [];//= new Audio('Right.m4a');
let rightReadyToPlay = true;
let rightIdx = 0;
let numSounds = 8;


let x = 0;
let xSpeed = 0;
let slipperyness = 2.9;

let test = document.getElementById("test");
let style = document.createElement("style");
let change1 = document.createTextNode('#test:before{ position: absolute;content:"";height: 0;width: 0;border: 8px solid transparent;box-sizing: border-box;bottom: 0;left: 0;animation: ak ease 1s forwards;}')
let change2 = document.createTextNode('#test:after{ position: absolute;content:"";height: 0;width: 0;border: 8px solid transparent;box-sizing: border-box;top: 0;right: 0;animation: ab ease 1s forwards;}')



function map(value, x1, y1, x2, y2) {
    return (value - x1) * (y2 - x2) / (y1 - x1) + x2;
}

ppl.style.backgroundImage = "url(img/" + params + ".png)";
let abox = document.getElementById("abox");
abox.style.backgroundImage = "url(img/" + params + ".png)";

window.onload = function () {

    for (let i = 0; i < numSounds; i++) {
        left.push(new Audio('k.mp3'));
        right.push(new Audio('k.mp3'));
        right[i].volume = 0;
    }

    startMovement();

    window.addEventListener('deviceorientation', (event) => {
        let mapG = map(event.gamma, -90, 90, -slipperyness, slipperyness);
        xSpeed += mapG;
        // if(event.gamma > 50){
        //           }
    })
    window.addEventListener('devicemotion', (event) => {
        xSpeed += Math.round(event.acceleration.x * 0.5); // needs TUNING, exponential 
        if (event.acceleration > 20) {
            alert("!");
        }
    });
}



function startMovement() {
    setInterval(() => {

        if ((x + xSpeed) > 150) {

            x = 150;
            xSpeed = 0;
            if (rightReadyToPlay) {
                right[rightIdx].play();
                rightIdx++;
                if (rightIdx >= numSounds) {
                    rightIdx = 0;
                }
                rightReadyToPlay = false;
            }
            leftReadyToPlay = true;


        } else if ((x + xSpeed) < -150) {
            if (leftReadyToPlay) {
                left[leftIdx].play();
                leftIdx++;
                if (leftIdx >= numSounds) {
                    leftIdx = 0;
                }
                leftReadyToPlay = false;
            }
            rightReadyToPlay = true;

            x = -150;
            xSpeed = 0;
        }
        x += xSpeed;
        ppl.style.left = x + "px";

    }, 10)
}
console.log();

//chatroom

let rect = abox.getBoundingClientRect();
console.log(rect.top, rect.left);

sendbutton.addEventListener("click", () => {
    style.appendChild(change1);
    style.appendChild(change2);
    document.body.appendChild(style);
    ppl.style.transition="all .8s";
    // ppl.style.position = "absolute";
    // ppl.style.top =rect.bottom+"px";
    // ppl.style.left =rect.left+"px";
    // ppl.style.top ="576px";
    // ppl.style.left ="100px";
    ppl.style.height="0px";
    abox.style.transition="all .8s";
    abox.style.opacity="1";
    document.getElementById("chatwrapper").style.filter = 'blur(0px)';
    document.getElementById("content").style.transition = ".5s";

    // setTimeout(()=>{
    //     document.getElementById("test").style.transition="2s";
    //     document.getElementById("test").style.visibility="hidden";
    // },1000)
    


    console.log("clicked");
    let message = messagebox.value;
    if (message != "") {
        let data = { message: message, avatar: params }
        socket.emit('message', data);
        console.log(data);
    }
    messagebox.value = "";
})


socket.on("incoming", (data) => {
    console.log(data);

    let aNum = data.avatar;
    let message = data.message;
    let li = document.createElement("li");
    let p = document.createElement("p");
    p.innerHTML = "<img src='img/" + aNum + ".png' width=\"20px\" height=\"20px\">" + "<span class='sender'>" + " :</span> " + message;
    li.appendChild(p);
    chatbox.appendChild(li);
    chatbox.scrollTop = chatbox.scrollHeight;
})


//https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
messagebox.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        sendbutton.click();
    }
})