const express = require('express')
const app = express()
var cors=require('cors')
const port = 3000
const db = require("./db.js");

app.use(cors())


app.get('/', (req, res) =>{
    res.sendFile(__dirname + "/index.html");
    console.log(res.query);
    db.dbConnect(res.query);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))



