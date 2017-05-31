// clear the console
console.clear();

// mic test
function speak(msg) {
  console.log(msg);
};

speak('i\'m alive!');

var flatMap = function(array, callback) {
  return [].concat.apply([], array.map(callback));
};

function someHelper(orders, ava) {

  for ( var i = 0; i < orders.length; i++ ) {  
    console.log(ava[orders[i][0]]);
    if ( ava[orders[i][0]] > 0 ) {
      ava[orders[i][0]] =  ava[orders[i][0]] - 1;
    } else if ( ava[orders[i][1]] > 0 ) {
      ava[orders[i][0]] =  ava[orders[i][0]] - 1;
    }

  }
  return ava;
}

function codewarsTshirts(n, orders) {

  // if order doesn't have every color 
  // then we can't fulfill any orders
  if ( n % 6 !== 0 ) return false;

  // shirt options avaliable
  var options = ['Red','Black','Blue','Purple','Orange','White'],
  avaStock = {};
  // all orders have equal number of shirts per order
  // n % 6 = 0; then avalible equals n / 6
  // ie 36 size of stock, 6 of each size
  // total of each color
  var avaliable = n / 6;

  // build up hash of shirts per color in stock
  for ( var oi = 0; oi < options.length; oi++ ) {
    // build up hash of shirts per color
    avaStock[options[oi]] = avaliable;
  }

  console.log('avaStock', avaStock);

  var requested = someHelper(orders, avaStock);
  console.log('requested', requested);

/* 
  for ( var ri = 0; ri < requested.length; ri++ ) {
    avaStock[requested[ri]] = avaStock[requested[ri]] - 1;
  }
*/

  // compare requested with available 

  for ( key in requested ) {
    // if we have enough stock return true
    // else return false
    console.log(avaStock[key] > requested[key]);
    if ( ! avaStock[key] > requested[key] ) {
      return true;
    } else {
      return false;
    }
  }

}

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

console.log( 'fulfilled?', codewarsTshirts(6,[["Red","Black"],["Red","Black"]]) );
//console.log( 'complex fulfilled?', codewarsTshirts(18,[["Black","Blue"],["Purple","Blue"],["Blue","White"],["White","Orange"],["White","Blue"],["Purple","White"],["White","Purple"],["White","Red"],["Blue","Purple"],["Orange","White"],["Black","Blue"],["Purple","Red"],["Blue","Red"],["Blue","White"],["Purple","White"],["Purple","Blue"],["Orange","Red"]]))


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