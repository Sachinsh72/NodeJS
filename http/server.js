const http = require('http');

// create an HTTP server using the createServer() method of the http object.
const server = http.createServer((req,res)=>{
    if(req.url =='/'){
        res.write('<h1>Hello, Node.js!</h1>');
    }else{
        if(req.url =='/about'){
            res.write('<h1>About page</h1>')
        }
    }
    res.end();
})

// Finally, the incoming HTTP request is monitored on port 5002.
server.listen(5002);
console.log('The HTTP server is running on the port 5002');