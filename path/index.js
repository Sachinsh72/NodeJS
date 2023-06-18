const path = require("path");

console.log(path.sep);  // window -> \ and mac ->/

console.log(process.env.PATH);  // window -> ; and mac -> :

console.log(path.delimiter); //;

const filepath = 'public\home\react.html';

const currentFilePth = __filename;

console.log(currentFilePth);

let baseName = path.basename(currentFilePth);
console.log(baseName);

let baseNameWithoutPath = path.basename(currentFilePth,'.js');
console.log(baseNameWithoutPath);

console.log('ext ->', path.extname(currentFilePth));

let dirNmae = path.dirname(currentFilePth);
console.log('dirname ->', dirNmae);

let pathTofile = path.format({
    dir : 'public\home',
    base: 'index.html'
});

console.log('pathToFile ->', pathTofile);

console.log('IsAbsolute ->', path.isAbsolute(currentFilePth));

console.log('IsAbsolute ->', path.isAbsolute('/index.js'));

console.log('IsAbsolute ->', path.isAbsolute('./index.js'));

console.log('IsAbsolute ->', path.isAbsolute('../index.js'));

let pathToDir = path.join('\home','js','dist','index.js');
console.log('pathToDir ->',pathToDir);

console.log('parse ->',path.parse(currentFilePth));

console.log('relative path ->',path.relative('nodejs\path','Nodejs\my-esm-lib'));

console.log('resolve ->',path.resolve());

console.log('normalize', path.normalize('\\home\\index\\.index.html'));