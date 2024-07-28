// Is it possible to create functions A and B so that new A() == new B()?

let obj = {};


function A() { 
  // this.name = "Vasu"
  return obj;
 }
function B() { 
  // this.name = "Vasu"
  return obj;
 }

 // here both functions return obj object and hence a and b points to obj object and hence both are same and true

let a = new A();
let b = new B();

console.log(a)

console.log(b)


console.log(a==b)



// Create a constructor function Calculator that creates objects with 3 methods:


// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of these properties.
// mul() returns the multiplication product of these properties.


function Calculator(){

this.read = function (){
  this.a = +prompt("Enter the value for 'a':",0);
  this.b = +prompt("Enter the value for 'b':",0);
}

this.sum = function(){
  return this.a + this.b;
}

this.mul = function(){
  return this.a * this.b;
}

};


// did above on my own.in first attempt in few mins.cheers ! 




let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );




// Create new Accumulator
// importance: 5
// Create a constructor function Accumulator(startingValue).

// Object that it creates should:

// Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
// The read() method should use prompt to read a new number and add it to value.
// In other words, the value property is the sum of all user-entered values with the initial value startingValue.

// Here’s the demo of the code:


function Accumulator(startingValue){

  this.currentValue = startingValue;
  
  this.read = function (){
    this.a = +prompt("Enter the value for 'a':",10);
    this.currentValue = this.currentValue+this.a;
    return this;
  }
  }
  
  let acc1= new Accumulator(1)

acc1.read()
acc1.read()


alert(acc1.currentValue)