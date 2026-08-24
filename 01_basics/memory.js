// Stack (primitive) --> copy of value

let myName = "rutuja";
let myNewName = myName;

myNewName = "ruta";

console.log(myName);
console.log(myNewName);


// Heap (non-primitive) --> reference

let user = {
    email: "user@gmail.com",
    name: "rutuja"
};

let userTwo = user;

userTwo.email = "rutuja@gmail.com";

console.log(user.email);
console.log(userTwo.email);