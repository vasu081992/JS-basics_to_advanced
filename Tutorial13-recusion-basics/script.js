// Sum all numbers till the given one
// importance: 5
// Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

// For instance:


function sumTo(n){

if(n===1){
  return 1
}
else{
  return n+sumTo(n-1)
}
}



sumTo(3)  



//for loop


function sumToFor(n){

  let sum=0;

for(i=1;i<=n;i++){
  sum=sum+i;
}
return sum;
}



sumToFor(3)


//arithmetic progression formula 


function sumTo(n) {
  return n * (n + 1) / 2;
}

alert( sumTo(100) );





// Calculate factorial
// importance: 4
// The factorial of a natural number is a number multiplied by "number minus one", then by "number minus two", and so on till 1. The factorial of n is denoted as n!

// We can write a definition of factorial like this:

// n! = n * (n - 1) * (n - 2) * ...*1
// Values of factorials for different n:


function factorial(n){

  if(n===1){
    return 1
  }
  else{
    return n * factorial(n-1)
  }

}

console.log(factorial(5))

//more shorter way 


function factorial1(n){

return (n===1)? 1 : n * factorial1(n-1)

}

console.log(factorial1(5))



// Fibonacci numbers
// importance: 5
// The sequence of Fibonacci numbers has the formula Fn = Fn-1 + Fn-2. In other words, the next number is a sum of the two preceding ones.

// First two numbers are 1, then 2(1+1), then 3(1+2), 5(2+3) and so on: 1, 1, 2, 3, 5, 8, 13, 21....

// Fibonacci numbers are related to the Golden ratio and many natural phenomena around us.

// Write a function fib(n) that returns the n-th Fibonacci number.

// An example of work:

// function fib(n) { /* your code */ }

// alert(fib(3)); // 2
// alert(fib(7)); // 13
// alert(fib(77)); // 5527939700884757
// P.S. The function should be fast. The call to fib(77) should take no more than a fraction of a second.


function fib(n) { 

if(n===1 || n===2){
  return 1
}
else{
  return fib(n-2) + fib(n-1)
}
 }



 alert(fib(3));



//  Output a single-linked list
// importance: 5
// Let’s say we have a single-linked list (as described in the chapter Recursion and stack):

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };
// Write a function printList(list) that outputs list items one-by-one.

// Make two variants of the solution: using a loop and using recursion.

// What’s better: with recursion or without it?


let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {
  alert(list.value); // output the current item

  if (list.next) {
    printList(list.next); // do the same for the rest of the list
  }

}




// Output a single-linked list in the reverse order
// importance: 5
// Output a single-linked list from the previous task Output a single-linked list in the reverse order.

// Make two solutions: using a loop and using a recursion.

// solution


let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printReverseList(list) {

  if (list.next) {
    printReverseList(list.next);
  }

  alert(list.value);
}

printReverseList(list);