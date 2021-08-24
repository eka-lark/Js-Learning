//async/await

var fetch = require("node-fetch");
console.log("This is asynch-await\n\n");
// function demo_asynch(){
async function demo_asynch() {
  console.log("inside demo_asynch()");
  const response = await fetch("https://api.github.com/users");
  console.log("before response");
  const users = response.json();
  return users;
}

console.log("before calling demo_asynch()");
let ans = demo_asynch();
console.log(ans);
ans.then((data) => console.log(data));
console.log("\nlast line of this js file\n");
