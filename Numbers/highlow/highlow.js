// clear the console
console.clear();

// mic test
function speak(msg) {
  console.log(msg);
};

speak('i\'m alive!');

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers) {
  // sort the array using native sort
  let sorted = numbers.split(' ').sort(function(a,b){ return a-b; });
  console.log('sorted: ', sorted);
  // high is always the last item, low is always the first
  return sorted[sorted.length - 1] + ' ' + sorted[0];
};

// alternative implementation highAndLow
// https://www.codewars.com/kata/reviews/55565cd093eb1235210000a0/groups/555cbef5207c41ebd600000f

/*
function highAndLow(numbers){
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}
*/

// get element by id
var el = document.getElementById('testcase');

// get simple element by id
var simple = document.getElementById('simple').textContent;

console.log('before: ', el.textContent);


console.log('after: ', highAndLow(el.textContent));

console.log(simple);


console.log('slice: ', highAndLow(simple));

/* !!NOTES!!

// 7 1 5

sort first

array.sort(function(a,b){
  return a-b;
});

// 1 5 7

return String(array.slice(0).toString() + array.slice(array.length - 1).toString());
first loop 
5 > 7 : False -> high is 7
second loop
1 > 7 : False -> high is 7
third loop
5 > 7 : False -> high is 7


 */