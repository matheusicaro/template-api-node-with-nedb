const express = require('express');

let app = express();

app.get('/', (req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end("<h1> ok <h1>")

})

app.get('/users', (req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
        user:[{
            name: 'matheus',
            id: 1
        }]
    });
})

const port = 3000;
const ip = '127.0.0.1';

app.listen(port, ip, ()=>{

    console.log("Listening in port ", port);
});