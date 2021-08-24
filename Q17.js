/*
Remove the elements which are having multiple occurences in 
the array ["Red", "Yellow', "Blue", "Green", "Black", "Green", "Black", "Black"]
*/

let colors = ["Red", "Yellow", "Blue", "Green", "Black", "Green", "Black", "Black"];
let ans = colors.entries();
for(let i of ans)
	console.log(i.keys+"  "+ i.value);

