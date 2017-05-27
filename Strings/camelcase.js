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
    return a.charAt(0).toUpperCase() + a.slice(1).toLowerCase()
  })
}

// get element by id
var el = document.getElementById('testcase');

// camelCase content of element
console.log(el.textContent.camelCase());