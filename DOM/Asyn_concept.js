// setTimeout()-->Runs code after a specified time.

console.log("hello");
setTimeout(()=>{
    console.log("hello after 2 sec");
    
},1000);
console.log("world");

// setInterval()-->Runs code again and again after a time interval.
// print number from 1 to 10

let  count=0;

const interval=setInterval(()=>{
    count++;
    console.log(count);
    if(count===10){
        clearInterval(interval)
    }

    
},1000)

