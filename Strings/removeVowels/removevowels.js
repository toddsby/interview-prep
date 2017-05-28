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
var el = document.getElementById('testcase');
// get simple element by id
var simple = document.getElementById('simple').textContent;

console.log('before: ', el.textContent);
// camelCase content of element
console.log('after: ', disemvowel(el.textContent));

console.log(simple);

function removeSpace(str) {
  return str.replace(/\s+/g, function(match, offset, original){ 
    return '';
  })
};

console.log('slice: ', disemvowel(simple));

/* !! NOTES !!

remove vowels from string.
q1: how does it define vowels?
a2: english lanuage vowels
q2: what is missing from the str in the test case.
a2: a e i o u

// regex
// replace unwanted characters with empty str
q3: how to make regex case insensitive
a3: /i flag
 */