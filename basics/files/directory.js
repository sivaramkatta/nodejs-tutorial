// dealing with directories
const fs = require("fs");
const path = require("path");

// create directory
fs.mkdir(path.join(__dirname, "example"), err => {
  if (err) throw err;
  else console.log("successfully created directory");
});

// gives list of files in directory
fs.readdir(path.join(__dirname, "example"), (err, data) => {
  if (err) throw err;
  else console.log(data);
});

// remove directory if its empty else it throws error
fs.rmdir(path.join(__dirname, "example"), err => {
  if (err) throw err;
  else console.log("successfully deleted directory");
});
