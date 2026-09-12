
let name = "Rutuja";

function greet() {
    console.log(name);
}

greet();



function outer(){
    let username="rutuja";

    function inner(){
        console.log(username);
        
    }
    inner()

}
outer();

// console.log(username);

// Lexical scope means where you write your code determines which variables you can use.
// Outer Box (Global/Parent): Contains a variable.
// 📥 Inner Box (Child function): Inside the outer box. It can look out and use the parent's variables.
