// clear the console
console.clear();

// mic test
function speak(msg) {
  console.log(msg);
};

speak('i\'m alive!');

// Your task is to make a function that can take any non-negative integer as a argument and return it with it's digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map?v=control#Using_map_to_reverse_a_string
function descendingOrder(numbers) {
  var temp = Array.prototype.map.call(numbers, function(n){ return n;})
  console.log('temp', temp);
  // sort the array using native sort
  var sorted = temp.sort(function(a,b){ return a-b; });
  console.log('sorted: ', sorted);
  // high is always the last item, low is always the first
  return sorted.reverse().join('');
};

// alternative implementation descendingOrder
// https://www.codewars.com/kata/reviews/5485d20fd8325e250a00013e/groups/54875241ab4964a4c3000d50
//

/* 

function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}

*/

/*

function descendingOrder(n){
  //cast to string
  var str = n.toString();

  // alternative to Array.prototype.map.call
  var temp = [];
  for(var i = 0; i < str.length; i++ ) {
    temp.push(str[i]);
  };
  // sort the array using native sort
  var sorted = temp.sort(function(a,b){ return a-b; });
  // high is always the last item, low is always the first
  // reverse, concat string, and cast to integer
  return Number(sorted.reverse().join(''));
}

 */

// get element by id
var el = document.getElementById('testcase');

// get simple element by id
var simple = document.getElementById('simple').textContent;

console.log('before: ', el.textContent);


console.log('after: ', descendingOrder(el.textContent));

console.log(simple);


console.log('simple: ', descendingOrder(simple));

console.log('edge: ', descendingOrder(document.getElementById('edge').textContent));

console.log('tricky: ', descendingOrder(document.getElementById('tricky').textContent));

/* !!NOTES!!

sort as array and then reverse

q1: can I sort a string of integers?
a1: think so

q2: can I cast string to an array,
q3: can create an array by looping over the string?
a2,a3: you can use Array map prototype on the string with call



 */