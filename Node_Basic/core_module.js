const {sum} = require('./helpers');
const http=require('http');







const server= http.createServer((req,res)=>{

    res.end("Hello world!")
});

server.listen(3000);

const total=sum(20,50);
console.log("Total :"+total);
