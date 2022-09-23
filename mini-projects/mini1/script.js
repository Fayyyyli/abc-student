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
let elementClicked = false;

flies.forEach(normalans => {
  normalans.addEventListener('click', function move(event) {
  normalans.style.color = "yellow";
  normalans.style.fontSize = "3em";
  elementClicked = true;
  } )
})


