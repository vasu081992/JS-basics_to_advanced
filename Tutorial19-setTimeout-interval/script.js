// Output every second
// importance: 5
// Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.

// Make two variants of the solution.

// Using setInterval.
// Using nested setTimeout.



function printNumbers(a,b){

  setTimeout(function abc(){
      
  console.log(a);
  a++
      
      if(a<=b){
          setTimeout(abc,1000)
      }
  },1000)
  
  }
  
  
  // usage:
  printNumbers(5, 10)




//using set interval 




function printNumInterval (a,b){

  let timerid;

  if(a<=b){
  timerid = setInterval(function abc(){
    console.log(a)
    a++;

    if(a>b){
      clearInterval(timerid)
      }
  },1000)
}


}


printNumInterval(5,10)








// function printNumbers(from, to) {
//   let current = from;

//   setTimeout(function go() {
//     console.log(current);
//     if (current < to) {
//       setTimeout(go, 1000);
//     }
//     current++;
//   }, 1000);
// }






// What will setTimeout show?
// importance: 5
// In the code below there’s a setTimeout call scheduled, then a heavy calculation is run, that takes more than 100ms to finish.

// When will the scheduled function run?

// After the loop.
// Before the loop.
// In the beginning of the loop.
// What is alert going to show?

// let i = 0;

// setTimeout(() => alert(i), 100); // ?

// // assume that the time to execute this function is >100ms
// for(let j = 0; j < 100000000; j++) {
//   i++;
// }



let i = 0;

setTimeout(() => alert(i), 50); // ?

// assume that the time to execute this function is >100ms
for(let j = 0; j < 100000000; j++) {
  i++;
}

//so timeout usually runs after all other codes run. so loop runs first and i is incremented till 100000000

// and finally setTimeout prints the value once timer is done. ie after 2 seconds