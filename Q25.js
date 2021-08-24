//Function constructor
var myFunction = new Function("a", "b", "return a * b");
 
var x = myFunction(4, 3);
 
console.log(x);
 
//anonymous function or Function Expressions
var myFunction = function (a, b) {return a * b};
 
var x = myFunction(4, 3);
 
console.log(x);
 
//function declaration
function myFunction(a, b) {
  return a * b;
}
 
console.log(myFunction(4, 3));

//anonymous self invoking function
(function () {
  var x = "Hello!!";  // I will invoke myself
  console.log(x);
})();
 
//function used in expression
 
function myFunction(a, b) {
  return a * b;
}
 
var x = myFunction(4, 3) * 2;
 
console.log(x);