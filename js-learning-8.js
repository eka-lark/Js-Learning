var sentence = 'Bangalore is the best Indian City'
//output = 'City Indian best the is Bangalore'
var len = sentence.length;
var dsentence = sentence.split(" ");
var j=0;
var arr =new Array;
for(var i = dsentence.length - 1; i >= 0; i--)
    arr[j++] = dsentence[i];
    console.log(arr)