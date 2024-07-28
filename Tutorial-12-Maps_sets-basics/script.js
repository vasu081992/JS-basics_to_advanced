// Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.

// For instance:




//previously we used array.includes and we compared and added new unique values 



function unique(arr) {

  let set1 = new Set (arr)
   
  let arrFinal = Array.from(set1)

  return arrFinal
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare, Krishna, :-O






// Filter anagrams
// importance: 4
// Anagrams are words that have the same number of same letters, but in different order.

// For instance:

// nap - pan
// ear - are - era
// cheaters - hectares - teachers
// Write a function aclean(arr) that returns an array cleaned from anagrams.

// For instance:

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
// From every anagram group should remain only one word, no matter which one.

// using map 



function aclearn(arr2){

  let map = new Map();
 
  for (let word of arr2) {
    // split the word by letters, sort them and join back
    let sorted = word.toLowerCase().split('').sort().join(''); // (*)
    map.set(sorted, word);
  }

return Array.from(map.values())

}

let arr2 = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];



console.log(aclearn(arr2))

alert( aclearn(arr2) ); // "nap,teachers,ear" or "PAN,cheaters,era"




// ----------------------------------------------------------------------------------------------------------
//using object 


function aclearn(arr10){

 let obj = {} 


  for (let word of arr10) {
    
    let sortedWord = word.toLowerCase().split('').sort().join()
    obj[sortedWord] = word;

  }
  return Array.from(Object.values(obj))

}

let arr10 = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];



console.log(aclearn(arr10))

alert( aclearn(arr10) ); // "nap,teachers,ear" or "PAN,cheaters,era"






// Iterable keys
// importance: 5
// We’d like to get an array of map.keys() in a variable and then apply array-specific methods to it, e.g. .push.

// But that doesn’t work:

// let map = new Map();

// map.set("name", "John");

// let keys = map.keys();

// // Error: keys.push is not a function
// keys.push("more");
// Why? How can we fix the code to make keys.push work?



// Store read dates
// importance: 5
// There’s an array of messages as in the previous task. The situation is similar.

// let messages = [
//   {text: "Hello", from: "John"},
//   {text: "How goes?", from: "John"},
//   {text: "See you soon", from: "Alice"}
// ];
// The question now is: which data structure you’d suggest to store the information: “when the message was read?”.

// In the previous task we only needed to store the “yes/no” fact. Now we need to store the date, and it should only remain in memory until the message is garbage collected.

// P.S. Dates can be stored as objects of built-in Date class, that we’ll cover later.


//weakmap 



let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let readMap = new WeakMap();

readMap.set(messages[0], new Date(2017, 1, 1));
// Date object we'll study later