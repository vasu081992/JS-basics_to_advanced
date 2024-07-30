

// Default value with “get” trap
// The most common traps are for reading/writing properties.

// To intercept reading, the handler should have a method get(target, property, receiver).

// It triggers when a property is read, with following arguments:

// target – is the target object, the one passed as the first argument to new Proxy,
// property – property name,
// receiver – if the target property is a getter, then receiver is the object that’s going to be used as this in its call. Usually that’s the proxy object itself (or an object that inherits from it, if we inherit from proxy). Right now we don’t need this argument, so it will be explained in more detail later.
// Let’s use get to implement default values for an object.

// We’ll make a numeric array that returns 0 for nonexistent values.

// Usually when one tries to get a non-existing array item, they get undefined, but we’ll wrap a regular array into the proxy that traps reading and returns 0 if there’s no such property:





let numbers = [0, 1, 2];

numbers = new Proxy(numbers, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      return 0; // default value
    }
  }
});

alert( numbers[1] ); // 1
alert( numbers[123] ); // 0 (no such item)


//example 2 with objects 


let dictionary = {
  'Hello': 'Hola',
  'Bye': 'Adiós'
};

dictionary = new Proxy(dictionary, {
  get(target, phrase) { // intercept reading a property from dictionary
    if (phrase in target) { // if we have it in the dictionary
      return target[phrase]; // return the translation
    } else {
      // otherwise, return the non-translated phrase
      return phrase;
    }
  }
});

// Look up arbitrary phrases in the dictionary!
// At worst, they're not translated.
alert( dictionary['Hello'] ); // Hola
alert( dictionary['Welcome to Proxy']); // Welcome to Proxy (no translation)



// Validation with “set” trap
// Let’s say we want an array exclusively for numbers. If a value of another type is added, there should be an error.

// The set trap triggers when a property is written.

// set(target, property, value, receiver):

// target – is the target object, the one passed as the first argument to new Proxy,
// property – property name,
// value – property value,
// receiver – similar to get trap, matters only for setter properties.
// The set trap should return true if setting is successful, and false otherwise (triggers TypeError).

// Let’s use it to validate new values:



let numbers1 = [];

numbers1 = new Proxy(numbers1, { // (*)
  set(target, prop, val) { // to intercept property writing
    if (typeof val == 'number') {
      target[prop] = val;
      return true;
    } else {
      return false;
    }
  }
});

numbers1.push(1); // added successfully
numbers1.push(2); // added successfully
alert("Length is: " + numbers1.length); // 2

numbers1.push("test"); // TypeError ('set' on proxy returned false)

alert("This line is never reached (error in the line above)");



//ownKeys



let user = {
  name: "John",
  age: 30,
  _password: "***"
};

user = new Proxy(user, {
  ownKeys(target) {
    return Object.keys(target).filter(key => !key.startsWith('_'));
  }
});

// "ownKeys" filters out _password
for(let key in user) alert(key); // name, then: age

// same effect on these methods:
alert( Object.keys(user) ); // name,age
alert( Object.values(user) ); // John,30



let user1 = {
  name: "John",
  _password: "***"
};

user1 = new Proxy(user1, {
  get(target, prop) {
    if (prop.startsWith('_')) {
      throw new Error("Access denied");
    }
    let value = target[prop];
    return (typeof value === 'function') ? value.bind(target) : value; // (*)
  },
  set(target, prop, val) { // to intercept property writing
    if (prop.startsWith('_')) {
      throw new Error("Access denied");
    } else {
      target[prop] = val;
      return true;
    }
  },
  deleteProperty(target, prop) { // to intercept property deletion
    if (prop.startsWith('_')) {
      throw new Error("Access denied");
    } else {
      delete target[prop];
      return true;
    }
  },
  ownKeys(target) { // to intercept property list
    return Object.keys(target).filter(key => !key.startsWith('_'));
  }
});

// "get" doesn't allow to read _password
try {
  alert(user1._password); // Error: Access denied
} catch(e) { alert(e.message); }

// "set" doesn't allow to write _password
try {
  user1._password = "test"; // Error: Access denied
} catch(e) { alert(e.message); }

// "deleteProperty" doesn't allow to delete _password
try {
  delete user1._password; // Error: Access denied
} catch(e) { alert(e.message); }

// "ownKeys" filters out _password
for(let key in user1) alert(key); // name





//tasks 

// Error on reading non-existent property
// Usually, an attempt to read a non-existent property returns undefined.

// Create a proxy that throws an error for an attempt to read of a non-existent property instead.

// That can help to detect programming mistakes early.

// Write a function wrap(target) that takes an object target and return a proxy that adds this functionality aspect.

// That’s how it should work



let user2 = {
  name: "John"
};

function wrap(target) {
  return new Proxy(target, {
      /* your code */
  });
}

user2 = wrap(user2);

alert(user2.name); // John
alert(user2.age); 


//soltion below : 

let user2 = {
  name: "John"
};

function wrap(target) {
  return new Proxy(target, {
     get(target,prop){
         if(prop in target){
             return target[prop]
         }
         else{
             return (`Prop ${prop}  is missing! Try something else`)
         }
     }
  });
}

user2 = wrap(user2);

alert(user2.name); // John
alert(user2.age); 




// Accessing array[-1]
// In some programming languages, we can access array elements using negative indexes, counted from the end.

// Like this:

// let array = [1, 2, 3];

// array[-1]; // 3, the last element
// array[-2]; // 2, one step from the end
// array[-3]; // 1, two steps from the end
// In other words, array[-N] is the same as array[array.length - N].

// Create a proxy to implement that behavior.

// That’s how it should work:

// let array = [1, 2, 3];

// array[-1]; // 3, the last element
// array[-2]; // 2, one step from the end
// array[-3]; // 1, two steps from the end


//solution below:

let array = [1,2,3,4,6,9,10];

array = new Proxy(array, {
 
  get(target,prop){
    if(prop<0){
     return target[prop]=target[target.length-(-prop)]
    }
    else{
      return target[prop]
    }
  }
});

alert( array[-1] ); 
alert( array[-6] ); 