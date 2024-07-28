
// Rewrite to class
// importance: 5
// The Clock class (see the sandbox) is written in functional style. Rewrite it in the “class” syntax.

// P.S. The clock ticks in the console, open it to see.



function Clock({ template }) {
  
  let timer;

  function render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  this.stop = function() {
    setTimeout(()=>{
        clearInterval(timer)
        },6000);
  };

  this.start = function() {
    render();
    timer = setInterval(render, 1000);
  };

}

let clock = new Clock({template: 'h:m:s'});
clock.start();

clock.stop()


//solution code 

class Clock1{

  constructor({ template }) {
    this.template = template;
  }

render(){
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

stop(){
  setTimeout(()=>{
    clearInterval(this.timer)
    },6000);
};


start(){
  this.render();
  this.timer = setInterval(()=>this.render(), 1000);
}

}
let clock1 = new Clock1({template: 'h:m:s'});

clock1.start()
clock1.stop()



//super keyword while inheriting class 

class Animal {

  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed = speed;
    alert(`${this.name} runs with speed ${this.speed}.`);
  }

  stop() {
    this.speed = 0;
    alert(`${this.name} stands still.`);
  }

}

class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }

  stop() {
    super.stop(); // call parent stop
    this.hide(); // and then hide
  }
}

let rabbit = new Rabbit("White Rabbit");

rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.stop(); // White Rabbit stands still. White Rabbit hides!



// below code is example of class with a constructor in child class where super () is mandatory always




class Animal {

  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  // ...
}

class Rabbit extends Animal {

  constructor(name, earLength) {
    super(name);
    this.earLength = earLength;
  }

  // ...
}

// now fine
let rabbit1= new Rabbit("White Rabbit", 10);
alert(rabbit1.name); // White Rabbit
alert(rabbit1.earLength); // 10