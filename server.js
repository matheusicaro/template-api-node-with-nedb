const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressValidator());

// incluindo pasta 'routes' no app.
consign().include('routes').include('utils').into(app);

const port = 3000;
const ip = '127.0.0.1';

app.listen(port, ip, ()=>{

    console.log("Listening in port ", port);
});