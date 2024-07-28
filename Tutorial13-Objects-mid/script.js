// Sum the properties
// importance: 5
// There is a salaries object with arbitrary number of salaries.

// Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.

// If salaries is empty, then the result must be 0.

// For instance:

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// alert( sumSalaries(salaries) ); // 650





let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

// let salaries = {}

function sumSalaries(salaries){

if(!salaries){
    return 0;
}
 let arr = Object.entries(salaries)
 
 let sum = arr.reduce((acc,current)=>acc + current[1],0)
 
 console.log(sum)


}

alert( sumSalaries(salaries) ); // 650

//more effiecent ways 


function sumSalaries(salaries2) {

  let sum = 0;
  for (let salary of Object.values(salaries2)) {
    sum += salary;
  }

  return sum; // 650
}

let salaries2 = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries2) ); // 650



// another way


// reduce loops over array of salaries,
// adding them up
// and returns the result
function sumSalaries(salaries) {
  return Object.values(salaries).reduce((a, b) => a + b, 0) // 650
}



// Count properties
// importance: 5
// Write a function count(obj) that returns the number of properties in the object:

// let user = {
//   name: 'John',
//   age: 30
// };

// alert( count(user) ); // 2
// Try to make the code as short as possible.

// P.S. Ignore symbolic properties, count only “regular” ones.






let user = {
  name: 'John',
  age: 30
};



function count (user) {

 let count = Object.keys(user)

 return count.length;

}

alert( count(user) ); 