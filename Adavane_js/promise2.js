// let promise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//     resolve({useName:"rutuja",age:22})
//     },1000)
// }).then((user)=>{
//     console.log(user);
    
// })

// const promise2=new Promise((resolve,reject)=>{
//     let error=true;

//     if(!error){
//         resolve({useName:"rutuja",password:"123"})
//     }
//     else{
//         reject('ERROR,something went wrong');
//     }
// })
// .then((user)=>{
// console.log(user);
// })
// .catch((error)=>{
//     console.log(error);
    
// })
// .finally(()=>{
//     console.log("promise is either resolve or rejected");
    
// });

// async and await

const promise3 = new Promise((resolve, reject) => {
    let error = true;

    if (!error) {
        resolve({
            userName: "rutuja",
            password: "123"
        });
    } 
    else {
        reject("ERROR, js went wrong");
    }
});  // ✅ Close the Promise here


async function consumePromise3() {

    try {
        const response = await promise3;
        console.log(response);
    } 
    catch (error) {
        console.log(error);
    }
}

consumePromise3();  // ✅ Call the function