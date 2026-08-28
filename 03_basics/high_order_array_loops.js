//we ca use this loops without any increments or decremets

// forof loop-->for...of is used to get values from an iterable like an array or string.
// not used for object
const numbers = [10, 20, 30];

for (const value of numbers) {
    console.log(value);
}

const name = "Rutuja";

for (const letter of name) {
    console.log(letter);
}

// for...in is mainly used to get keys/properties of an object.
const user = {
    name: "Rutuja",
    age: 22,
    city: "Pune"
};

for (const key in user) {
    console.log(key);  //to get keys
}

for (const key in user) {
    console.log(user[key]);  //to get key value
}

// maps--> it stores the unique values
// map() is used to change/transform every element of an array and create a new array.
const map=new Map()

map.set('in',"India")
map.set('ch',"china")
map.set('in',"india")  //not stores duplicate values

console.log(map);

// by using forof loop

// for (const key of map) {
//     console.log(key);  
// }    //we want key and value seperate 

for (const [key,value] of map) {
    console.log(key,'=',value);  
}   //print key and value seperate

// for..Each
const arr=["c","cpp","java"]
arr.forEach((item)=>{
    console.log(item);
    
})

// WHEN WE HAVE MULTIPLE OBJECTS IN ARRAY

const myObject=[
    {
        lName:"java",
        fName:"java"
    },
    {
        lName:"javaScript",
        fName:"js"

    },
    {
        lName:"python",
        fName:"py"
    }
]

myObject.forEach((item)=>{
    console.log(item.lName);
    
})






