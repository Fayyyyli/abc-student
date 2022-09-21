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

const menuItems = [...document.querySelectorAll('.menu-item')];

menuItems.forEach(item=>{

    let word = item.children[0].children[0].innerText.split("");
    item.children[0].innerHTML = "";
    word.forEach((letter,idx) => {
        item.children[0].innerHTML += `<span style="--index:${idx};">${letter}</span>`;
    }) 

let cloneDiv = item.children[0].cloneNode(true);
cloneDiv.style.position = 'absolute';
cloneDiv.style.left = '0';
cloneDiv.style.top = '0';
item.appendChild(cloneDiv);
})
 