const express = require('express')
const app = express()
const port = 3000


app.use(express.static('public'));
//different routes 
app.get('/', (req, res) => {
  res.send('bye World!')
})

app.get('/swimmingpool', (req, res) => {
    res.send('water')
  })

// app.get('/treehouse', (req, res) => {
//     // console.log(req);
//     console.log("someone wnats to visit the treehouse");
//     res.sendFile(__dirname+"/treehouse/index.html");
//   })
app.get('/guess', (req, res) => {
    console.log(req.query);
    if(req.query.password =="shoelace"){
        res.send('!');
    }else{
        res.send('guess again')
    }
    // console.log("someone wnats to visit the treehouse");
    res.sendFile(__dirname+"/treehouse/index.html");
  })


console.log(__dirname);








app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})