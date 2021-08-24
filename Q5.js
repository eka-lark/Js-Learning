/*Creating Const Array in javascript*/

const fruits = ["Apple" , "Banana"];
console.log(fruits);
fruits.push("Orange");
console.log(fruits);
fruits[3] = "Graps";
console.log(fruits);
fruits = [ 'Apple', 'Banana', 'Orange', 'Graps' ];
console.log(fruits);

/*Creating Const Object in javascript*/

const Person = {
	name: "Akshay",
	address: "Bangalore",
	contact: 1234567890,
}
console.log(Person);
Person.age = 25;
console.log(Person);
Person = { name: 'Amit', address: 'Pune', contact: 9087654321, age: 30 }
