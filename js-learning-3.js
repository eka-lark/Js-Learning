var workingDays = ['Sunday', 'Monday', 'Tuesday', 'Saturday'];
var holday = workingDays.map((ele) => ele == 'Sunday' ? 'Holiyday' : ele == 'Saturday' ? 'Holiday': ele);
console.log(holday);
