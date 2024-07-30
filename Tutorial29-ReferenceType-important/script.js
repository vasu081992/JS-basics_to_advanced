// Reference type explained
// Looking closely, we may notice two operations in obj.method() statement:

// First, the dot '.' retrieves the property obj.method.
// Then parentheses () execute it.
// So, how does the information about this get passed from the first part to the second one?

// If we put these operations on separate lines, then this will be lost for sure:


let user1 = {
  name: "John",
  hi() { alert(this.name); },
  bye() { alert("Bye"); }
};

user1.hi(); // works



let user = {
  name: "John",
  hi() { alert(this.name); }
};

// split getting and calling the method in two lines
let hi = user.hi;
hi(); // Error, because this is undefined


// To make user.hi() calls work, JavaScript uses a trick – the dot '.' returns not a function, but a value of the special Reference Type.

// The Reference Type is a “specification type”. We can’t explicitly use it, but it is used internally by the language.

// The value of Reference Type is a three-value combination (base, name, strict), where:

// base is the object.
// name is the property name.
// strict is true if use strict is in effect.
// The result of a property access user.hi is not a function, but a value of Reference Type. For user.hi in strict mode it is:

// // Reference Type value
// (user, "hi", true)
// When parentheses () are called on the Reference Type, they receive the full information about the object and its method, and can set the right this (user in this case).

// Reference type is a special “intermediary” internal type, with the purpose to pass information from dot . to calling parentheses ().

// Any other operation like assignment hi = user.hi discards the reference type as a whole, takes the value of user.hi (a function) and passes it on. So any further operation “loses” this.

// So, as the result, the value of this is only passed the right way if the function is called directly using a dot obj.method() or square brackets obj['method']() syntax (they do the same here). There are various ways to solve this problem such as func.bind().