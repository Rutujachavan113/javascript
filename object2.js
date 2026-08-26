const user={};//object creation

user.name="rutuja";
user.age=22;
console.log(user);

const user2={                //nested object
    email:"ruja@gmail.com",
    fullname:{        
        userfullname:{
            firstname:"rutuja",
            lastname:"chavan"
        }
    }
}
console.log(user2);
console.log(user2.fullname.userfullname.firstname);

//for mergig the objects
const obj1={1:'a',2:'b'}
const obj2={3:'a',4:'b'}

const obj3=Object.assign({},obj1,obj2)  //for merging the objects
console.log(obj3);

//mostly we use({...}->spread operator)
console.log({...obj1,...obj2});

//for gettingkeys and values sepeartly

console.log(Object.keys(obj1));  //keys
console.log(Object.values(obj1));  //values
console.log(Object.entries(obj1));//key-value pair


// destructuring
let teacher={
    name:"rutu",
    salary:100000,
    course:"java"
}
//destructuring

let {name:myname,salary,course}=teacher  // we can rename also like name:myname


console.log(salary);
console.log(myname);

// json api  //JSON = JavaScript Object Notation.

//it is look like object but object should have name and json is without name and key also have to give in double quotes like string
{
    "name": "rutuja",
    "age": 22
}












