const express = require('express')
const app = express()
const port = 3000


app.use(express.static('public'));

app.get('/entrance', (req, res) => {
  console.log("mainpage");

    if(req.query.password =="yes"){
      res.sendFile(__dirname + '/public/correct/index.html');
      console.log("correct");
    }else{
      res.sendFile(__dirname + '/public/wrong/index.html')
      console.log("wrong");
    }
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// app.get('/secret', (req, res) => {  //secret route!!
//   //res.send('Hello World!')
//   let guess=req.query.word;
//   let guess2=req.query.wword;
//   let s3=req.query.slider3;
//   let s4=req.query.slider4;
//   let s5=req.query.slider5;
//   let s6=req.query.slider6;

//   if( guess>48&&guess<88 && guess2>60&&guess2<100 &&s3>7&&s3<47&& s4>38&&s4<78&&s5>23&&s5<63&&s6>9&&s6<49){
//     console.log("let them in!!");
//     //res.sendFile(__dirname + '/public/insideGarden/index.html')
//     res.redirect("/entrance");
//   }
//   else{
//     console.log("Sorry :)");
//     res.redirect("/wrong");
//     //res.sendFile(__dirname + '/public/wrong/index.html')
//   }
//   console.log("someone requests the /secret route")
// })



// // app.get('/gift',(req,res)=>{
// //   let query =req.query;
// //   let gift=query.gift;
// //   gifts.push(gift)
// //   console.log("received:",gift);
// //   console.log("All the gifts:",gifts);
// //   console.log("-------------");
// // })

// // app.get('/getGifts',(req,res)=>{
// //   console.log("someone asks for gifts");
// //   res.json({content:gifts, sender:"the garden gods" });
// //   console.log("---------------");
// // })
