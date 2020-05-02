// dealing with files
const fs = require("fs");
const path = require("path");

//read file
fs.readFile(
  path.join(__dirname, "/textFiles", "/fileone.txt"),
  "utf8",
  function (err, data) {
    if (err) throw err;
    console.log("successfully read data");
  }
);

//write file replace content
fs.writeFile(
  path.join(__dirname, "/textFiles", "/filetwo.txt"),
  "this is first added content",
  function (err) {
    if (err) throw err;
    console.log("successfully written");
  }
);

//concat content to file
fs.appendFile(
  path.join(__dirname, "/textFiles", "/filetwo.txt"),
  "this is appended content",
  function (err) {
    if (err) throw err;
    console.log("successfully appended");
  }
);

//rename file
fs.rename(
  path.join(__dirname, "/textFiles", "/filetwo.txt"),
  path.join(__dirname, "/textFiles", "/renametwo.txt"),
  function (err) {
    if (err) throw err;
    console.log("successfully renamed");
  }
);

//delete file
fs.unlink(path.join(__dirname, "/textFiles", "/renametwo.txt"), function (err) {
  if (err) throw err;
  console.log("successfully deleted");
});
