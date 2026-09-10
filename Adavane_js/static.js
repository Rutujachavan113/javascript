// static belongs to the class itself, not to the objects created from the class.

class User {

    constructor(name) {
        this.name = name;
    }

    static companyName() {
        console.log("ABC Technologies");
    }
}
// using classname
User.companyName();

// cannot call using object reference
const user1 = new User("Rutuja");

// user1.companyName(); // ❌

