// clear the console
console.clear();

// mic test
function speak(msg) {
  console.log(msg);
};

speak('i\'m alive!');

// base case



function fibonacci(n) {
  var ongoing = [];
  
  if(n < 1) {
    return 0
  }
  else if( n <= 2) {
    return 1
  } else {
    ongoing.push(n);
    fibonacci(n - 1) + fibonacci( n - 2)
  }

  return ongoing;
}

console.log(fibonacci(6));

//1 1 2 3 5 18