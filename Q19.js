//array.forEach(function(currentValue, index, arr))
//Write a program which will add Hello to each of the name in the name array?


let name = ["Gulshan", "Laxmi", "Sujeet"];
name.forEach(myFunction)

function myFunction(item, index, name) {
 name[index] = "Hello " + item ;
}
console.log(name)
