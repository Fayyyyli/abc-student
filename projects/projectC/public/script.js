console.log("!");

let socket = io();
let namebox = document.getElementById("name");
let chatbox = document.getElementById("chat");
let messagebox = document.getElementById("message");
let sendbutton = document.getElementById("send");

// from: https://stackoverflow.com/a/14301832
let btn = document.getElementById("button");
function permission () {
    // document.getElementById('doeSupported').innerText = 'asking';
    if ( typeof( DeviceMotionEvent ) !== "undefined" && typeof( DeviceMotionEvent.requestPermission ) === "function" ) {
        // (optional) Do something before API request prompt.
        DeviceMotionEvent.requestPermission()
            .then( response => {
            // (optional) Do something after API prompt dismissed.
            if ( response == "granted" ) {

            }
        })
            .catch( console.error )
    } else {
        alert( "DeviceMotionEvent is not defined" );

    }
}
btn.addEventListener( "click", permission );








//chatroom
// sendbutton.addEventListener("click",()=>{
// console.log("clicked");
// let name = namebox.value.trim();
// if(name == ""){
//     name = "anonymous";
//     namebox.value = "";
// }
// let message = messagebox.value;
// if(message != ""){
// //send name and message to server
// let data = {name: name, message: message}
// socket.emit('message', data);
// console.log(data);
// }
// messagebox.value = "";
// })


// socket.on("incoming",(data)=>{
//     console.log(data);
//     let name = data.name;
//     let message = data.message;
//     let li = document.createElement("li");
//     let p = document.createElement("p");
//     p.innerHTML = "<span class='sender'>"+name+":</span> "+ message;
//     li.appendChild(p);
//     chatbox.appendChild(li);
//     chatbox.scrollTop = chatbox.scrollHeight;
// })


// //https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
// messagebox.addEventListener("keyup",(event)=>{
//         if(event.key === "Enter"){
//             sendbutton.click();
//         }
// })