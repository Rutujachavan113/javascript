function outer() {
    let name = "Rutuja";

    function inner() {
        console.log(name);
    }

    return inner;
}

const result = outer();

result();

// A closure happens when an inner function remembers and can use variables from its outer function, even after the outer function has finished.