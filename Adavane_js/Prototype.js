
// function is function also and object also
 function multiplyBy5(num){
    return num*5;
 }

 multiplyBy5.power=2;   //we can also use .here 

 console.log(multiplyBy5(5));
 console.log(multiplyBy5.power);
 console.log(this);//{}

//  this

function createuser(userName,score){
    this.userName=userName;
    this.score=score;
}

createuser.prototype.increment=function(){
    this.score++
    
}
createuser.prototype.printme=function(){
    console.log(`score is ${this.score}`);
    
}
// new is used to create a new object from a constructor function or class.

const val1= new createuser("rutuja",100)
const val2=new createuser("ABC",80)

val1.increment();
val1.printme();

//prototype--> A prototype is an object from which another object can get properties and methods.



 
 
 