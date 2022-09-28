function countdown() {
  let milli = 10000;
  let counter = setInterval(() => {
    if (milli <= 0) {
      document.getElementById("timer").innerHTML = "00:00";
      clearInterval(counter);
      return
    }
    milli -= 5;
    secDisplay = Math.floor(milli / 1000);
    test = Math.floor(milli - secDisplay * 1000);
    document.getElementById("timer").innerHTML = "0" + secDisplay + ":" + test;
  }, 5);

let tweet = {};
tweet.win = window.open("", "", "width=400, height=150,left=160,top=150");
tweet.win.document.write("<p id='txt'><span id='twt'> </span> acounts have been created on twitter</p>");
tweet.num = 110;
tweet.stepSize = tweet.num/1000;
tweet.counter = 0;
tweet.win.document.getElementById("txt").style.fontSize = "2em";
tweet.win.document.getElementById("twt").style.color = "#1DA1F2";
tweet.win.document.getElementById("txt").style.textAlign = 'center';
tweet.interval = setInterval(function(){
  tweet.win.document.getElementById('twt').innerHTML = Math.round(tweet.counter);
  tweet.counter+=tweet.stepSize;
  if(tweet.counter>=tweet.num){
    clearInterval(tweet.interval);
    tweet.win.document.getElementById("twt").style.textDecoration = "underline";  
  }
},10)

let google = {};
google.win = window.open("", "", "width=400, height=150,left=700,top=150");
google.win.document.write("<p id='txt'><span id='gog'> </span> searches have been done on Google</p>");
google.num = 46480;
google.stepSize = google.num/1000;
google.counter = 0;
google.win.document.getElementById("txt").style.fontSize = "2em";
google.win.document.getElementById("gog").style.color = "#4285F4";
google.win.document.getElementById("txt").style.textAlign = 'center';
google.interval = setInterval(function(){
  google.win.document.getElementById('gog').innerHTML = Math.round(google.counter);
  google.counter+=google.stepSize;
  if(google.counter>=google.num){
    clearInterval(google.interval);
    google.win.document.getElementById("gog").style.textDecoration = "underline"; 
  }
},10)

let ins = {};
ins.win = window.open("", "", "width=400, height=150,left=820,top=600");
ins.win.document.write("<p id='txt'><span id='in'> </span> photos have been uploaded on Instagram</p>");
ins.num = 6940;
ins.stepSize = ins.num/1000;
ins.counter = 0;
ins.win.document.getElementById("in").style.color = "pink";
ins.win.document.getElementById("txt").style.fontSize = "2em";
ins.win.document.getElementById("txt").style.textAlign = 'center';
ins.interval = setInterval(function(){
  ins.win.document.getElementById('in').innerHTML = Math.round(ins.counter);
  ins.counter+=ins.stepSize;
  if(ins.counter>=ins.num){
    clearInterval(ins.interval);
    ins.win.document.getElementById("in").style.textDecoration = "underline";  }
},10)

let amazon = {};
amazon.win = window.open("", "", "width=450, height=150,left=20,top=400");
amazon.win.document.write("<p id='txt'><span id='ama'> </span> items have been purchased on Amazon</p>");
amazon.num = 510;
amazon.stepSize = amazon.num/1000;
amazon.counter = 0;
amazon.win.document.getElementById("txt").style.fontSize = "2em";
amazon.win.document.getElementById("txt").style.textAlign = 'center';
amazon.win.document.getElementById("ama").style.color = "#FF9900";
amazon.interval = setInterval(function(){
  amazon.win.document.getElementById('ama').innerHTML = Math.round(amazon.counter);
  amazon.counter+=amazon.stepSize;
  if(amazon.counter>=amazon.num){
    clearInterval(amazon.interval);
    amazon.win.document.getElementById("ama").style.textDecoration = "underline";
  }
},10)

let you = {};
you.win = window.open("", "", "width=520, height=150,left=300,top=800");
you.win.document.write("<p id='txt'><span id='tub'> </span> video hours have been watched on Youtube</p>");
you.num = 23140;
you.stepSize = you.num/1000;
you.counter = 0;
you.win.document.getElementById("txt").style.fontSize = "2em";
you.win.document.getElementById("txt").style.textAlign = 'center';
you.win.document.getElementById("tub").style.color = "red";
you.interval = setInterval(function(){
  you.win.document.getElementById('tub').innerHTML = Math.round(you.counter);
  you.counter+=you.stepSize;
  if(you.counter>=you.num){
    clearInterval(you.interval);
    you.win.document.getElementById("tub").style.textDecoration = "underline";
  }
},10)

let apple = {};
apple.win = window.open("", "", "width=540, height=140,left=900,top=400");
apple.win.document.write("<p id='txt'><span id='app'> </span> apps have been downloaded from Appstore</p>");
apple.num = 6340;
apple.stepSize = apple.num/1000;
apple.counter = 0;
apple.win.document.getElementById("txt").style.fontSize = "2em";
apple.win.document.getElementById("txt").style.textAlign = 'center';
apple.win.document.getElementById("app").style.color = "darkgrey";
apple.interval = setInterval(function(){
  apple.win.document.getElementById('app').innerHTML = Math.round(apple.counter);
  apple.counter+=apple.stepSize;
  if(apple.counter>=apple.num){
    clearInterval(apple.interval);
    apple.win.document.getElementById("app").style.textDecoration = "underline";
  }
},10)

  setInterval(function () {
    amazon.win.close();
    ins.win.close();
    tweet.win.close();
    google.win.close();
    you.win.close();
    apple.win.close();
    // document.getElementById("timer").innerHTML = "Isn't it amazing?";
  document.getElementById("timer").innerHTML = "110 acounts created on Twitter<br>46480 searches done on Google<br>6340 apps downloaded from Apple<br>23140 video hours watched on Youtube<br>510 items purchased on Amazon<br>6940 photos uploaded on Instagram";
  document.getElementById("timer").style.fontSize = "1.5em";
  document.getElementById("timer").style.color = 'black';
}, 14000)
}
// function changeBg(){
//   document.body.style.animation="change 10s";
// }
button.addEventListener("click", () => { countdown() });

// data from: https://www.visualcapitalist.com/tech-giants-visualizing-profits-for-every-10-seconds/
