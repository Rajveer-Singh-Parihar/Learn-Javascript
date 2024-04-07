// TEMPLATE STRING USE BACK -TICKS (``) RATHER THAN THE QUOTES("") TO DEFINE THE STRING.
let user = " rajveer banna";
let marks = 390;
console.log(`hello ${users} your marks is ${marks}`);

let fname = "raj";
let lname = " parihar";
function fullname(fname ,lname){
    return `${fname} ${lname}`; // the return statement stops the execution of function and returns the value
}

let hello = `hello ${fullname(fname , lname)}`;
console.log(hello);

// ARROW FUNCTION IN JAVASCRIPT => Arrow function are use to write the function in shorter.
let welcome = (name , age) =>{
    `welcome ${name} ${age}`
}
console.log(welcome("rajveer" , 24));

let raj = ()=>{
    console.log("rajveer you have created your own arrow function");
}

// REST OPERATOR IN JAVASCRIPT => allows a function to accept an indefinite number of arguments as an array.
function sum(){
    console.log(arguments);
let sum = 0;
for(let i in arguments){
    sum += arguments[i];
}
document.write(sum + "<br>");
}
sum(10,30,45);
sum(34,56);

// anather example
function sum(name, ...args){
    console.log(arguments);
document.write(`hello ${name}`);
let sum =0;
for(let i in args){
    sum += args[i];
}
document.write(sum + "<br>");
}
sum("raj banna" ,34,45,44);

// SPREAD OPERATOR => allows as to quickely copy all or part of an existing array object into new array object( array ko bekher deta hai).
var a = [ 1,2,3,4,5,6,7,8,9];
var b = [...a];

// anather example
function sum(name, ...args){
    console.log(arguments);
document.write(`hello ${name}`);
let sum =0;
for(let i in args){
    sum += args[i];
}
document.write(sum + "<br>");
}
var arr = [23,44,55,66,5];
sum ("banna rajveer" , ...arr);

// A SIMPLE AND EXAMPLE 
var obj1 = {
    name : " rajveer singh parihar",
    course : "BSC (HONOURS)"
};
var obj2 = {
    age : 25
};
var obj3 = {...obj1 , ...obj2};
document.write(obj3);
