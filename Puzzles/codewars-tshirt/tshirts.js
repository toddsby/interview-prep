// clear the console
console.clear();

// mic test
function speak(msg) {
  console.log(msg);
};

speak('i\'m alive!');

function twostacks(orders) {
  var a = [], 
  b = [];
  for( var i = 0; i < orders.length; i++ ) {
    a.push(orders[i][0]);
    b.push(orders[i][1]);
  }
  return {
    left:a.sort(),
    right:b.sort()
  }
}

function someHelper(stock, orders) {
  // base case no orders
  if (orders.length === 0) return parsed;

  var parsed = Object.assign({},stock),
  stacks = twostacks(orders),
  stack = [];

  for (var j = 0; j < stacks.left.length; j++) {

    if ( stacks.left[j] === stacks.right[j] ) {
      stacks.left.splice( j, 1 );
    }

  }

  console.log('reduced stacks',stacks);

  for ( var i = 0; i < stacks.left.length; i++ ) {  
    console.log('loop', i);
    if( parsed[stacks.left[i]] > 0 ) {
      parsed[stacks.left[i]] = parsed[stacks.left[i]] - 1;
      continue;
    } else {
      parsed[stacks.right[i]] = parsed[stacks.right[i]] - 1;
    }
  }
  console.log('helper parsed', parsed);
  return parsed;
}

function codewarsTshirts(n, orders) {

  // if order doesn't have every color 
  // then we can't fulfill any orders
  if ( n % 6 !== 0 ) return false;

  // shirt colors avaliable
  var colors = ['Red','Black','Blue','Purple','Orange','White'],
  stock = {};
  // all orders have equal number of shirts per order
  // n % 6 = 0; then avalible equals n / 6
  // ie 36 size of stock, 6 of each size
  // total of each color
  var s = n / 6;

  // build up hash of shirts per color in stock
  for ( var i = 0; i < colors.length; i++ ) {
    // build up hash of shirts per color
    stock[colors[i]] = s;
  }

  console.log('stock', stock);
  var requested;
  requested = someHelper(stock, orders);
  console.log('requested', requested);

  var result;

  // compare requested with available 
  for ( key in requested ) {
    if ( requested[key] < 0 ) {
      result = false;
      break;
    }
  }
  return (result === undefined) ? true : false;
};

/* 

function codewarsTshirts(n, orders) {
  var shirtColors = ['Red','Black','Blue','Purple','Orange','White'].sort();
  console.log('shirtColors sorted', shirtColors);

  var flatten = flatMap( orders, function(order){
    return order;
  }).reduce( function(cur,color){
    if ( cur.indexOf(color) === -1 ) cur.push(color);
    return cur;
  },[]).sort();
  console.log('flat', flatten);
  return true
}
*/

  /* 
function codewarsTshirts(n,orders) {
  for( var i = 0; i < orders.length; i++ ) {
    var sorted = orders[i].sort();
    var filtered = shirtColors.filter(function(color){
      if ( s === color ) s.shift();
      return s === color;
    });
  }
  return true;
 }
*/

console.log( 'true', codewarsTshirts(6,[["Red","Black"],["Red","Black"]]) );
console.log( 'true', codewarsTshirts(24,[]) );
console.log( 'true', codewarsTshirts(18,[["Black","Blue"],["Purple","Blue"],["Blue","White"],["White","Orange"],["White","Blue"],["Purple","White"],["White","Purple"],["White","Red"],["Blue","Purple"],["Orange","White"],["Black","Blue"],["Purple","Red"],["Blue","Red"],["Blue","White"],["Purple","White"],["Purple","Blue"],["Orange","Red"]]) );
console.log( 'false', codewarsTshirts(6,[["Red","Black"],["Red","Black"],["Red","Black"]]) );
console.log( 'true', codewarsTshirts(6,[["White","Purple"],["Purple","Blue"],["Blue","Orange"],["Orange","Red"],["Red","Black"],["Black","White"]]) )
console.log( 'false', codewarsTshirts(6,[["Black","White"],["Black","Purple"],["Blue","Black"],["Orange","Black"],["Orange","White"],["Purple","Red"],["Orange","Black"]] ) );
// alternative implementation 
// https://www.codewars.com/kata/reviews/5485d20fd8325e250a00013e/groups/54875241ab4964a4c3000d50

/*



 */


/* !!NOTES!!

return false if entire order can't be fulfilled. pairs are preferences.
ie i want either a Red or Black shirt
create array with avaliable shirts, remove as we iterate the preferences.
Q1: example doesn't make sense if orders are two shirts each.
A1: order is a pair of preferences, not two shirts
modulos of 6?
https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/what-is-modular-arithmetic
modulos is the remainder of a division
8 % 4 === 0;
7 % 2 === 1;
-5 % 3 === 1;
Q2: should I sort something first?

I need to flatten the orders array for comparison, flat map


 */