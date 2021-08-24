var a =  ["Red", "Yellow", "Blue", "Green", "Black", "Green", "Black", "Black"];
var res = {};
var out = [];
for(var i = 0; i < a.length; ++i) {
    if(!res[a[i]])
    {
        res[a[i]] = 0;
    }
    res[a[i]]++;
}

 

for (var key in res)
{
    if (res[key] == 1)
    {
        out.push(key);
    }
}

 

console.log(out)