//object literal

let mykey=Symbol("key1")  // declare the symbol
let user={
    name:"Rutuja",
    age:22,
    email:"rutuja@gmail.com",
    [mykey]:"key2"
}

//access values
console.log(user.name);
console.log(user["name"]); //we can also access like this

user.name="rutuja chavan"  //to change the value
console.log(user.name);
Object.freeze(user)//after this we cannot change the value the value is freeze 
user.name="rutuja Arag"
console.log(user.name);//not change the value here because of freeze()

console.log(user[mykey]);//symbol is accessed this way only otherwise it will treaded as a string
console.log(typeof user[mykey] );

console.log(user);





