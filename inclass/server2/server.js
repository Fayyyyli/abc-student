const { response } = require('express');
const express = require('express')
const app = express()
const port = 3000

let collectedFood = [];

app.use(express.static('stuff-everyone-can-get'))


app.get("/newdes",(req,res)=>{
    res.send("helo")
})

app.get("/sendFood",(req,res)=>{
    console.log("got new food");
    let info = req.query;
    console.log(info);
    let newFood = info.food
    collectedFood.push(newFood);
    console.log(collectedFood);
})

app.get("/getFoods",(req,res)=>{
    console.log("someone asks for this info",collectedFood);
    // res.send("sendsend");
    res.json({data:collectedFood});
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })