const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

let app = express();

// incluindo pasta 'routes' no app.
consign().include('routes').into(app);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3000;
const ip = '127.0.0.1';

app.listen(port, ip, ()=>{

    console.log("Listening in port ", port);
});