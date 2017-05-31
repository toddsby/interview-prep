// clear the console
console.clear();

// mic test
function speak(msg) {
  console.log(msg);
}

speak('i\'m alive!');

// given this code
// explain what each console log with output
// hint: be careful - think about the context of 'this'

var fullname = 'John Doe';
var obj = {
   fullname: 'Colin Ihrig',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); // Aurelio De Rosa

var test = obj.prop.getFullname; 

console.log(test()); // John Doe

// using .call to change context
console.log( test.call(obj.prop) ); // Aurelio De Rosa

console.log( test.call(obj) ); // Colin Ihrig