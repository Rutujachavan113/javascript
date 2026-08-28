// falsy values-->false,0,-0,BigInt 0n,"",null,Nan,undefined
// truthy values-->"0",'false','" ",[],{},function(){}

const username="abc@gmai.com"  //truthy

if(username){
    console.log("got user");  
}
else{
    console.log("don't get user");  
}

// to check empty object as a truthy value

const emptyObj={}

if(Object.keys(emptyObj).length===0){
    console.log("object is empty");
    
}

// nullish coalescing operator(??): works only on null,undefined

// if database works properly then gives correct values or alse instead of waiting it will give null or undefined

let val1 
val1=null ?? 5
let val2
val2=7??10  //gives 1st value
// let val1 =undefined ?? 5

console.log(val1);
console.log(val2);

// ternary operator-->? :

const price=100;

price<=80?console.log("less than 80"):console.log("greater than 80");



