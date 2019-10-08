const express = require('express')
const app = express()
var cors=require('cors')
var mysql = require('mysql')
// var mysql = require('mysql')
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
}),
//SELECT FROM *
app.get('/db/retrieve/:username', (req,res) => {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'myapp'
      })
      connection.connect()
      connection.query("SELECT * FROM accounts where username='${req.params.username}'", function (err, rows, fields) {
        if (err) throw err
        res.json({
            data:rows,
            params:req.params,
            username:req.params.username
        })
      })
      connection.end()
})


//CREATE INTO /db/insert/:username/:email/:password'
app.get('/db/create/:username/:email/:password', (req,res) => {
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'myapp'
          })
          connection.connect()     
          connection.query(`INSERT INTO accounts (username,email,password) VALUES('${req.params.username}','${req.params.email}','${req.params.password}')`, function (err, rows, fields) {
            if (err) throw err
            res.json({
                data:rows,
                params:req.params,
                username:req.params.username
            })
          })          
          connection.end()
    })
// RETRIEVE /db/retrieve/:username/:email/:password
    app.get('/db/retrieve/:username/:email/:password', (req,res) => {
            var connection = mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: '',
                database: 'myapp'
              })
              connection.connect()     
              connection.query(`INSERT INTO accounts (username,email,password) VALUES('${req.params.username}','${req.params.email}','${req.params.password}')`, function (err, rows, fields) {
                if (err) throw err
                res.json({
                    data:rows,
                    params:req.params,
                    username:req.params.username
                })
              })          
              connection.end()
        })
//UPDATE '/db/update/:id/:username',
app.get('/db/update/:id/:username', (req,res) => {
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'myapp'
          })
          connection.connect()     
          connection.query(`UPDATE accounts set username='${req.params.username}' where id='${req.params.id}'`, function (err, rows, fields) {
            if (err) throw err
            res.json({
                data:rows,
                params:req.params,
                username:req.params.username
            })
          })          
          connection.end()
    })
//LISTEN TO THE PORT 
app.listen(port, () => console.log(`Example app listening on port ${port}!`))





