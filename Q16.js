const num = [1,2,3,4,5,6,7,8,9,10];
const num1 = [1,2,3,4,5,6,7,8,9,10];
const num2 = [1,2,3,4,5,6,7,8,9,10];
console.log(num.copyWithin(1,3,5));
console.log(num1.copyWithin(1,3)); //omitting the parameter end  
console.log(num2.copyWithin(1)); //omitting the parameters start and end 

