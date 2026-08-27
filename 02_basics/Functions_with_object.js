//Rest operator(...)-->The rest operator is also written as ..., but its purpose is to collect multiple values into one array or object.


// when we do not know how many values we have to pass i davance that time we use rest opetator
function calculate(...nums){
    return nums
}
console.log(calculate(10,20,30,40));  // [10,20,30,40]

// Rest = collect the remaining values
function calculate2(val1,val2,...nums){
    return nums
}
console.log(calculate2(10,20,30,40));  //val1=10,val2=20,nums[30,40]-->it takes remaining values

// pass the arguments to function as an argument

const user={
    name:"rutuja",
    age:22
}

function handleObject(userDetails){    //we can use same name as a object because bith are same 

    return `user name is ${userDetails.name} and age is ${userDetails.age}`
}

console.log(handleObject(user));

//we can directly decare as a argument of function also insted of creating separate object

function handleObject2(userDetails){    //we can use same name as a object because bith are same 

    return `user name is ${userDetails.name} and age is ${userDetails.age}`
}

console.log(handleObject2({
    name:"sam",
    age:23
}));


// pass the array
const myArray=[100,200,300,400]

function returnValue(getArray){
    return getArray[1]
}
console.log(returnValue(myArray));  //200

// we can directly pass the array also instead of creating separate array
function returnValue2(getArray){
    return getArray[1]
}
console.log(returnValue2([40,50,60])); //50





