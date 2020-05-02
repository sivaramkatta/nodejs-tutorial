// readline module is used to read the text 0r anything line by line
const readline = require("readline");
const fs = require("fs");
const path = require("path");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("what is node \n", answer => {
  if (answer.trim() === "node") {
    console.log("correct answer");
    rl.close();
  } else {
    rl.setPrompt("sorry wrong answer try again \n");
    rl.prompt();
  }
});

rl.on("line", ans => {
  if (ans.trim() === "node") {
    console.log("correct answer");
    rl.close();
  } else {
    rl.setPrompt("sorry wrong answer try again \n");
    rl.prompt();
  }
});

// example 2 of reading file line by line
const rl_file = readline.createInterface({
  input: fs.createReadStream(path.join(__dirname, "/textFiles/fileone.txt"))
});

let lineNo = 0;
rl_file.on("line", line => {
  console.log("line", lineNo, line);
  lineNo += 1;
});
