/*
Write an array with list of employee objects and create an full name array from the last name and first name. Ex: [Kumar Amit, Mohan Prithivi, Patel Akshay....]



const employee = [

{fname: "Gulshan", lname: "Babaik"},
{fname: "Akshay", lname: "Patel"},
{fname: "Sujeet", lname: "P"}

];
 let newArr = employee.map(fullName);
function fullName(obj){​​​​

    empName = {​​​​}​​​​;
    empName.name = obj.lname+ " " + obj.fname;
  
    return empName;
}​​​​;


console.log(newArr);
*/
const employees = [
{
    first_name : "Gulshan",
    last_name : "Baraik",
},
{
    first_name : "Pruthvi",
    last_name : "Mohan",
},
{
    first_name : "Akshay",
    last_name : "Patel",
}];

 

const fullName = employees.map(function (name) {
    return name.last_name + ' ' + name.first_name;
});

 

console.log(fullName);