const http = require('http');

let server = http.createServer((req, res)=>{

    console.log("Url..:", req.url);
    console.log("Method..:", req.method);

    switch(req.url){
        
        case '/':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end("<h1> ok <h1>")
            break;

        case '/users':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({
                user:[{
                    name: 'matheus',
                    id: 1
                }]
            }));
            break;
    }

});

const port = 3000;
const ip = '127.0.0.1';

server.listen(port, ip, ()=>{

    console.log("Listening in port ", port);
});