console.log(a); // it is temporarle dead zone you cant access a without intialize 
let a = 10;  // strict then var
var b =100;
const b = 233; // it more strict then let -> intialze in the same line

// WHAT IS BLOCK IN JAVASCRIPT
// multiple javascript formed in a group enclosed in brackets and it forms a block{}

// block scope -> what all variables and function we can access inside this block 
{
    var x = 10; // global scope
    let b = 20; // block scope
    const c =30; // block scope
    console.log(x);
    console.log(b);
    console.log(c);
}

// shadowing
var c = 100;
function x(){
    var c =30;
    console.log(c);
}
x();
console.log(c);