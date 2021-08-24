//object method
var obj1 = {​​​​1 : "Hello", 2: "World"}​​​​;
var obj2 = {​​​​ 3 : "Welcome", 4: "to"}​​​​;
var obj3 = {​​​​ 5 : "Objects"}​​​​;
// Using Object.assign()  

var final_obj = Object.assign(obj1, obj2, obj3);  

console.log(final_obj);

var obj1 = { 
  name: 'Anil', 
  age: 22 
}; 
let cloneobj = Object.assign({}, obj1); 
cloneobj.age = 32; 
console.log(obj1); 
console.log(cloneobj);

var obj1 = {1 : "Hello", 2: "World"};
var obj2 = { 3 : "Welcome", 4: "to"};
var obj3 = { 5 : "spread Syntax"};

var final_obj = {...obj1, ...obj2, ...obj3};
console.log(final_obj);

