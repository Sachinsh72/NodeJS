//require env
require('dotenv').config();

const PORT = process.env.PORT || 5000;

//import server
const app = require('./app')

//start server
app.listen(PORT,()=>{
    console.log(`Server is successfully listening at localhost: ${PORT}`);
})