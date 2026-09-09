// object literal-->An object literal means directly creating an object using {}.
const car = {
    // properties
    color: "Red",
    brand: "BMW",
    speed: 100,
// methods
    start() {
        console.log("Car started");
    },

    stop() {
        console.log("Car stopped");
    }
};

// constructor-->A constructor is a special method inside a class that runs automatically when you create an object using new.
class Student {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

}
const student1 = new Student("Rutuja", 22);
console.log(student1.name);
console.log(student1.age);

// this-->this refers to the current object being created/used.
// new-->Creates a new object from the class.

// four pillars
// Encapsulation → Keep related data + methods together
// Inheritance   → Reuse from another class
// Polymorphism  → Same method, different behavior
// Abstraction   → Hide unnecessary details