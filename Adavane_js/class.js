class User{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    newUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const values=new User("rutuja","rutu@gmail.com",123)
console.log(values.encryptPassword());
console.log(values.newUsername());

// without class
// Constructor function
// function User(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
// }

// // Add method using prototype
// User.prototype.encryptPassword = function() {
//     return `${this.password}abc`;
// };

// // Add another method using prototype
// User.prototype.newUsername = function() {
//     return this.username.toUpperCase();
// };

// // Create object
// const values = new User("rutu","rutuja@gmail.com",567);

// // Access methods
// console.log(values.encryptPassword());
// console.log(values.newUsername());

