// creating the custom event class
const events = require("events");

class Logger extends events.EventEmitter {
  log(msg) {
    console.log(msg);
    this.emit("onLog", 1, 2, 3);
  }
}

//called it in events module

module.exports = Logger;
