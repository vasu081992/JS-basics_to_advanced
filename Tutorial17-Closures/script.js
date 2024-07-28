function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1

alert( counter2() ); // ?
alert( counter2() ); // ?

//the ans is again 0 and 1 

// //coz Functions counter and counter2 are created by different invocations of makeCounter.

// So they have independent outer Lexical Environments, each one has its own count.



// Sum with closures
// importance: 4
// Write function sum that works like this: sum(a)(b) = a+b.

// Yes, exactly this way, using double parentheses (not a mistype).

// For instance:

// sum(1)(2) = 3
// sum(5)(-1) = 4


function sum(a) {

  return function(b) {
    return a + b; // takes "a" from the outer lexical environment
  };

}

alert( sum(1)(2) ); // 3
alert( sum(5)(-1) ); // 4




// Filter through function
// importance: 5
// We have a built-in method arr.filter(f) for arrays. It filters all elements through the function f. If it returns true, then that element is returned in the resulting array.

// Make a set of “ready to use” filters:

// inBetween(a, b) – between a and b or equal to them (inclusively).
// inArray([...]) – in the given array.
// The usage must be like this:

// arr.filter(inBetween(3,6)) – selects only values between 3 and 6.
// arr.filter(inArray([1,2,3])) – selects only elements matching with one of the members of [1,2,3].
// For instance:

// /* .. your code for inBetween and inArray */
// let arr = [1, 2, 3, 4, 5, 6, 7];

// alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

// alert( arr.filter(inArray([1, 2, 10])) ); // 1,2



let arr = [1, 2, 3, 4, 5, 6, 7];



function inBetween(a,b){
 
  return function (x){
    return x>=a && x<=b
  }

}


alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6




function inArray(arr) {
  return function(x) {
    return arr.includes(x);
  };
}

let arr2 = [1, 2, 3, 4, 5, 6, 7];
alert( arr2.filter(inArray([1, 2, 10])) ); // 1,2