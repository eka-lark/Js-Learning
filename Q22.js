//filter method
/*
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function checkEven(num){
	
	if(num %2==0)
		return true;
	else
		return false;
}
let even = numbers.filter(checkEven);
console.log(even);
console.log(numbers);
*/

const arr = [1, 3, 5, 3, 7];
const val = 3;
const ans = arr.filter(function (x){
	return x != val;
});
console.log(ans);