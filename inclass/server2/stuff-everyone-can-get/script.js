console.log("ssssss");


let input = document.getElementById("input");
let btn = document.getElementById("button");
let btnData = document.getElementById("getData");

btnData.addEventListener("click",()=>{
//ask server for data
fetch("getFoods")
.then((resFromServer)=>{
    return resFromServer.json();
})
.then((processedData)=>{
    console.log(processedData)
    console.log(processedData.data)
    let foods=processedData.data;

    foods.forEach(food => {
        let p = document.createElement("p");
        p.innerHTML = food;
        document.body.appendChild(p);
        
    });
})
})

btn.addEventListener("click",()=>{
    let text = input.value;
    console.log(text);
    let route = "sendFood?food="+text;
    fetch(route);

    input.value = "";
})