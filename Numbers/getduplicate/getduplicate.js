// clear the console
console.clear();

// mic test
function speak(msg) {
  console.log(msg);
};

speak('i\'m alive!');

function getDuplicate(items) {
  console.log('og', items.split(' '));
  return items.split(' ').reduce(function(acc, el, i, arr) {
    if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) acc.push(el); 
    return acc;
  }, []);
};

// alternative stack overflow 
// https://stackoverflow.com/a/24968449/3150543

/*

const names = ['Mike', 'Matt', 'Nancy', 'Adam', 'Jenny', 'Nancy', 'Carl']

const count = names => 
  names.reduce((a, b) => 
    Object.assign(a, {[b]: (a[b] || 0) + 1}), {})

const duplicates = dict => 
  Object.keys(dict).filter((a) => dict[a] > 1)

*/


// get element by id
var test = document.getElementById('testcase').textContent;
// get simple element by id
var simple = document.getElementById('simple').textContent;
// get extreme element by id
var extreme = document.getElementById('extreme').textContent; 

console.log('before: ', test);
// camelCase content of element
console.log('after:', getDuplicate(test));

console.log('simple:', simple);

console.log('simple after:', getDuplicate(simple));

console.log('extreme:', extreme);

console.log('extreme after:', getDuplicate(extreme));

/* !! NOTES !!
  q1: returning true, found a duplicate?
  q2: return integer?
  store last item and compare against current item, if current item is equal to last item equal increment counter?
  last item isn't checking for occurances in 

 */