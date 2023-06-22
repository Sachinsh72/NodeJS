var fs = require('fs');


fs.unlink('nodejs_architecture.txt',function(err){
    if(err){
        console.log("Error in deleting file");
    }
    console.log("Success in deleting file");
});