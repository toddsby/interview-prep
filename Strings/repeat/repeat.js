// clear the console
console.clear();

// mic test
function speak(msg) {
  console.log(msg);
}

speak('i\'m alive!');

// make this work
// 'hello'.repeatify(3)
// testcase should return
// hellohellohello

String.prototype.repeatify = function( i ) {
  console.log('with a loop');
  var str = '';
  for (var x = 0; x < i; x++) {
    str += this;
  } 
  return str;
};

/* Alternative solution shortcircut use existing or this one */

String.prototype.repeatify = String.prototype.repeatify || function( i ) {
  console.log('no loop');
  return this.repeat(i);
};

// get element by id
var el = document.getElementById('testcase').textContent;
// get simple element by id
var simple = document.getElementById('simple').textContent;

console.log('before: ', el);
// repeatify content of element
console.log('after: ', el.repeatify(3));

console.log('simple', simple);
console.log('simple', simple.repeatify(6));