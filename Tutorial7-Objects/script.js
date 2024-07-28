// Create a calculator
// importance: 5
// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.

  
let nums={}

let calculator = {

        read : function(){
           this.a = +prompt("Enter the value for 'a':",0);
           this.b = +prompt("Enter the value for 'b':",0);
          },
        sum : function(){ return this.a+this.b},

        mul: function(){
          return ( (this.a)*(this.b));
        },

};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );



// There’s a ladder object that allows you to go up and down:



let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // shows the current step
    alert( this.step );
  }
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0


// Modify the code of up, down, and showStep to make the calls chainable, like this:

let ladder1 = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert( this.step );
    return this;
  }
};


ladder1.up().up().down().showStep().down().showStep(); // shows 1 then 0
