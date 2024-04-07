//HOISTING =>HOISTING IS THE PHENOMENON IN JAVASCRIPT BY WHICH YOU CAN ACCESS THIS VARIABLE AND FUNCTION EVEN BEFORE YOU INTIALIZE IT.
getname() // namste javascript
console.log(x); // undefined
var x =7;
function getname(){
    console .log(" namste javascript");
}

// LEXICAL ENVIRONMENT -> lexical environment is created whenever a execution context is created
function a(){
    c();
    function c(){  // each and every block has it lexical scope
        console.log(b); //UNDERSTANDING THE SCOPE
    }
}
var b = 10; // SCOPE MEANS WHERE YOU CAN ACCESS SPECIFIC VARIABLE IN FUNCTION
a();   // whenever the executon context is been created a lexical(hierarchy) environment is also been created
