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
    fibonacci(n - 1) + fibonacci( n - 2)
  }

  return ongoing;
}

console.log(fibonacci(6));

//1 1 2 3 5 18


var fibonacci_series = function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

 console.log(fibonacci_series(8));