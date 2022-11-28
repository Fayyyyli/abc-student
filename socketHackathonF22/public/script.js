// let socket = io("");
let socket = io("https://abc-socket-hackathon.glitch.me");
let others = [];
let myId;
let testMode = true;

//receiveMyId
socket.on('singleId', function (msg) {
  console.log("My ID:", msg.value);
  myId = msg.value;
});
// here I receive updated whenever someone disconnects or connects to the socket server.
socket.on('updatedClients', function (msg) {
  console.log("updatedClients", msg);
  others = msg.value;
});


let all = document.getElementById("all");
let allbutme = document.getElementById("allbutme");
let randomSingle = document.getElementById("randomSingle");
let buttonOutput = document.getElementById("buttonOutput");
let message = document.getElementById("textAll");
let sendText = document.getElementById("sendText");
let check = document.getElementById("check");
let range = document.getElementById("myRange");
let btns = document.querySelectorAll('button');;

function buttonReceived() {
  buttonOutput.style.backgroundColor = "red";
  setTimeout(function () {
    buttonOutput.style.backgroundColor = "black";
  }, 500)
}

//button1ToAllButMe
allbutme.addEventListener("click", () => {
  socket.emit("button1ToAllButMe");
})
socket.on("button1", () => {
  // document.body.style.backgroundColor =  "rgba(70,216,252,0.1)";
  document.body.style.backgroundColor =  "black";
  document.body.style.transition = "1s";
  document.getElementById("buttonWrapper").style.scale = -1;
  // document.getElementById("allbutme").style.border = "solid white 2px";
  // document.getElementById("randomSingle").style.border = "solid white 2px";

})

//text
sendText.addEventListener("click", () => {
  socket.emit("textToAllButMe", { value: message.value });
  console.log(message.value);
})

socket.on("text", (msg) => {
  console.log(msg.value);
  let p = document.createElement("p");
  p.innerHTML = msg.value;
  p.style.position = "absolute";
  p.style.color = "#807465";
  p.style.fontSize = Math.random() * 3+"em";
  p.style.fontFamily= 'Arial, Helvetica, sans-serif';
  p.style.left = Math.random() * (window.innerWidth - 200) + "px";
  p.style.top = Math.random() * (window.innerHeight - 100) + "px";
  p.classList.add("addedText");
  setInterval(()=>{
    p.classList.add("pulse");
  },Math.random()*3000)
  document.body.appendChild(p);
})

//boolean

check.addEventListener("change", () => {
  let state = check.checked;
  console.log(state);
  socket.emit("boolean1ToAllButMe", { value: state });
  }
)

socket.on("boolean1", (msg) => {
  let texts = document.querySelectorAll('.addedText');
if(msg.value){
  rangeout.classList.add("pulse");
  texts.forEach(text => {
    text.style.scale = -1;
    text.style.color = 'cyan';
    text.style.transitionDuration = (Math.random() * 1.5)+"s";
  })
  btns.forEach(btn => {
    btn.style.scale =-1;
    btn.style.color = "white";
  })
  document.getElementById("textAll").style.scale =-1;
}else{
    texts.forEach(text => {
      text.style.scale = 1;
      text.style.color = "#807465";
      text.style.transitionDuration = (Math.random() * 1.5)+"s";
    })
    btns.forEach(btn => {
      btn.style.scale = 1;
      btn.style.color = "rgb(70,216,252)";
  })
  document.getElementById("textAll").style.scale =-1;
}
})

//range slider
let degrees = 0;
range.addEventListener("input", () => {
  let rangeV = range.value;
  // console.log(rangeV);
  socket.emit("valueToAllButMe", { value: rangeV });
  let msgs = document.querySelectorAll('.NewMsg');
    msgs.forEach(msg => { 
    degrees += Math.random()* 10 ;
      msg.style.transform = 'rotate(' + degrees + 'deg)';
  })

})


let rangeout = document.getElementById("rangeout");
socket.on("value", (msg) => {
  console.log(msg.value);
  rangeout.style.width = (msg.value) * 4 + "px";
  rangeout.style.backgroundColor = "#fb0086";
  rangeout.style.height = (msg.value) * 4 + "px";
})

//single
function getRandomSocketIDthatIsAlsoConnected() {
  let ranIDX = Math.floor(Math.random() * others.length);
  return others[ranIDX];
}

randomSingle.addEventListener("click",()=>{
  console.log("single clicked");
  socket.emit("button1ToSingle",{id:getRandomSocketIDthatIsAlsoConnected() });
})

socket.on("button1", (msg) => {
  console.log(msg.from);
  let p = document.createElement("p");
  p.innerHTML = "Unknown message";
  p.style.color = "#ff329f";
  p.style.fontSize = "1.5em";
  p.style.fontFamily = 'Impact, Haettenschweiler, Arial Narrow Bold, sans-serif';
  p.style.fontWeight = "bold";
  p.style.position = "absolute";
  p.style.zIndex = 999;
  p.style.left = Math.random() * (window.innerWidth - 200) + "px";
  p.style.top = Math.random() * (window.innerHeight - 50) + "px";
  p.classList.add("NewMsg");
  wrapper.appendChild(p);
})
