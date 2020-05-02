// Node js is event driven so events module is important
const events = require("events");
const Logger = require("./customEvent");

const myEvent = new events.EventEmitter();

// event listener
myEvent.on("slap", (...a) => {
  // event handler function
  console.log("crying....", a);
});
// event emitter
myEvent.emit("slap", 1, 2, 3);

// custom event calling
const myLogger = new Logger();
myLogger.on("onLog", (...a) => {
  console.log("crying....", a);
});
myLogger.log("i am ironman");
