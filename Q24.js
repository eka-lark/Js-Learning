//string method
function student(name, qualification){
	this.name = name;
	this.qualification = qualification;
}
student.prototype.age = 20;
var stu = new student('Daniel Grint' , 'BCA');
console.log(stu.name);
console.log(stu.age);
var str = 'Welcome to start with method :)';
console.log(str.startsWith('Wel',0));
console.log(str.startsWith('wel',0));
var str = "Welcome to ends with method.";
console.log(str.endsWith("to", 10))
console.log(str.endsWith("To", 10))
var str = "hello world";
console.log(str.includes('world',5));
console.log(str.includes('World', 11))
var str = "hello world ";
console.log(str.repeat(5))

