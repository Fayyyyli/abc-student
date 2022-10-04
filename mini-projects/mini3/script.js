let boxes = document.querySelectorAll(".box");
let inputs = document.querySelectorAll(".inputs");
for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = "rgb("+i*30+","+i*40+",240)";
    boxes[i].addEventListener('click',()=>{
        boxes[i].style.animation="horn 2s infinite"
    })
};

function map(value, x1, y1, x2, y2){
    return (value - x1) * (y2 - x2) / (y1 - x1) + x2;
  }
  setInterval(() => { 
    for (let i = 0; i < inputs.length; i++) {
    let mappedlength = map(inputs[i].value,0,100,50,200);
    boxes[i].style.width = mappedlength+'px';
    boxes[i].style.height = mappedlength+'px';
      }
    },5)

setTimeout(()=>{
for(let i = 0; i<boxes.length; i++){
  let ranX = Math.random()*(window.innerWidth-100);
  let ranY = Math.random()*(window.innerHeight-100);
  boxes[i].style.transform = "translate("+ranX+"px, "+ranY+"px)";
}
}, 0)

let on1 = document.getElementById('box-1');
let context1 = new AudioContext();
let destination1 = context1.destination;
let oscillator1 = context1.createOscillator();
let volumeRange1 = document.getElementById("volumeInput1");
oscillator1.frequency.value = 110;//a
let gain1 = context1.createGain();
oscillator1.connect(gain1);
gain1.connect(destination1);
gain1.gain.value = volumeInput1.value/100;

let oscillatorHasStarted1 = false;
on1.addEventListener('click',()=>{
    let ranX = Math.random()*(window.innerWidth-100);
    let ranY = Math.random()*(window.innerHeight-100);
    on1.style.transform = "translate("+ranX+"px, "+ranY+"px)";
    if(oscillatorHasStarted1 == false){
        oscillator1.start(0);
        oscillatorHasStarted1 = true;}
})
volumeRange1.addEventListener("input", ()=>{
    gain1.gain.value = volumeInput1.value/100;
 
  })

let on2 = document.getElementById('box-2');
let context2 = new AudioContext();
let destination2 = context2.destination;
let oscillator2 = context2.createOscillator();
let volumeRange2 = document.getElementById("volumeInput2");
oscillator2.frequency.value = 123.5;//b
let gain2 = context2.createGain();
oscillator2.connect(gain2);
gain2.connect(destination2);
gain2.gain.value = volumeInput2.value/100;

let oscillatorHasStarted2 = false;
on2.addEventListener('click',()=>{
    let ranX = Math.random()*(window.innerWidth-100);
    let ranY = Math.random()*(window.innerHeight-100);
    on2.style.transform = "translate("+ranX+"px, "+ranY+"px)";
    if(oscillatorHasStarted2 == false){
    oscillator2.start(0);
    oscillatorHasStarted2 = true;}
})
volumeRange2.addEventListener("input", ()=>{
    gain2.gain.value = volumeInput2.value/100;
  })

let on3 = document.getElementById('box-3');
let volumeRange3 = document.getElementById("volumeInput3");
let context3 = new AudioContext();
let destination3 = context3.destination;
let oscillator3 = context3.createOscillator();
oscillator3.frequency.value = 130.8;//c3 
let gain3 = context3.createGain();
oscillator3.connect(gain3);
gain3.connect(destination3);
gain3.gain.value = volumeInput3.value/100;

let oscillatorHasStarted3 = false;
on3.addEventListener('click',()=>{
    let ranX = Math.random()*(window.innerWidth-100);
    let ranY = Math.random()*(window.innerHeight-100);
    on3.style.transform = "translate("+ranX+"px, "+ranY+"px)";
        if(oscillatorHasStarted3 == false){
    oscillator3.start(0);
    oscillatorHasStarted3 = true;}
})
volumeRange3.addEventListener("input", ()=>{
    gain3.gain.value = volumeInput3.value/100;
  })

let on4 = document.getElementById('box-4');
let volumeRange4 = document.getElementById("volumeInput4");
let context4 = new AudioContext();
let destination4 = context4.destination;
let oscillator4 = context4.createOscillator();
oscillator4.frequency.value = 146.8;//d 
let gain4 = context4.createGain();
oscillator4.connect(gain4);
gain4.connect(destination4);
gain4.gain.value = volumeInput4.value/100;
let oscillatorHasStarted4 = false;
on4.addEventListener('click',()=>{
    let ranX = Math.random()*(window.innerWidth-100);
    let ranY = Math.random()*(window.innerHeight-100);
    on4.style.transform = "translate("+ranX+"px, "+ranY+"px)";
    if(oscillatorHasStarted4 == false){
    oscillator4.start(0);
    oscillatorHasStarted4 = true;}
})
volumeRange4.addEventListener("input", ()=>{
    gain4.gain.value = volumeInput4.value/100;
  })

let on5 = document.getElementById('box-5');
let volumeRange5 = document.getElementById("volumeInput5");
let context5 = new AudioContext();
let destination5 = context5.destination;
let oscillator5 = context5.createOscillator();
oscillator5.frequency.value = 164.8;//e
let gain5 = context5.createGain();
oscillator5.connect(gain5);
gain5.connect(destination5);
gain5.gain.value = volumeInput5.value/100;

let oscillatorHasStarted5 = false;
on5.addEventListener('click',()=>{
    let ranX = Math.random()*(window.innerWidth-100);
    let ranY = Math.random()*(window.innerHeight-100);
    on5.style.transform = "translate("+ranX+"px, "+ranY+"px)";
    if(oscillatorHasStarted5 == false){
    oscillator5.start(0);
    oscillatorHasStarted5 = true;}
})
volumeRange5.addEventListener("input", ()=>{
    gain5.gain.value = volumeInput5.value/100;
  })

let on6 = document.getElementById('box-6');
let volumeRange6 = document.getElementById("volumeInput6");
let context6 = new AudioContext();
let destination6 = context6.destination;
let oscillator6 = context6.createOscillator();
oscillator6.frequency.value = 174.6//f
let gain6 = context6.createGain();
oscillator6.connect(gain6);
gain6.connect(destination6);
gain6.gain.value = volumeInput6.value/100;

let oscillatorHasStarted6 = false;
on6.addEventListener('click',()=>{
    let ranX = Math.random()*(window.innerWidth-100);
    let ranY = Math.random()*(window.innerHeight-100);
    on6.style.transform = "translate("+ranX+"px, "+ranY+"px)";
    if(oscillatorHasStarted6 == false){
    oscillator6.start(0);
    oscillatorHasStarted6 = true;}
})
volumeRange6.addEventListener("input", ()=>{
    gain6.gain.value = volumeInput6.value/100;
  })

let on7 = document.getElementById('box-7');
let volumeRange7 = document.getElementById("volumeInput7");
let context7 = new AudioContext();
let destination7 = context7.destination;
let oscillator7 = context7.createOscillator();
oscillator7.frequency.value = 196;//g
let gain7 = context7.createGain();
oscillator7.connect(gain7);
gain7.connect(destination7);
gain7.gain.value = volumeInput7.value/100;

let oscillatorHasStarted7 = false;
on7.addEventListener('click',()=>{
    let ranX = Math.random()*(window.innerWidth-100);
    let ranY = Math.random()*(window.innerHeight-100);
    on7.style.transform = "translate("+ranX+"px, "+ranY+"px)";
    if(oscillatorHasStarted7 == false){
    oscillator7.start(0);
    oscillatorHasStarted7 = true;}
})
volumeRange7.addEventListener("input", ()=>{
    gain7.gain.value = volumeInput7.value/100;
  })
