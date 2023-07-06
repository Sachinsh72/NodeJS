const http = require('http');

const options ={
    hostname :'fakestoreapi.com',
    path:'/products/1',
    method:'GET'
}
const apiRes = http.request(options,(apiRes)=>{

    apiRes.on("data",(data)=>{
        console.log(data.toString());
    })
});


apiRes.on("error",(e)=>{
    console.log(e);
})

apiRes.end();