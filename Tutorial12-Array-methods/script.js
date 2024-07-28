// Translate border-left-width to borderLeftWidth
// importance: 5
// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

function camelize (str){

  let arr = str.split('-').map(
       (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
  )
  
   console.log("arr",arr)
   
   let strFinal = arr.join('')
   
 console.log("strFinal",strFinal)
 
 
 }



camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';


// did 50% on own and rest from online


// Filter range
// importance: 4
// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

// The function should not modify the array. It should return the new array.

// For instanc

let arr = [5, 3, 8, 1];

function filterRange (arr,a,b){

    return  arr.filter((item=> item>=a && item<b))
}

let filtered = filterRange(arr, 1, 4);



// Filter range "in place"
// importance: 4
// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.


let arr1 = [5, 3, 8, 1];


function filterRangeInPlace(arr1,a,b){


  return arr1.filter((item=> item>=a && item<=b))

}

filterRangeInPlace(arr1, 1, 4);



// Sort in decreasing order


let arr4 = [5, 2, 1, -10, 8];


arr4.sort((a,b)=>  b-a)

console.log(arr4)


// We can use slice() to make a copy and run the sort on it:


function copySorted(arr5) {
  return arr5.slice().sort();
}

let arr5 = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr5);

alert( sorted );
alert( arr5 );




// Map to names
// importance: 5
// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

alert( names );



// Map to objects
// importance: 5
// You have an array of user objects, each one has name, surname and id.

// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.



let john1 = { name: "John", surname: "Smith", id: 1 };
let pete1 = { name: "Pete", surname: "Hunt", id: 2 };
let mary1 = { name: "Mary", surname: "Key", id: 3 };


let usersMapped = [john1,pete1,mary1];


let finalArray  = usersMapped.map(item=>({
  fullName : `${item.name}` + `${item.surname}`,
  id:item.id,
}))

console.log(finalArray);



// Sort users by age
// importance: 5
// Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

// For instance:

let john3 = { name: "John", age: 25 };
let pete3 = { name: "Pete", age: 30 };
let mary3 = { name: "Mary", age: 28 };

let arr7 = [ pete3, john3, mary3 ];


function sortByAge(arr7){
    
    return arr7.sort((a,b) =>  a.age-b.age)
    
    
}
console.log(sortByAge(arr7))



// Get average age
// importance: 4
// Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

// The formula for the average is (age1 + age2 + ... + ageN) / N



let john6 = { name: "John", age: 25 };
let pete6 = { name: "Pete", age: 30 };
let mary6 = { name: "Mary", age: 29 };

let arr9 = [ john6, pete6, mary6 ];



function getAverageAge(arr9){

 let totalAge =  arr9.reduce((acc,current)=> acc+current.age,0)

 return totalAge/arr9.length;

}

alert( getAverageAge(arr9) ); // (25 + 30 + 29) / 3 = 28



// Filter unique array members
// importance: 4
// Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.


let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O


function unique(arr) {
 
  let finalArr = []

  for(let item of arr){
  if(!finalArr.includes(item)){
    finalArr.push(item)
  }
}
return finalArr;
}




// Create keyed object from array
// importance: 4
// Let’s say we received an array of users in the form {id:..., name:..., age:... }.

// Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.



let users11 = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users11);


function groupById(users11){

   return users11.reduce((acc,current)=>{
    acc[current.id]=current
    return acc
   },{} )

}

console.log(usersById)

