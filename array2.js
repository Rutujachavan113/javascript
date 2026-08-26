const heros=["varun","sidharth","mahesh"]
const actress=["shradha","alia"]
// heros.push(actress)  //for arrays inside array  //not good practice
// console.log(heros);

// console.log(heros.concat(actress));


console.log(...heros,...actress);//spread oprerator //preads the array elements individually.



//flat()-->removes nested arrays and give singe array
let arr = [1, 2, [3, 4], [5, 6]];

console.log(arr.flat());

// isArray to check whether it is array or not
let arr2=[1,2,3]
console.log(Array.isArray(arr2));//true

let arr3="rutuja"
console.log(Array.isArray(arr3)); //false

//from()->used to convert in array
console.log(Array.from(arr3)); //(6) ['r', 'u', 't', 'u', 'j', 'a']

//Array(5)     → creates an array of length 5
//Array.of(5)  → creates an array containing 5

let x=Array(5)
console.log(x);//[]//array with length 5

let y=Array.of(5)
console.log(y);//[5]

let a=100;
let b=200;
let c=300;
console.log(Array.of(a,b,c));







