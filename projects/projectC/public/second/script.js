console.log("!");

var urlParams = window.location.search
var getQuery = urlParams.split('?')[1]
var params = getQuery.split('&')
console.log(params);

let socket = io();
let namebox = document.getElementById("name");
let chatbox = document.getElementById("chat");
let messagebox = document.getElementById("message");
let p3 = document.getElementById("messagebox");
let sendbutton = document.getElementById("send");
let ppl = document.getElementById("ppl");
let btn = document.getElementById("button");
let room = document.getElementById("room");
let left = [];// = new Audio('Left.m4a');
let leftReadyToPlay = true;
let leftIdx = 0;
let right = [];//= new Audio('Right.m4a');
let rightReadyToPlay = true;
let rightIdx = 0;
let numSounds = 8;
// let brek = new Audio("brek.mp3");
let brek;// = document.getElementById("breaksound");

let cw = document.getElementById("chatwrapper");


let x = 0;
let xSpeed = 0;
let slipperyness = 2.9;

let test = document.getElementById("test");
let styleChange = document.createElement("style");
let change1 = document.createTextNode('#test:before{ position: absolute;content:"";height: 0;width: 0;border: 8px solid transparent;box-sizing: border-box;bottom: 0;left: 0;animation: ak ease 1s forwards;}')
let change2 = document.createTextNode('#test:after{ position: absolute;content:"";height: 0;width: 0;border: 8px solid transparent;box-sizing: border-box;top: 0;right: 0;animation: ab ease 1s forwards;}')



function map(value, x1, y1, x2, y2) {
    return (value - x1) * (y2 - x2) / (y1 - x1) + x2;
}

ppl.style.backgroundImage = "url(img/" + params + ".png)";
let abox = document.getElementById("abox");
abox.style.backgroundImage = "url(img/" + params + ".png)";


window.mobileAndTabletcheck = function () {
    var check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};

function permission() {
    for (let i = 0; i < numSounds; i++) {
        left.push(new Audio('k.mp3'));
        right.push(new Audio('k.mp3'));
        right[i].volume = 0;
    }
    brek = new Audio("brek.mp3");//document.getElementById("breaksound");
    startMovement();

    if (typeof (DeviceMotionEvent) !== "undefined" && typeof (DeviceMotionEvent.requestPermission) === "function") {
        DeviceMotionEvent.requestPermission()
            .then(response => {
                if (response == "granted") {
                    document.getElementById("content").style.display = "none";
                    document.getElementById("content").style.transition = ".2s";
                    window.addEventListener('deviceorientation', (event) => {
                        let mapG = map(event.gamma, -90, 90, -slipperyness, slipperyness);
                        xSpeed += mapG;
                        if (event.gamma > 50) {

                        }

                    })
                    window.addEventListener('devicemotion', (event) => {
                        xSpeed += Math.round(event.acceleration.x * 0.5); // needs TUNING, exponential 
                    });
                }
            })
            .catch(console.error)
    } else {
        alert("Oops, something went wrong.");

    }
}
btn.addEventListener("click", permission);


let shakeInterval;
let hitCount = 0;
function startMovement() {
    shakeInterval = setInterval(() => {
        x += xSpeed;
        if ((x + xSpeed) > 150) {
            // WE HIT THE WALL
            
            x = 150;
            xSpeed = 0;
            if (rightReadyToPlay) {
              
                right[rightIdx].play();
                rightIdx++;
                if (rightIdx >= numSounds) {
                    rightIdx = 0;
                }
                rightReadyToPlay = false;
                hitCount++;
                if(hitCount> 5){
                  endShaking();
                  return
                }
            
            }
            leftReadyToPlay = true;


        } else if ((x + xSpeed) < -150) {
            // WE HIT THE WALL
            
            x = -150;
            xSpeed = 0;
            if (leftReadyToPlay) {
                left[leftIdx].play();
                leftIdx++;
                if (leftIdx >= numSounds) {
                    leftIdx = 0;
                }
                leftReadyToPlay = false;

              hitCount++;
              if(hitCount> 5){
                endShaking();
                return
              }
            }
            rightReadyToPlay = true;
            
        }
        ppl.style.left = x + "px";
    }, 10)
}
// console.log();

function endShaking() {
    brek.play();
    clearInterval(shakeInterval);
    setTimeout(()=>{

        styleChange.appendChild(change1);
        styleChange.appendChild(change2);
        document.body.appendChild(styleChange);
        ppl.style.transition = "all 1s";
        ppl.style.height = "0px";
        p3.style.transition = "all 2s";
        p3.style.opacity = "1";
        cw.style.transition = "all 1s";
        cw.style.filter = 'blur(0px)';
      
        setTimeout(() => {
            test.style.transition = "all 2s";
            test.style.height = "0px";
            room.style.display = "none";
            abox.style.transition = "all 1s";
            abox.style.width = "30px";
            abox.style.height = "30px";
        }, 2000)
    },1500)

}

//chatroom

sendbutton.addEventListener("click", () => {
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
    // p.innerHTML = "<img src='img/" + aNum + ".png' width=\"20px\" height=\"20px\">" + "<span class='sender'>" + " :</span> " + message;
    p.innerHTML = "<img src='img/" + mark+ ".png' width=\"20px\" height=\"20px\">" + "<span class='sender'>" + " :</span> " + message;

    li.appendChild(p);
    chatbox.appendChild(li);
    chatbox.scrollTop = chatbox.scrollHeight;
})

