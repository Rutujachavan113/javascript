// call() allows you to call a function and explicitly specify what this should refer to.

function greet() {
    console.log("Hello " + this.name);
}

const user1 = {
    name: "Rutuja"
};

const user2 = {
    name: "Rahul"
};

greet.call(user1);
greet.call(user2);