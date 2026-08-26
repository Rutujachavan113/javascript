const myArray=[1,3,2,4];
const myArr2=new Array(1,2,3,4);
console.log(myArr2)
console.log(myArr2[1])

// Array methods
myArr2.push(5)
myArr2.push(6)
console.log(myArr2);
myArr2.pop(6)
console.log(myArr2);

myArr2.unshift(0)  //add at the beginning
console.log(myArr2);

myArr2.shift()  //remove at the beginning
console.log(myArr2);

//slice()-->exact the part of the array without any change in original array
const myArr3=myArr2.slice(1,4)
console.log(myArr3);

//splice-->to remove/add/replace,change original array
const myArr4=myArr2.splice(1,3)
console.log(myArr4);//print the removed part
console.log(myArr2);//remove that deleted element from original array

const newArr=new Array(5,6,7,8)
console.log(newArr.indexOf(5));
console.log(newArr.includes(6));

const newArr2=newArr.join()//to convert array to string
console.log(newArr2);


 












