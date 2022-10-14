let player = document.getElementById('player');
let handleSuccess = function (stream) {
    player.srcObject = stream;
};

// from: https://stackoverflow.com/a/14301832
window.mobileAndTabletcheck = function () {
    var check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};

navigator.mediaDevices.
    getUserMedia({
        audio: false,
        video: {
            mandatory: {
                maxWidth: 320,
                maxHeight: 240
            }
        }
    })
    .then(handleSuccess);
let canvas11 = document.getElementById("myCanvas1")
let canvas1 = document.getElementById("myCanvas1").getContext("2d");
let canvas2 = document.getElementById("myCanvas2").getContext("2d");
let canvas3 = document.getElementById("myCanvas3").getContext("2d");
let canvas4 = document.getElementById("myCanvas4").getContext("2d");
let canvas5 = document.getElementById("myCanvas5").getContext("2d");
let canvas6 = document.getElementById("myCanvas6").getContext("2d");
let c1t, c2t, c3t, c4t, c5t, c6t;

let sw = player.offsetWidth, // source width
    sh = player.offsetWidth, // source height
    dw = document.getElementById("myCanvas1").width, // destination width
    dh = document.getElementById("myCanvas1").height,
    change = document.getElementById("change"),
    ch = 100;

    setInterval(() => { 
        let ranX = Math.random() * (window.innerWidth - 320);
        let ranY = Math.random() * (window.innerHeight - 200);
        player.style.transform = "translate(" + ranX + "px, " + ranY + "px)" 
    }, 3000);

let intervals = [];
let refresh = document.getElementById("refresh");
refresh.addEventListener("click", ()=>{location.reload();});


if (window.mobileAndTabletcheck()) {
    document.getElementById("forPhone").style.display = "block";
    document.getElementById("slider").style.display = "block";
    let btn = document.getElementById("button");
    player.style.width = "100px";
    player.style.height = "100px";
    player.style.objectFit = "cover";
    document.getElementById("container").style.height = "80vh";

    let slider = document.getElementById("slider");
    slider.min = 30;
    slider.max = 100;
    slider.value = 100;
    slider.addEventListener("input", ()=>{
        ch = Number(slider.value);
    })
    player.addEventListener('play', () => {
        intervals.push(setInterval(() => {
            canvas1.drawImage(player, 0, 0, 480, ch, 0, 0, dw, dh);
        }, 20));

        setTimeout(() => {
            intervals.push(c2t = setInterval(() => {
                canvas2.drawImage(player, 0, 100, 480, ch, 0, 0, dw, dh);
            }, 20));
        }, 2000);

        setTimeout(() => {
            intervals.push(c3t = setInterval(() => {
                canvas3.drawImage(player, 0, 200, 480, ch, 0, 0, dw, dh);
            }, 20));
        }, 3000);

        setTimeout(() => {
            intervals.push(c4t = setInterval(() => {
                canvas4.drawImage(player, 0, 300, 480, ch, 0, 0, dw, dh);
            }, 20));
        }, 4000);

        setTimeout(() => {
            intervals.push(c5t = setInterval(() => {
                canvas5.drawImage(player, 0, 400, 480, ch, 0, 0, dw, dh);
            }, 20));
        }, 5000);

        setTimeout(() => {
            intervals.push(c6t = setInterval(() => {
                canvas6.drawImage(player, 0, 500, 480, ch, 0, 0, dw, dh);
            }, 20));
        }, 6000);}
    )

    function permission() {

        if (typeof (DeviceMotionEvent) !== "undefined" && typeof (DeviceMotionEvent.requestPermission) === "function") {  
            DeviceMotionEvent.requestPermission()
                .then(response => {
                    if (response == "granted") {
                        document.getElementById("myConsole").innerHTML = "move your phone to shoot";
                        window.addEventListener('devicemotion', (event) => {
                                for (let i = 0; i < intervals.length; i++) {
                                    if (Math.abs(event.acceleration.x) >= 1.5) { 
                                    setInterval(()=>{clearInterval(intervals[i]);},1000)
                                }
                                    if(i == 5){
                                        document.getElementById("slider").style.display = "none";
                                    }
                                }

                        //    if(Math.abs(event.acceleration.x) <= 4 && Math.abs(event.acceleration.x) >=1.5){
                        //         document.getElementById("myConsole").innerHTML = "move faster";
                        //     }
                        })
                    }
                })
                .catch(console.error)
        } else {
            alert("ERROR");
        }
    }
    btn.addEventListener("click", ()=>{btn.style.display = "none";permission();});
    //for phone
} else {
    player.addEventListener('play', () => {
        let c1t = window.setInterval(() => {
            canvas1.drawImage(player, 0, 0, 320, 40, 0, 0, dw, dh);
        }, 20);
        setTimeout(() => { window.clearInterval(c1t) }, 3000);

        setTimeout(() => {
            let c2t = window.setInterval(() => {
                canvas2.drawImage(player, 0, 40, 320, 40, 0, 0, dw, dh);
            }, 20);
            setTimeout(() => { window.clearInterval(c2t) }, 3000);
        }, 1000);

        setTimeout(() => {
            let c3t = window.setInterval(() => {
                canvas3.drawImage(player, 0, 80, 320, 40, 0, 0, dw, dh);
            }, 20);
            setTimeout(() => { window.clearInterval(c3t) }, 3000);
        }, 2000);

        setTimeout(() => {
            let c4t = window.setInterval(() => {
                canvas4.drawImage(player, 0, 120, 320, 40, 0, 0, dw, dh);
            }, 20);
            setTimeout(() => { window.clearInterval(c4t) }, 3000);
        }, 3000);

        setTimeout(() => {
            let c5t = window.setInterval(() => {
                canvas5.drawImage(player, 0, 160, 320, 40, 0, 0, dw, dh);
            }, 20);
            setTimeout(() => { window.clearInterval(c5t) }, 3000);
        }, 4000);

        setTimeout(() => {
            let c6t = window.setInterval(() => {
                canvas6.drawImage(player, 0, 200, 320, 40, 0, 0, dw, dh);
            }, 20);
            setTimeout(() => { window.clearInterval(c6t) }, 3000);
        }, 5000);
    })
}
