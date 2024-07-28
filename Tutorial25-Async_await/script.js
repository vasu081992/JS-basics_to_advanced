// Rewrite using async/await
// Rewrite this example code from the chapter Promises chaining using async/await instead of .then/catch:


function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    });
}

loadJson('https://javascript.info/no-such-user.json')
  .catch(alert); // Error: 40

  //solution in async await below 



  async function loadJsonAsync(url){

    try{
    let response = await fetch(url);

    if(response.status===200){
      let json = await fetchUrl.json(); 
      return json;
    }
  }
  catch(error){
    console.error('Failed to load JSON:', error);
    throw error;
  }
}

  loadJsonAsync('https://javascript.info/no-such-user.json')




//   Call async from non-async
// We have a “regular” function called f. How can you call the async function wait() and use its result inside of f?

// async function wait() {
//   await new Promise(resolve => setTimeout(resolve, 1000));

//   return 10;
// }

// function f() {
//   // ...what should you write here?
//   // we need to call async wait() and wait to get 10
//   // remember, we can't use "await"
// }



async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}


function f() {

  wait().then(result=>console.log(result))


}

f()