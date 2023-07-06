const http = require('http');

const PORT = 3030;
HOSTNAME = 'localhost';

const  server = http.createServer((req,res)=>{
    //Home page
    //About page
    //Contact page
    //Product page
    //Res.....> Error

    if(req.url =='/'){
        res.statusCode = 200;
        res.setHeader('Content-Type','text/plain')
        res.end('Welcome to Node server created by Sachin Sharma');
    }else if (req.url =='/about'){
        res.statusCode = 200;
        res.setHeader('Content-Type','text/plain')
        res.end('About Page !');
    }else if (req.url =='/contact'){
        res.statusCode = 200;
        res.setHeader('Content-Type','text/plain')
        res.end('Contact Page !');
    }else if (req.url =='/product'){
    
        const options ={
            hostname :'fakestoreapi.com',
            path:'/products/1',
            method:'GET'
        }
        const apiRes = http.request(options,(apiRes)=>{
        
            apiRes.on("data",(data)=>{
            res.statusCode = 200;
            // res.statusCode = 500;

            // res.setHeader('Content-Type','text/plain')
            res.setHeader('Content-Type','application/json')

            // res.end('Node server created by Sachin Sharma');
            res.end(data.toString());
            // console.log(data.toString());
            })
        });
        
        
        apiRes.on("error",(e)=>{
            console.log(e);
        })
        
        apiRes.end();


        
    }else{
        res.statusCode = 500;
        res.setHeader('Content-Type','text/plain')
        res.end('Server Error !');
    }

});

server.listen(PORT,()=>{
    console.log(`Server is running at ${HOSTNAME}:${PORT}`);
});