// clear the console
console.clear();

// mic test
function speak(msg) {
  console.log(msg);
}

speak('i\'m alive!');

// attach cameCase method to String prototype
String.prototype.camelCase = function () {
  return this.replace(/\w+/g, function(a){ 
    console.log('match: ', a);
    return a.charAt(0).toUpperCase() + a.slice(1).toLowerCase()
  })
}

// get element by id
var el = document.getElementById('testcase');
// get simple element by id
var simple = document.getElementById('simple').textContent;

console.log('before: ', el.textContent);
// camelCase content of element
console.log('after: ', el.textContent.camelCase());

console.log(simple);

function removeSpace(str) {
  return str.replace(/\s+/g, function(match, offset, original){ 
    return original.substr(0, offset);
  })
}

console.log('slice: ', removeSpace(simple));