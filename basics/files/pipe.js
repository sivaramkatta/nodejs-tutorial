// same as reading from stream and writing to write stream but in easy way
const fs = require("fs");
const path = require("path");

const myReadStream = fs.createReadStream(
  path.join(__dirname, "/textFiles/fileone.txt"),
  "utf8"
);

const myWriteStream = fs.createWriteStream(
  path.join(__dirname, "/textFiles/filetwo.txt")
);

myReadStream.pipe(myWriteStream);
