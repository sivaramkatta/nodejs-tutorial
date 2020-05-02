// module used to deal with info about file/dir paths
const path = require("path");

//return info obj about file/dir
console.log(path.parse(__filename), "\n");

//return directory name
console.log(path.dirname(__filename), "\n");

//return name of file/dir
console.log(path.basename(__filename), "\n");

//return extension of file
console.log(path.extname(__filename), "\n");

// return joined path
console.log(path.join(__dirname, "/textFiles", "/fileone.txt"));
