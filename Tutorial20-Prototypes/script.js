let animal = {
  jumps: null
};
let rabbit = {
  __proto__: animal,
  jumps: true
};

alert( rabbit.jumps ); // will be true --> takes from own first

delete rabbit.jumps;

alert( rabbit.jumps );  // now it will be null since its deleted before

delete animal.jumps;

alert( rabbit.jumps ); // undefined since there is no jumps anywhere



// Searching algorithm
// importance: 5
// The task has two parts.

// Given the following objects:

// let head = {
//   glasses: 1
// };

// let table = {
//   pen: 3
// };

// let bed = {
//   sheet: 1,
//   pillow: 2
// };

// let pockets = {
//   money: 2000
// };
// Use __proto__ to assign prototypes in a way that any property lookup will follow the path: pockets → bed → table → head. For instance, pockets.pen should be 3 (found in table), and bed.glasses should be 1 (found in head).
// Answer the question: is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed.



let head = {
  glasses: 1,
};

let table = {
  pen: 3,
  __proto__:head

};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__:table

};

let pockets = {
  money: 2000,
  __proto__:bed
};

alert(pockets.pen)
alert(bed.glasses)


// Answer the question: is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed.


// ans : 

// In modern engines, performance-wise, there’s no difference whether we take a property from an object or its prototype. They remember where the property was found and reuse it in the next request.

// For instance, for pockets.glasses they remember where they found glasses (in head), and next time will search right there. They are also smart enough to update internal caches if something changes, so that optimization is safe.



// Where does it write?
// importance: 5
// We have rabbit inheriting from animal.

// If we call rabbit.eat(), which object receives the full property: animal or rabbit?


let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat();

console.log(rabbit.full)
console.log(animal.full)


//ans is rabbit 

// The answer: rabbit.

// That’s because this is an object before the dot, so rabbit.eat() modifies rabbit.

// Property lookup and execution are two different things.

// The method rabbit.eat is first found in the prototype, then executed with this=rabbit.





// Why are both hamsters full?
// importance: 5
// We have two hamsters: speedy and lazy inheriting from the general hamster object.

// When we feed one of them, the other one is also full. Why? How can we fix it?

// let hamster = {
//   stomach: [],

//   eat(food) {
//     this.stomach.push(food);
//   }
// };

// let speedy = {
//   __proto__: hamster
// };

// let lazy = {
//   __proto__: hamster
// };

// // This one found the food
// speedy.eat("apple");
// alert( speedy.stomach ); // apple

// // This one also has it, why? fix please.
// alert( lazy.stomach ); // apple



let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// This one found the food
speedy.eat("apple");
alert( speedy.stomach ); // apple

// This one also has it, why? fix please.
alert( lazy.stomach ); // apple

//solution is below 



let hamster1 = {
  stomach: [],

  eat(food) {
    // assign to this.stomach instead of this.stomach.push
    this.stomach = [food];
  }
};

let speedy1 = {
   __proto__: hamster
};

let lazy1 = {
  __proto__: hamster
};

// Speedy one found the food
speedy1.eat("apple");
alert( speedy1.stomach ); // apple

// Lazy one's stomach is empty
alert( lazy1.stomach ); // <nothing>

//reason is this inside eat method, will point to speedy1 and only speedy1
// so it goes to speedy1 and not for lazy1