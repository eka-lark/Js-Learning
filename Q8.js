const input = [1,2,3,4,5,1,2,3,2,1];

//output = [4,5]
const arr = [];


for(let i =0; i <= input.length; i++){
	
	let n = input[i];
	console.log(n)
	 arr[n]++;
	
}
for(let i =0; i <= input.length; i++){
		if(arr[i] == 1) 
			console.log(input[i]);
}