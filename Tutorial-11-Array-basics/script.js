// Is array copied?
// importance: 3
// What is this code going to show?

let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
alert( fruits.length ); // 4 coz shoppingCart and fruits point to same array in memory


// Let’s try 5 array operations.

// Create an array styles with items “Jazz” and “Blues”.
// Append “Rock-n-Roll” to the end.
// Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
// Strip off the first value of the array and show it.
// Prepend Rap and Reggae to the array


let arr = ["Jazz","Blues"]; 

arr.push("Rock-n-Roll");

let midofArray = Math.floor((arr.length - 1) / 2); // to find mid of odd length of array

console.log(midofArray)

arr[midofArray]="Classics"; // adds and replaces the mid ele of array

console.log(arr)


arr.shift(); // just removes from first element from array

console.log(arr)


arr.unshift("Rap","Reggae"); // adds these new element to begining of array 


console.log(arr)



// Calling in an array context
// importance: 5
// What is the result? Why?


let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // ?




// Sum input numbers
// importance: 4
// Write the function sumInput() that:

// Asks the user for values using prompt and stores the values in the array.
// Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
// Calculates and returns the sum of array items.
// P.S. A zero 0 is a valid number, please don’t stop the input on zero.


function sumInput() {

  let numbers = [];

  while (true) {

    let value = prompt("A number please?", 0);

    // should we cancel?
    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

alert( sumInput() );



// A maximal subarray
// importance: 2
// The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].

// The task is: find the contiguous subarray of arr with the maximal sum of items.

// Write the function getMaxSubSum(arr) that will return that sum.

// For instance:




// brute force 

function getMaxSubSum(arr) {
  let maxSum=0;
  
  for(i=0;i<arr.length;i++){
      console.log(maxSum)
      let sumFixedStart = 0;
  for (let j = i; j < arr.length; j++) {
           sumFixedStart = sumFixedStart + arr[j]
        maxSum = Math.max(maxSum, sumFixedStart);
      }
  }
  return maxSum
  }
  
  
  console.log(getMaxSubSum([-1, 2, 3, -9])) == 5 
  




getMaxSubSum([-1, 2, 3, -9]) == 5 
getMaxSubSum([2, -1, 2, 3, -9]) == 6
getMaxSubSum([-1, 2, 3, -9, 11]) == 11
getMaxSubSum([-2, -1, 1, 2]) == 3
getMaxSubSum([100, -9, 2, -3, 5]) == 100
getMaxSubSum([1, 2, 3]) == 6



//optimised using single loop 


function getMaxSubSum(arr) {
  let maxSum=0;
  let partialSum=0;
  
  for(let item of arr){
  
    partialSum+=item; 
    maxSum=Math.max(partialSum,maxSum)
  }
  return maxSum;

}