// Multiple occurrences removal : input - [1,2,3,4,5,1,2,3,2,1]    output-[4,5]

const input = [1,2,3,4,5,1,2,3,2,1];
let ans = [];
input.map(function(item, index){
	if(input.indexOf(item) === index)
		 ans.push(item);
});
console.log(ans);

//remove multiple occurences from an array using map 
console.log("first approach")
var a = [1,2,3,4,5,1,2,3,2,1];
var res = {};
var out = [];
for(var i = 0; i < a.length; ++i) {
    if(!res[a[i]])
    {
        res[a[i]] = 0;
    }
    res[a[i]]++;
}
console.log(res);
for (var key in res)
{
    if (res[key] == 1)
    {
        out.push(key);
    }
}
 
console.log(out);
console.log("second approach");
//using reduce
var input = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4]
const output = input.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
console.log(output);
console.info([...output.keys()])
console.info([...output.values()])
console.info([...output.entries()])
console.log("third approach");
function RemoveElements(arr,n,k)
    {
        let mp=new Map();
          for(let i=0;i<n;i++)
          {
              mp.set(arr[i],
                mp.get(arr[i])==null ? 1 : mp.get(arr[i]) + 1)
          }
            console.log(mp);
            for(let m of mp.entries())  {   
              if(m[1] !== 1){
                  console.log(m[0])
                
              }
            }
    }
       let arr=[1,2,2,3,8,5,3,9,6];
       let n=arr.length;
       let k=2;
       RemoveElements(arr,n,k);