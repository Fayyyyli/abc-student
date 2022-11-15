let button=document.getElementById("button");
let password=document.getElementById("textIn");

password.addEventListener("input",()=>{
    console.log("value:", password.value);
  })

button.addEventListener("click",()=>{
    window.location.href="/entrance?password="+password.value;
  })

