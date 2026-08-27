function sayName(){
console.log("R");
console.log("u");
console.log("t");
console.log("u");

}

sayName()

// function addTwoNum(num1,num2){  //parameters
//     console.log(num1+num2);
// }

// addTwoNum(3,4)  //-->ans7  //arguments

function addTwoNum2(num1,num2){  //parameters
    console.log(num1+num2);
}

const result=addTwoNum2(3,4) 
console.log("result:"+result);//result value is undefined because it does not resurn any value


//return the value
function addTwoNum4(num1,num2){  //parameters
return num1+num2
}

const result2 =addTwoNum4(3,4) 
console.log(result2);//-->now it will give correct output

// types to declare functions

// function loginUserMsg(user){
//     return `${user} just loged in`
// }
// console.log( loginUserMsg("rutuja"));
// console.log( loginUserMsg());  //it will give uundefined

function loginUserMsg(user){
    if(!user){
        console.log("please enter value");
        return   
    }
    return `${user} just loged in`
}
// console.log( loginUserMsg("rutuja"));
console.log( loginUserMsg());




