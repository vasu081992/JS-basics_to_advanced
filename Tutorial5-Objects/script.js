// Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.


let user = {

  name:"John",
  surName:"Smith"


}

user.name="Pete";

delete user.name;


console.log(user)



// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.


function isEmpty(obj){

  for (let key in obj) {
    // if the loop has started, there is a property
    return false;
  }
  return true;
}

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false



// We have an object storing salaries of our team:



let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum=0;

if(salaries){
sum = salaries.John+salaries.Ann+salaries.Pete
}
else{
  sum= 0;
}

console.log("Sum,",sum)


//better way 
sum=0;
for(let prop in salaries){
  sum+=salaries[prop]
}

alert(sum)



// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.


let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};


multiplyNumeric(menu);


function multiplyNumeric(menu){

  for (let prop in menu){
    if(typeof menu[prop]=="number"){
    menu[prop]*=2;
  }
}

}
console.log("Multiplied object",menu)

