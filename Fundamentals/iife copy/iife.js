// clear the console
console.clear();

// mic test
function speak(msg) {
  console.log(msg);
}

speak('i\'m alive!');

// hello js
console.clear();

// Given the following code
// what will be printed to the console
// explain

// IIFE - immediately invoked function expression
// the function is declared inside a closure but
// b is accessible externally because of the second assignment ie a = b = 5;
(function() {
  // var a = 5;
  var a = b = 5;
})();

console.log(b); // global variable - 5
console.log(a); // undeclared - throws Error