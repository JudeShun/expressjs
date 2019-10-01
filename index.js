const express = require('express')
const app = express()
var cors=require('cors')
app.use(cors())
const port = 3000

app.get('/', (req, res) =>{
    res.json({
        title:'Hello World',
        date:'Today'
    
    });
})
app.post('/user',(req,res)=>{
    res.json({
        username:'jude',
        email:'bbjudespra44@gmail.com',
        password: null   
    });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))