// clear the console
console.clear();

// mic test
function speak(msg) {
  console.log(msg);
};

speak('i\'m alive!');

// naive doesn't account for edge cases like case eye vs eyE
function isPalindrome(str) {
  // cast string to lowercase -account for edge case, then to array
  var temp = str.toLowerCase().split('');
  // duplicate array
  var og = temp.slice(0);
  // if reversed arrays are equal string is a palindrome
  return temp.toString() === og.reverse().toString();
};

// alternative codementor mock interview (doesn't account for eyE)
/*
function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}
*/

// get element by id
var test = document.getElementById('testcase').textContent;
// get simple element by id
var simple = document.getElementById('simple').textContent;

console.log('before: ', test);
// camelCase content of element
console.log('after: ', isPalindrome(test));

console.log('simple:', simple);

console.log('simple after: ', isPalindrome(simple));

console.log('eyE', isPalindrome('eyE'));
console.log('not', isPalindrome('not'));
//console.log('0_0 (: /-\\ :) 0–0', isPalindrome('0_0 (: /-\\ :) 0–0'));

/* !! NOTES !!

Q1: can you give me other examples of palindrome?
A1: eye, racecar, "0_0 (: /-\ :) 0–0", never odd or even

Q2: what should happen with integers or white space?
A1: remove them.

// i should be able to compare original with reversed? essentially treating the string like an array.
 */