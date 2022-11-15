let button=document.getElementById("button");
let password=document.getElementById("textIn");

password.addEventListener("input",()=>{
    console.log("value:", password.value);
  })

button.addEventListener("click",()=>{
  let text = password.value;
  let route = "/sendAnswer?answer="+text;
  fetch(route);
  window.location.href="/entrance?password="+password.value;
  })

