// clear the console
console.clear();

// mic test
function speak(msg) {
  console.log(msg);
};

speak('i\'m alive!');

function occurances(n, str) {

  return str.split('').reduce(function(prev, cur){
    // if letter is found increment counter
    if ( cur === n ) prev++;
    return prev;
  },0);

};

// alternative team treehouse 
// https://teamtreehouse.com/community/how-to-count-the-number-of-times-a-specific-character-appears-in-a-string

/*
function occurances(n, str) {
  // split string on n, length - 1 (we want count of splits not parts)
  console.log('parts of string', str.split(n));
  return str.split(n).length - 1;
};
*/


// get element by id
var test = document.getElementById('testcase').textContent;
// get simple element by id
var simple = document.getElementById('simple').textContent;

console.log('before: ', test);
// camelCase content of element
console.log('after: l ', occurances('l',test));

console.log('simple:', simple);

console.log('simple after: e ', occurances('e', simple));

/* !! NOTES !!
  loop over string and keep a running count of letter occurring
  write a reduce function?
  // need to keep a running total

  edge cases: what if an integer is given for n?
 */