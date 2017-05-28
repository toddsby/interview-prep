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
// https://www.codewars.com/kata/reviews/55565cd093eb1235210000a0/groups/555cbef5207c41ebd600000f

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