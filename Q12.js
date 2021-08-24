
let c = [];
let uniq = [];
function merg(arr1=[],x,y,arr2=[]){
	
c = [ ...arr1, x, y, ...arr2 ];

for(let i=0;i< c.length; i++){	
	if(uniq.indexOf(c[i])<0)
	{
		uniq.push(c[i]);
	}
	
}
console.log(uniq);
console.log(c);
}
merg([1,2,3],3,4,[4,5,6]);