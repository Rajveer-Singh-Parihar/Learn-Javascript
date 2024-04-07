// function statement
function a(){
    console.log("A IS CALLED");
}
a();

// function expression
var b = function(){
    console.log(" b is called");
}
b();
// function declaration => function stament is also known as function declaration

// anonymous function => a function without a name is anonymous function
function a(){ // here a is only written to avoid the syntax error
// you can use anonymous funtion in funtion expression
}

// NAMED function expression => funtion with name is named funtion expression.
var b = function xyz(){
    console.log(" b is called");
}
b();
xyz(); // gives an error

// parameters and  argument
var b = function(param1 , param2){ // this are the parameters
    console.log(" b is called");
}
b(1,2);// this are the arguments

// FIRST CLASS FUNCTION =>ability of function use values can be passed as argument to anther function (functions inside anather function as arguments.)
var b = function(param1){
    return function xyz(){

    }
}
b();


