let wid = Math.round(window.innerWidth/ 255);
let height = Math.round(window.innerHeight / 255);

document.onmousemove = function(move){
    let pageX = Math.round(move.pageX / wid);
    let pageY = Math.round(move.pageY / height);
    document.body.style.backgroundColor = "rgb("+(pageX-100)+","+pageY+",250)";
};

let rainDrop = document.getElementById("rain").innerHTML;
let letters = rainDrop.split("");

let rainString="";
window.onload=function(){
let letterSpans = letters.map(function(letter){return "<span class='normal letterrain'>"+letter+"</span>"}); 
rainString = letterSpans.join("");
document.getElementById('rain').innerHTML=rainString;
}

function drop(){
    let normalClass=document.getElementsByClassName('normal');
    if(normalClass.length==0){
    }
    else{
        let num=(Math.floor(Math.random() * normalClass.length));
        normalClass[num].classList.add('fall'),normalClass[num].classList.remove('normal');
    }
}
setTimeout(function(){setInterval(drop,60)},900); 


let questionMark = document.getElementById("question");
setTimeout(function(){questionMark.style.display="block"},6500); 

questionMark.addEventListener("click", ()=>{
        let answer = document.getElementById('answer');
    answer.style.display="block";
});


let fly = document.getElementById("answer").innerHTML;
let Afly = fly.split("");

let flyString="";

let flySpans = Afly.map(function(flyy){return "<span class='normalans'>"+flyy+"</span>"}); 
flyString = flySpans.join("");
document.getElementById('answer').innerHTML=flyString;
let flyClass = document.getElementsByClassName("normalans");

let flies = document.querySelectorAll('.normalans');
// let clickstatus = new Array(0).fill(false);

function addNew(){
    let conX = Math.random() * (window.innerWidth/1.1);
    let conY = Math.random() * (window.innerHeight/1.1);
const newContent = document.createElement("p");
const node = document.createTextNode("💧");
newContent.appendChild(node);
document.body.appendChild(newContent);
newContent.style.position = "absolute";
newContent.style.top =conY+ 'px';
newContent.style.left = conX+ 'px';
newContent.style.fontSize ="2 rem";
console.log(conX,conY);
}

flies.forEach(normalans => {
  normalans.addEventListener('click', function move(event) {
  normalans.style.color = "yellow";
  normalans.style.fontSize = "3em";
  addNew();
  
//   clickstatus.push(true);
  } )
})


// console.log(clickstatus.length);
// if(clickstatus.length >= 1){
//     let wat = document.getElementById('water');
//     wat.style.display = "block";
// }





