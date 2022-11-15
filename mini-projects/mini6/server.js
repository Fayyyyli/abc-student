const express = require('express')
const app = express()
const port = 3000
let collectedAnswer = [];

app.use(express.static('public'));

app.get('/entrance', (req, res) => {
  console.log("mainpage");

    if(req.query.password =="china"||req.query.password =="China"){
      res.redirect("/correct");
      console.log("correct");
    }else{
      res.redirect("/wrong");
      console.log("wrong");
    }
})

app.get("/sendAnswer",(req,res)=>{
  let info = req.query;
  let newAnswer = info.answer
  collectedAnswer.push(newAnswer);
  console.log(collectedAnswer);
})

app.get("/getAnswers",(req,res)=>{
  console.log("someone asks for answer",collectedAnswer);
 res.json({data:collectedAnswer});
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
