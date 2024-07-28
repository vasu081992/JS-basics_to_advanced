let user = {
  name: "John Smith",
  age: 35
};


let JSON1 = JSON.stringify(user)

console.log(JSON1)

let regularObj = JSON.parse(JSON1)

console.log(regularObj)