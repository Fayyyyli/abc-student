let button=document.getElementById("button2");
let button2=document.getElementById("button3");
let password=document.getElementById("text2");

password.addEventListener("input",()=>{
    console.log("value:", password.value);
  })

button.addEventListener("click",()=>{
    let text = password.value;
    let route = "/sendAnswer?answer="+text;
    fetch(route);
    if(password.value==="china"|| password.value=="China"){
      window.location.href="/entrance?password="+password.value;
    }
  })

  button2.addEventListener("click",()=>{
    fetch("/getAnswers")
    .then((resFromServer)=>{
        return resFromServer.json();
    })
    .then((processedData)=>{
        console.log(processedData)
        console.log(processedData.data)
        let answers=processedData.data;
    
        answers.forEach(answer => {
            let p = document.createElement("p");
            p.innerHTML = answer;
            p.style.position = "absolute";
            p.style.color = "aqua";
            p.style.fontSize = "1.3em";
            p.style.left = Math.random()* (window.innerWidth-200) + "px";
            p.style.top = Math.random()* (window.innerHeight-50) + "px";
            document.body.appendChild(p);
            
        });
    })
    })