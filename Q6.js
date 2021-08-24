var a = 10;
var b = 5;
var c = 15;
var d = 20;
var e = 30;

var ans = a / b * c + d - e;
console.log(ans);//20

var ans = a / --b * c + d - e;
console.log(ans);

var ans = a / b * ++c + d - e;
console.log(ans);

var ans = a / b * ++c + d - --e;
console.log(ans);