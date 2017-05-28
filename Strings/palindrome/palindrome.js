// clear the console
console.clear();

// mic test
function speak(msg) {
  console.log(msg);
};

speak('i\'m alive!');

// attach cameCase method to String prototype
var disemvowel = function (str) {
  return str.replace(/[aeiou]/gi, '');
};

// alternative https://www.codewars.com/kata/reviews/52fba700adcd10b182000980/groups/537e1b30989c70e20c000616
/* 
function disemvowel(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  
  return str.split('').filter(function(el) {
    return vowels.indexOf(el.toLowerCase()) == -1;
  }).join('');
}
*/

// get element by id
var test = document.getElementById('testcase').textContent;
// get simple element by id
var simple = document.getElementById('simple').textContent;

console.log('before: ', test);
// camelCase content of element
console.log('after: ', disemvowel(test));

console.log('simple:', simple);

console.log('simple after: ', disemvowel(simple));

/* !! NOTES !!

Q1: can you give me other examples of palindrome?
A1:
 */