var inputs = [1, 2, 3, 4, 5];
var n = inputs.length;
var x = inputs[n-1], i;
for(i = n-1; i > 0; i--)
    inputs[i] = inputs[i-1];
inputs[0] = x;
console.log(inputs);