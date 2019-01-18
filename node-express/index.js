const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const hostname = "localhost";
const port = 3000;

const app= express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.all('/dishes',(req,res,next) => {
    res.statusCode =200;
    res.setHeader('Content-Type','text/plain');
    next();//look for additional information
});

app.get('/dishes', (req,res,next) => {
    res.end('will send all dishes to you');
});

app.post('/dishes',(req,res,next) => {
    res.end(`will add the dish : ${req.body.name}`)
});

app.use(express.static(__dirname+'/public'))
app.use((req, res, next) => {
    
    res.statusCode = 404;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>This is an Express server</h1></body></html>');
    
});

const server = http.createServer(app);
server.listen(port,hostname, () => {
    console.log(`server running at https://${hostname}:${port}`);
})