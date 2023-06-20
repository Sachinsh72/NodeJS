const os = require('os');

console.log('CPU Architecture: '+ os.arch());

console.log('Free memory: '+ os.freemem());

console.log('Total memory: '+ os.totalmem());

console.log('Network Interfaces: '+ os.networkInterfaces());

console.log('Network Interfaces: '+ JSON.stringify(os.networkInterfaces()));

console.log('OS default tempt dir: '+ os.tmpdir());

console.log('Endianess : '+ os.endianness());

console.log('Hostname : '+ os.hostname());

console.log('OS type : '+ os.totalmem());

console.log('OS platform : '+ os.platform());

console.log('OS release : '+ os.release());