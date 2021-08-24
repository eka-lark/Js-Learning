for (var i = 0; i < 5; i++) {
	console.log("i =" + i);
	setTimeout(() => console.log("Its print after 2 seconds i="+i), 2000);
	console.log("i = "+i);
}
 
for (let i = 0; i < 5; i++) {
    console.log(i)
	setTimeout(() => {
		console.log("each time assign new value for i = "+i), 2000
	});
	console.log(i)
}