let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig'
];

// map every url to the promise of the fetch
let requests = urls.map(url => fetch(url));

// console.log("REQUESTS",requests)//array of promises returned from fetch

// Promise.all waits until all jobs are resolved
Promise.all(requests)
  .then(responses => responses.forEach(
    response => console.log(`${response.url}: ${response.status}`)
  ));


  //example2


  let names = ['iliakan', 'remy', 'jeresig'];

let requests1 = names.map(name => fetch(`https://api.github.com/users/${name}`));


console.log(requests1)

Promise.all(requests1)
.then(responses=>{
  for(let response of responses){
    alert(`${response.url}: ${response.status}`); // shows 200 for every url
  }
  return responses
}
)

.then(responses => Promise.all(responses.map(r => r.json()))) //here promise is used again since conversion to json takes time and async operation 

console.log(response)

.then(users => users.forEach(user => alert(user.name)));



//Promise.allSettled


let urls1 = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://no-such-url'
];

Promise.allSettled(urls1.map(url => fetch(url)))
  .then(results => { // (*)
    results.forEach((result, num) => {
      if (result.status == "fulfilled") {
        alert(`${urls[num]}: ${result.value.status}`);
      }
      if (result.status == "rejected") {
        alert(`${urls[num]}: ${result.reason}`);
      }
    });
  });


//   Polyfill
// If the browser doesn’t support Promise.allSettled, it’s easy to polyfill:


if (!Promise.allSettled) {
  const rejectHandler = reason => ({ status: 'rejected', reason });

  const resolveHandler = value => ({ status: 'fulfilled', value });

  Promise.allSettled = function (promises) {
    const convertedPromises = promises.map(p => Promise.resolve(p).then(resolveHandler, rejectHandler));
    return Promise.all(convertedPromises);
  };
}


// Promise.race
// Similar to Promise.all, but waits only for the first settled promise and gets its result (or error).

// The syntax is:


Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(alert); // 1


// Promise.any
// Similar to Promise.race, but waits only for the first fulfilled promise and gets its result. If all of the given promises are rejected, then the returned promise is rejected with AggregateError – a special error object that stores all promise errors in its errors property.

// The syntax is:


Promise.any([
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 1000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(alert); // 1

// The first promise here was fastest, but it was rejected, so the second promise became the result. After the first fulfilled promise “wins the race”, all further results are ignored.

// Here’s an example when all promises fail:


