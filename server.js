const express = require('express');
const consign = require('consign');

let app = express();

// incluindo pasta 'routes' no app.
consign().include('routes').into(app);

const port = 3000;
const ip = '127.0.0.1';

app.listen(port, ip, ()=>{

    console.log("Listening in port ", port);
});