let socket = io();
let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");
let c3 = document.getElementById("c3");
let c4 = document.getElementById("c4");
let c5 = document.getElementById("c5");
let c6 = document.getElementById("c6");
let btn = document.getElementById("button");

c1.addEventListener("click",()=>{
    console.log("c1 clicked");
    window.location.href="/second?1";
})
c2.addEventListener("click",()=>{
    console.log("c2 clicked");
    window.location.href="/second?2";

})
c3.addEventListener("click",()=>{
    console.log("c3 clicked");
    window.location.href="/second?3";})

c4.addEventListener("click",()=>{
    console.log("c4 clicked");
    window.location.href="/second?4";})

c5.addEventListener("click",()=>{
    console.log("c5 clicked");
    window.location.href="/second?5";})

c6.addEventListener("click",()=>{
    console.log("c5 clicked");
    window.location.href="/second?6";})

btn.addEventListener( "click", ()=>{
    document.getElementById("content").style.display = "none";
    document.getElementById("wrapper").style.filter = 'blur(0px)';
    document.getElementById("content").style.transition = ".2s";
    document.getElementById("wrapper").style.transition = "1s";
} );