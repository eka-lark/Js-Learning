//Remove duplicate: input - [1,2,3,4,5,1,2,3,2,1]    output-[1,2,3,4,5] using set

let input = [1,2,3,4,5,1,2,3,2,1];

function removeDublicates(a) {
   return Array.from(new Set(a));
}

let ans = removeDublicates(input);
console.log(ans);