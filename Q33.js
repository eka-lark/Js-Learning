// Generator
function* fibonacci() {
    var previous = 0, current = 1;
    while (true) {
        var temp = previous;
        previous =  current;
        current = temp + current;
        yield current;
    }
}
for (var i of fibonacci()) {
    console.log(i); // 1, 2, ... Infinity
    if (i > 5000) {
      break;
    }
}

function* yieldArrayElements() {
    yield 1;
    yield* [ 20, 30, 40 ];
}
let a = yieldArrayElements();
console.log(a.next()); // { value: 1, done: false }
console.log(a.next()); // { value: 20, done: false }
console.log(a.next()); // { value: 30, done: false }
console.log(a.next()); // { value: 40, done: false }
console.log(a.next()); // { value: undefined, done: true }