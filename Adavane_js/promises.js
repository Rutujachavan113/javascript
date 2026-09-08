let promise=new Promise((resolve ,reject)=>{
    

    setTimeout(()=>{
        console.log("promise is here");
    resolve("promise is resolves");

    },1000)
})

// promise consumption
promise.then((result)=>{
    console.log("succesull",result); 
})
.catch((error)=>{
    console.log("failed",error); 
})
.finally(()=>{
    console.log("runs always");
 
}
)