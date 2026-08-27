//scope-->Scope means the area or place where a variable can be accessed.
let a=10;  //global scope

if(true){
    let a=20;
    console.log("Inner:"+a);  //local scope   //20
}
console.log(a);  //10

// closures-->child function can access the parents functions variable 
// A closure happens when an inner function remembers and can access variables from its outer function, even after the outer function has finished executing

function parent(){
    let name="rutuja";

    function child(){
        let surname="chavan"
        console.log(name); //can access parents variable
      
    }
    child()
    // console.log(surname); //not possible outside the scope
    
}
parent()

// it is also possible with if-else

    if(true){
        const username="ram"
        if(username==="ram"){
            const website=" youtube"
            console.log(username+website);  
        }
        // console.log(website);  //not possible outside the scope
    }
    // console.log(username);  //not possible outside the scope

    
    //++++++++++accessing before declaring++++++++++++++

//     function addone(num){
//         return num+1
//     }

//    console.log(addone(2));


// if we only use function we can use the function before declaring
   console.log(addone(2));
 function addone(num){
        return num+1
    }

    // if we store the function in variable we cannot use it before declaring 
    // console.log(addTwo);  not possible
    const addTwo=function (num) {
        return num+2
    }
         console.log(addTwo(5));  //this is posible


    



    


