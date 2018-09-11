const express = require('express');
let routeHome = require('./routes/home');
let routeUsers = require('./routes/users');

let app = express();

app.use(routeHome);
app.use('/users', routeUsers);

const port = 3000;
const ip = '127.0.0.1';

app.listen(port, ip, ()=>{

    console.log("Listening in port ", port);
});