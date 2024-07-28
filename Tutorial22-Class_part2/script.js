// Error creating an instance
// importance: 5
// Here’s the code with Rabbit extending Animal.

// Unfortunately, Rabbit objects can’t be created. What’s wrong? Fix it.

// class Animal {

//   constructor(name) {
//     this.name = name;
//   }

// }

// class Rabbit extends Animal {
//   constructor(name) {
//     this.name = name;
//     this.created = Date.now();
//   }
// }

// let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
// alert(rabbit.name);



//solution 


class Animal {

  constructor(name) {
    this.name = name;
  }

}

class Rabbit extends Animal {
  constructor(name) {
    super(name)
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
alert(rabbit.name);




// Create a new class ExtendedClock that inherits from Clock and adds the parameter precision – the number of ms between “ticks”. Should be 1000 (1 second) by default.

// Your code should be in the file extended-clock.js
// Don’t modify the original clock.js. Extend it.

  class Clock {
    constructor({ template }) {
      this.template = template;
    }

    render() {
      let date = new Date();

      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;

      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;

      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;

      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);

      console.log(output);
    }

    stop() {
      clearInterval(this.timer);
    }

    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    }
  }

  class ExtendedClock  extends Clock {
    constructor(options){
      super(options)
      let { precision = 1000 } = options;
      this.precision = precision;
  }


  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }

  }

  let lowResolutionClock = new ExtendedClock({
    template: 'h:m:s',
    precision: 10000
  });

  lowResolutionClock.start()


  //static method example - belongs only to class and not to object created from it


  class Article {
    constructor(title, date) {
      this.title = title;
      this.date = date;
    }
  
    static compare(articleA, articleB) {
      return articleA.date - articleB.date;
    }
  }
  
  // usage
  let articles = [
    new Article("HTML", new Date(2019, 1, 1)),
    new Article("CSS", new Date(2019, 0, 1)),
    new Article("JavaScript", new Date(2019, 11, 1))
  ];
  
  articles.sort(Article.compare);
  
  alert( articles[0].title ); // CSS


  //below is code of inheritance of static method and prop 


  class Animal {
    static planet = "Earth";
  
    constructor(name, speed) {
      this.speed = speed;
      this.name = name;
    }
  
    run(speed = 0) {
      this.speed += speed;
      alert(`${this.name} runs with speed ${this.speed}.`);
    }
  
    static compare(animalA, animalB) {
      return animalA.speed - animalB.speed;
    }
  
  }
  
  // Inherit from Animal
  class Rabbit extends Animal {
    hide() {
      alert(`${this.name} hides!`);
    }
  }
  
  let rabbits = [
    new Rabbit("White Rabbit", 10),
    new Rabbit("Black Rabbit", 5)
  ];
  
  rabbits.sort(Rabbit.compare);
  
  rabbits[0].run(); // Black Rabbit runs with speed 5.
  
  alert(Rabbit.planet); // Earth


  //private variables in class, code below 



  class CoffeeMachine {
    #waterLimit = 200;
  
    #fixWaterAmount(value) {
      if (value < 0) return 0;
      if (value > this.#waterLimit) return this.#waterLimit;
    }
  
    setWaterAmount(value) {
      this.#waterLimit = this.#fixWaterAmount(value);
    }
  
  }
  
  let coffeeMachine = new CoffeeMachine();
  
  // can't access privates from outside of the class
  coffeeMachine.#fixWaterAmount(123); // Error
  coffeeMachine.#waterLimit = 1000; // Error

  coffeeMachine.setWaterAmount(100)


  //another example 


  class CoffeeMachine {
    #waterLimit = 200;
     #waterAmount = 0; // To store the actual water amount

  
    #fixWaterAmount(value) {
      if (value < 0) return 0;
      if (value > this.#waterLimit) return this.#waterLimit;
      return value;
    }
  
  setWaterAmount(value) {
    this.#waterAmount = this.#fixWaterAmount(value);
  }

  getWaterAmount() {
    return this.#waterAmount;
  }
  }
  
  let coffeeMachine1 = new CoffeeMachine();
  

  coffeeMachine1.setWaterAmount(100)
console.log(coffeeMachine1.getWaterAmount()); // 100



