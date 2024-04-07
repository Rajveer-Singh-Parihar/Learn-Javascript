// Variables => Variable is name of memory location where we store our data.(LET ,CONST , VAR).
let firstname = "rajveer";
console.log(firstname);
var x = "yahoo"
console.log(x);

// DATATYPES => Datatypes define the type of data that can be stored in the variable.
var y = "hello"; //->  STRING
var z =  25; // -> NUMBER
var x = true // -> boolean
var x = ["html","css",'javascript']; // -> Array
var x = {first : "jane",last : "Doe"}; // -> Object
var x = null ; // -> Undefined

// OPERATORS => Operators is symbol that tells to computer to perform mathematical and logical task.
// Arithmatic Operator -> (+,-,*,%,/,**,++,--)
// Assignment Operator -> (=,+=,-=,*=,/=,%=,**=)
// Comarison Operator -> (==,===,|=,|==,>,<,>=,<=)
// Logical Operator -> && = Logical AND
     // -> || = Logical OR
     // -> ! = Logical NOT
// Ternary Operator  -> ? = TRUE , FALSE

// CONDITIONAL OPERATOR 
// IF - ELSE STATEMENT
var x = 15;
if(x>30){
    console.log("x is greater");
}
else{
    console.log(" x is smaller");
}

var name = "Rajveer";
var gender = "male";
if(gender == "male"){
    console.log("hello MR" + name)
}
else{
    console.log("hello Miss"+name)
}

// IF ELSE IF STATEMENT
var per = 55;
if(per>=80 && per<=100){
    console.log("you are in merit list");
}
else if(per>=60 && per<80){
    console.log("you are in first division");
}
else if(per>=45 && per<60){
    console.log(" you are in secound division");
}
else if(per>=33 && per<45){
    console.log(" you are in third division");
}
else{
    console.log(" OOPS YOUR ARE FAIL")
}

// SWITCH STATEMENT
var day = 1;
switch(day){
    case 0: console.log("monday");
    break;
    case 1: console.log("Tuesday");
    break;
    case 2: console.log("Wednesday");
    break;
    case 3: console.log("Thirsday");
    break;
    case 4: console.log("Friday");
    break;
    case 5: console.log("Saturday");
    break;
    case 6: console.log("Sunday");
    break;
    default: console.log(" Enter the valid day");
}

// ALERT BOX
alert("Hello Everybody");
var a =10;
var b = 20;
if(a>b){
    alert("A is greater");
}
else{
    alert("B is greater");
}

// CONFIRM BOX
confirm(" Do you like our website");

var a = confirm("Do you like our website");
if(a){
    alert("Thanks")
}
else(
    alert("Sorry")
)

// PROMPT BOX
prompt("What is YOur name");

var a = prompt(" What is your name");
console.log(a);

// JAVASCRIPT EVENTS
// click,double click, Right click, mouse hover , mouse out, mouse down , mouse up, key press , key up, load , inload , resize , scroll.
