/*The localeCompare() method returns a number 
indicating whether a reference string comes before,
 or after, or is the same as the given string in sort order.*/
 
const a = 'réservé'; // with accents, lowercase
const b = 'RESERVE'; // no accents, uppercase

console.log(a.localeCompare(b));
// expected output: 1
console.log(a.localeCompare(b, 'en', { sensitivity: 'base' }));
// expected output: 0
