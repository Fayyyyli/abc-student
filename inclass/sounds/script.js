let on = document.getElementById('on');
let off = document.getElementById('off');

let context = new AudioContext();
let destination = context.destination;

let oscillator = context.createOscillator();
oscillator.frequency.value = 200;//hertz. here to an A note(4th octave)


let gain = context.createGain();

oscillator.connect(gain);

gain.connect(destination);

let oscillatorHasStarted = false;
on.addEventListener('click',()=>{
    if(oscillatorHasStarted == false){
    oscillator.start(0);
    oscillatorHasStarted = true;}
    gain.gain.value = 1;
})
off.addEventListener("click",()=>{
    gain.gain.value =0;
})