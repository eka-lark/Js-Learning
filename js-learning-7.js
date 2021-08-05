var sentence = 'Bangalore is the best Indian City'
//output = 'City Indian best the is Bangalore'
var len=1 ;
for(let i =0; i< sentence.length; i++)
{
    if(sentence[i]==' ')
        len++;
}
var dsentence = new Array(len);
console.log(dsentence);
var j=1;
dsentence[0]=sentence[0];

for(let i = 1; i< sentence.length; i++)
{
    if(sentence[i]==' ')
        j++;
    else
        dsentence[j]+=sentence[i];

    console.log(sentence[i]+' '+dsentence[j]);
}

// console.log(dsentence)
// for(var i = dsentence.length - 1; i >= 0; i--)
// {
//     console.log(dsentence[i])
// }