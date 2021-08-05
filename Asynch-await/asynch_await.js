console.log('This is asynch-await\n\n');
// function demo_asynch(){
async function demo_asynch(){
    console.log('inside demo_asynch()');
    const response = fetch('https://api.github.com/users');
    console.log('before response');
    const users = (await response).json();
    return "return the demo of asynch()";
};

console.log('before calling demo_asynch()');
let ans = demo_asynch();
console.log(ans);
console.log('\nlast line of this js file\n');