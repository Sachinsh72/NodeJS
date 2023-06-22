const http = require('http');

// create an HTTP server using the createServer()
const server = http.createServer((req,res)=>{
    if(req.url =='/'){
        res.write("<h1>I Am Happy To Learn Full Stack Web Development From PW Skills!</h1>");
    }
    res.end();
})

// Finally, the incoming HTTP request is monitored on port 5002.
server.listen(5002);
console.log('The HTTP server is running on the port 5002');