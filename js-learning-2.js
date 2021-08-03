var workingDays = ['Sunday', 'Monday', 'Tuesday', 'Saturday', 'Saturday'];
var c = 0;
workingDays.forEach(element =>
    {
    if (element === 'Sunday' || element === 'Saturday')
    {
    } 
    else
    {
        c++;
    }
});
console.log(c);