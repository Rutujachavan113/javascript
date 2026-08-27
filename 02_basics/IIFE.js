// IIFE-->A function that is created and executed immediately.
// we want ()() first for function definition second for execution


// ways
// named IIFE
(function connection(){
    console.log(` db connected`);
     
}());

// we c\have to use ; semicolon to stop the execition on the IIFE 

// without named IIFE
(()=>{
    console.log(`db two connected`);
    
})();

// with parameters
((name)=>{
    console.log(`db two connected ${name}`);
    
})("ravi");


// why we required
// 1. To execute code immediately
// 2. To avoid polluting the global scope 
// 3.Keep variables private


