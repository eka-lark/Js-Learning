<<<<<<< HEAD
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
=======
var sentence = 'Bangalore is the best Indian City'
//output = 'City Indian best the is Bangalore'
var len = sentence.length;
var dsentence = sentence.split(" ");
console.log(dsentence.length);
var j=0;
var arr =new Array;
for(var i = dsentence.length - 1; i >= 0; i--)
    arr[j++] = dsentence[i];
    console.log(arr)
>>>>>>> 0f95e54cd857bdf225dafff73525aee5402669b0
