// clear the console
console.clear();

// mic test
function speak(msg) {
  console.log(msg);
}

speak('i\'m alive!');

/*

Using the JavaScript language, have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers, letters, and question marks, and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. If so, then your program should return the string true, otherwise it should return the string false. If there aren't any two numbers that add up to 10 in the string, then your program should return false as well. 

For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string. 

 */

function questionsMarks(str) { 
  var arr = str.split(''),
  qi = 0,
  firstNumber;

  for( var i = 0; i < arr.length; i++ ) {
    // base case true
    if ( !isNaN(arr[i]) || arr[i] === '?') {
      console.log('yup');
      if( arr[i] === '?') {
        if ( qi >= 3 ) {  // optimizaton finish before the loop has iterated over entire array because we now it's true
          break; 
        }
        qi++;
      }
    } else {
      // reset question mark counter if not a number 
      qi = 0;
    }
  }

  if (qi >= 3) {
    return true;
  } else {
    return false;
  }
};

console.log('1stcase true', questionsMarks('acc?7??sss?3rr1??????5'));
console.log('2ndcase false', questionsMarks('aa6?9'));
console.log('3rdcase false', questionsMarks('acc?7?sss?3rr1??5'));
