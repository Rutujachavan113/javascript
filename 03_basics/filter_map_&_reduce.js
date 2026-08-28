// for..each does not retuen any value

// const coding=["c","cpp","java"]

// const values=coding.forEach((item)=>{
//     console.log(item);//prints values
//     return item;  //does not return any values 
    
// })

// console.log(values);  //output-->
// // c
// // cpp
// // java
// // undefined

// so use filter
// filter() is used to select elements from an array based on a condition.
// filter() → Selects elements
// 
const myNums=[1,2,3,4,5,6,7,8,9,10]

const newNums=myNums.filter((num)=>{
    return num>5
})

console.log(newNums);

// map() → Changes every element
const numbers = [1, 2, 3, 4];

const result = numbers.map(num => num * 2);

console.log(result);

// iteration chaning

const myNumbers=[1,2,3,4,5,6,7,8,9,10]

const newnumbers=myNumbers
                       .map((num)=>{ return num*10})  //[10,20,30,40,50,60,70,80,90,100] 
                       .map((num)=>{return num+1})    //[11,21,31,41,51,61,71,81,91,101]
                       .filter((num)=>{return num>=41})  //[41,51,61,71,81,91,101]

console.log(newnumbers);

// reduce-->reduce() is used to take all elements of an array and reduce them into one final value.
// For example:
// Sum of numbers
// Product of numbers
// Total price
// Counting items

const numbers2 = [1, 2, 3, 4];

const total = numbers2.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(total);



