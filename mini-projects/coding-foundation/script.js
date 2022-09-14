let btn = document.getElementById("btn-number");
btn.addEventListener("click", CreateFrog);

function CreateFrog() {
    let NumberOfFrog = document.getElementById("InputNumber").value;
    document.getElementById('FrogArea').innerHTML=""; 
    // retrieve the new input and clean the value from last time


    for (let i = 0; i < NumberOfFrog; i++) {
        let NewFrog = document.createElement("img");
        NewFrog.src = "pic.jpeg";
        NewFrog.style.width = "100px";
        NewFrog.style.height = "100px";
        NewFrog.style.margin = "10px";
        NewFrog.style.marginBottom = "5px";
        document.getElementById('FrogArea').appendChild(NewFrog);
    }
// add new pics
}

