//wrong way 


function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // What's the result?




//right way
function makeUser1() {
  return {
    name: "John",
    ref() {
      return this;
    }
  };
}

let user1 = makeUser1();

alert( user1.ref().name ); 

