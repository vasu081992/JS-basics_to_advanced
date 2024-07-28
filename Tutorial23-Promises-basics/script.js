let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
});

// resolve runs the first function in .then
promise.then(
  result => alert(result), // shows "done!" after 1 second
  error => alert(error) // doesn't run
);


//error/reject example below : 


let promise1 = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// reject runs the second function in .then
promise1.then(
  result => alert(result), // doesn't run
  error => alert(error) // shows "Error: Whoops!" after 1 second
);



// Re-resolve a promise?
// What’s the output of the code below?

let promise3 = new Promise(function(resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000); //this resolve is ignored. only once resolve is ran
});

promise3.then(alert);




// Delay with a promise
// The built-in function setTimeout uses callbacks. Create a promise-based alternative.

// The function delay(ms) should return a promise. That promise should resolve after ms milliseconds, so that we can add .then to it, like this:


function delay(ms) {

  return new Promise((res,rej)=>setTimeout(res,ms))
  }
  
  delay(3000).then(() => alert('runs after 3 seconds'));