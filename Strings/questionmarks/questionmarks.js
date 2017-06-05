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
  prevNum = 0,
  pattern = false;

  for( var i = 0; i < arr.length; i++ ) {
    if ( !isNaN(arr[i])) {
      console.log('test', prevNum + Number(arr[i]));
      if ( prevNum + Number(arr[i]) === 10 ) {
        if ( qi !== 3 ) {
          return false;
        }
        pattern = true; 
      }
      prevNum = Number(arr[i]);
      qi = 0;
    } else if ( arr[i] === '?') {
      qi++;
    }
  }
  return pattern;
}

console.log('1stcase true', questionsMarks('acc?7??sss?3rr1??????5'));
console.log('2ndcase false', questionsMarks('aa6?9'));
console.log('3rdcase false', questionsMarks('acc?7?sss?3rr1??5'));
console.log('4thcase true', questionsMarks('acc?6?sss?33r?r??7'));
console.log('5thcase true', questionsMarks('arrb6???4xxbl5???eee5'));


/*

function questionMarks(str) {
  qnum = 0,
  dig = 0,
  has_10 = false;

  str.split('').forEach(function(n){
  
  })

}

def QuestionsMarks(s):
  qnum = 0
  dig = 0
  has_10 = False
  for ch in s:
    if ch.isdigit():
      if int(ch) + dig == 10:
        if qnum != 3:
          return 'false'
        has_10 = True
      dig = int(ch)
      qnum = 0
    elif ch == '?':
      qnum += 1
  return 'true' if has_10 else 'false'


 */