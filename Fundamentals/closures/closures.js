// clear the console
console.clear();

// mic test
function speak(msg) {
  console.log(msg);
}

speak('i\'m alive!');

// what will this output?

for (var i = 0; i < 5; i++) {
  setTimeout(function() { console.log(i); }, i * 1000 );
};

// how would you change it to output 
// 0
// 1
// 2
// 3
// 4

// wrapping the timeout with a closure (ie wrapping function)
for (var i = 0; i < 5; i++) {
  // enclose in within a function and pass value
  (function (x){
    setTimeout(function() { console.log('new output', x); }, x * 1000 );
  })(i);
};