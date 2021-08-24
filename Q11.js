function argRequired()
{
	throw new Error('arguments are required');
}
function demo(x = argRequired(),y = argRequired())
{
	return x.concat(y);
}
//console.log(demo())

console.log(demo("hi ", "akshay"))

let taxRate = () => 0.1;
let getPrice = (price, tax = price * taxRate())=> price + tax;

console.log(getPrice(1000));