//HOISTING IS JAVASCRIPT BY DEFAULT BEHAVIOUR OF MOVING DECLARATION AT THE TOP.BUT NOT INITALIZATION.
// IN CALL STACK ALL THE GLOBAL EXECUTION ARE KEPT .
// only variable can be hoisted and let , const cant be hoisted.
console.log(x); // UNDEFINED
getName();
var x =7;
function getName(){
    console.log("NAMASTE BHARAT");
}
getName();
console.log(x);
console.log(getName);


// simple example of hoisting
console.log(a) // UNDEFINED - THERE IS PRESENCE OF VARIABLE BUT IT IS NOT DEFINED
var a=1;
console.log(b); // NOT DEFINED - THERE IS NO PRESENCE OF VARIABLE

// simple examples
great() // good morning
function great(){
    console.log("good morning");
}

// ANATHER TRICKY EXAMPLE
console.log(a) // cannot access a before initialization / temprory dead zone.
let a = 9;
const a = 9;

// simple example 
greet() // cannot access greet before initialization
const greet = () =>{
    console.log("good night");
}

// simple examples - var se function host nahi hota mere bhai
greeeting() // greeting is not a function.
var greeting = () =>{
    console.log("good night");
}
