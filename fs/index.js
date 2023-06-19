const fs = require('fs');

//Asynchronous way to read file
fs.readFile('input.txt', function(err,data){
    if(err){
        console.log('error', err);
        return err;
    }
    else
    console.log("data",data.toString());
    console.log('Read End');
    return data;
});

console.log('other stuff');

//synchronous way to read file
var data = fs.readFileSync('input.txt');
console.log('data: ',data.toString());
console.log('Read End');
console.log('other stuff');

// Above is highlevel api, now for the low level read is divide in two parts : Read > Open + read

const buf = new Buffer(1024)
fs.open('input.txt', 'r+', function(err, fd){
    if(err){
        console.log('Error in file opening : ', err);
    }else{
        console.log("file open successfully");
    }

    fs.read(fd, buf, 0, buf.length, 0 , function(err, bytes){
        if(err){
            console.log('Error in reading file');
        }
        console.log("Data",bytes);
        console.log("Data :",buf.slice(0,bytes).toString());
        fs.close(fd,function(err){
            if(err){
                console.log("Error in closing file");
            }
            console.log("Success in closing file");
        })
    });
});

//synchronous way to write file  : here it will override on the file
fs.writeFile('input.text','Writing into file', function(err){
    if(err){
        console.log("Error in writing file");
    }
    console.log("Success in writing file");
});

//Append file : to add in existing file

fs.appendFile('input.txt','--Sachin sharma','utf8', function(err){
    if(err){
        console.log("Error in appending file");
    }
    console.log("Success in appending file");
});

//Deleting file
fs.unlink('input1.txt',function(err){
    if(err){
        console.log("Error in deleting file");
    }
    console.log("Success in deleting file");
});