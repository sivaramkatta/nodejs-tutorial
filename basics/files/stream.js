// dealing with data in files not at a time but in chunks
const file = require("fs");
const path = require("path");

const myReadStream = file.createReadStream(
  path.join(__dirname, "/textFiles/fileone.txt"),
  "utf8"
);

const myWriteStream = file.createWriteStream(
  path.join(__dirname, "/textFiles/filetwo.txt")
);

myReadStream.on("data", data => {
  console.log("chunk received");
  myWriteStream.write(data);
  console.log("chunk wrote successfully");
});
