class Person{
    fName = "Akshay";
    lName = "Patel";
    constructor(){
        console.log("Constructor called...")
        console.log(this.fName+" "+this.lName)
    }
    fullName(){
        return (this.fName+" "+this.lName);
    }
}
var obj = new Person();
var fullname = obj.fullName();
console.log(fullname);