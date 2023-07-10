/* Build a Server Using Http Module NodeJS with api endpoints for Getting Products Data
" ‘/’ → send msg as “We:come to Men & Women Dummy Data”.
" ‘/men’ → send 10 products data of men.
" ‘/women’ → send 10 products data of wome.
" ‘/other’ → send response as page not found. */


const express = require("express");

const app = express();

const PORT = 3050;
const HOSTNAME = 'localhost';


app.get('/',(req,res)=>{
    res.send("Welcome to Men & Women Dummy Data");
})

app.get('/men',(req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','application/json')
    res.send([
        {
            "id":"1",
            "name": "Mens-Tshirt",
            "size":"M",
            "color":"Red",
            "Price":199
        },{
            "id":"2",
            "name": "Mens-Shirt",
            "size":"S",
            "color":"Pattern",
            "Price":299
        },{
            "id":"3",
            "name": "Mens-Pant",
            "size":"40",
            "color":"Red",
            "Price":499
        },{
            "id":"4",
            "name": "Mens-Tshirt",
            "size":"XL",
            "color":"Navy Blue",
            "Price":199
        },{
            "id":"5",
            "name": "Mens-Tshirt",
            "size":"L",
            "color":"Pink",
            "Price":149
        },{
            "id":"6",
            "name": "Mens-Jeans",
            "size":"38",
            "color":"Blue",
            "Price":699
        },{
            "id":"7",
            "name": "Mens-Jeans",
            "size":"42",
            "color":"Black",
            "Price":499
        },{
            "id":"8",
            "name": "Mens-Tshirt",
            "size":"S",
            "color":"Red",
            "Price":199
        },{
            "id":"9",
            "name": "Mens-Tshirt",
            "size":"XS",
            "color":"Pink",
            "Price":99
        },{
            "id":"10",
            "name": "Mens-Pant",
            "size":"28",
            "color":"Brown",
            "Price":149
        },

    ])
});

app.get('/women',(req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','application/json')
    res.send([
        {
            "id":"1",
            "name": "Womens-kurti",
            "size":"M",
            "color":"Red",
            "Price":199
        },{
            "id":"2",
            "name": "Womens-Top",
            "size":"S",
            "color":"Pattern",
            "Price":299
        },{
            "id":"3",
            "name": "Womens-Pant",
            "size":"40",
            "color":"Red",
            "Price":499
        },{
            "id":"4",
            "name": "Womens-Jeans",
            "size":"XL",
            "color":"Navy Blue",
            "Price":199
        },{
            "id":"5",
            "name": "Womens-Jeans",
            "size":"L",
            "color":"Pink",
            "Price":149
        },{
            "id":"6",
            "name": "Womens-Saree",
            "size":"M",
            "color":"Blue",
            "Price":699
        },{
            "id":"7",
            "name": "Womens-Kurti",
            "size":"XL",
            "color":"Black",
            "Price":499
        },{
            "id":"8",
            "name": "Womens-Kurti",
            "size":"S",
            "color":"Red",
            "Price":199
        },{
            "id":"9",
            "name": "Womens-Top",
            "size":"XS",
            "color":"Pink",
            "Price":99
        },{
            "id":"10",
            "name": "Womens-Frok",
            "size":"M",
            "color":"Brown",
            "Price":149
        },

    ])
})


app.get('/other',(req,res)=>{
    res.send("Page not found");
})

app.listen(PORT,()=>{
    console.log(`Server running at ${HOSTNAME}:${PORT}`);
})