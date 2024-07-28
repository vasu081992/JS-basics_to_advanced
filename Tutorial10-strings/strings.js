// Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:


function ucFirst(name){
    
  return name[0].toUpperCase() + name.slice(1,4)
  
  
}

console.log(ucFirst("john") == "John");



// Check for spam
// importance: 5
// Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.

// The function must be case-insensitive:


function checkSpam(str){

  let inputString = str.toUpperCase()

  let strCheck = inputString.indexOf('VIAGRA')
  let strCheck2 = inputString.indexOf('XXXXX')
  

  if(strCheck || strCheck2){
    return true;
  }
  return false;

}

//OPTIMISED 

function checkSpam(str) {
  let lowerStr = str.toLowerCase(); // lower or upper case anything cab be used

  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}



console.log(checkSpam('buy ViAgRA now') == true)
console.log(checkSpam('free xxxxx') == true)
console.log(checkSpam("innocent rabbit") == false)


//solved above on own without online hints 






// Truncate the text
// importance: 5
// Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.

// The result of the function should be the truncated (if needed) string.

// For instance:

// truncate("What I'd like to tell on this topic is:", 20) == "What I'd like to te…"

// truncate("Hi everyone!", 20) == "Hi everyone!"



function truncate(str){

  let length = str.length;
 
  if(length>20){

  str= str.substr(0,19) + "…"
  
   console.log(str)
   
  return str

  }
  return str;
}

//alternate 


function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}



truncate("What I'd like to tell on this topic is:", 20) == "What I'd like to te…"

truncate("Hi everyone!", 20) == "Hi everyone!"




// Extract the money
// importance: 4
// We have a cost in the form "$120". That is: the dollar sign goes first, and then the number.

// Create a function extractCurrencyValue(str) that would extract the numeric value from such string and return it.


function extractCurrencyValue(str){
 
  let length = str.length;
   str = str.slice(1,length); // or str = +str.slice(1) //+ unary converts string to number

  return Number(str);

}








alert( extractCurrencyValue('$120') === 120 ); // true
