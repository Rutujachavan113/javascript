// call() → runs the function immediately
// bind() → creates a new function to run later 
const user = {
    name: "Rutuja"
};

function greet() {
    console.log(this.name);
}

const newGreet = greet.bind(user);

newGreet();


// apply()-->apply() calls a function and lets you set this, but arguments are passed as an array.

const user2 = {
    name: "Rutuja"
};

function greet(age, city) {
    console.log(this.name);
    console.log(age);
    console.log(city);
}

greet.apply(user, [22, "Pune"]);