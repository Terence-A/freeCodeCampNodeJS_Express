// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (Only share minimum)

// const secret = "SUPER SECRET";
// const john = "john";
// const peter = "peter";

// const sayHi = (name) => {
//   console.log(`Hello there ${name}`);
// };
const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");
require("./7-mind-grenade");
console.log(data);
console.log(data.items[0]);
console.log(data.singlePerson.name);
console.log(names);

sayHi("Terence");
sayHi(names.john);
sayHi(names.peter);
