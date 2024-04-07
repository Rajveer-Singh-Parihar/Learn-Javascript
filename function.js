// FUNCTIONS => a function is block of code designed to perform a particular task.
// functions are block of code which can used after some time .
// it increase the reusability of code
// a javacript function is executed when "something" ivokes it (calls it).

var x =1; // 3rd it execute
a();
b();
console.log(x);
function a(){
    var x =10; // 1st it execute
    console.log(x);
}
function b(){
    var x  = 200; // 2nd execute
    console.log(x);
}
// SIMPLE FUNCTION
function hello(){
    console.log(" hello rajveer singh parihar")
}
hello();
hello();
// FUNCTION WITH PARAMETER
function hello(fname , lname){
    document.write("hello"+fname+lname);
}
hello("RAJVEER","BANNA");
// anather example
function sum(a,b){
    document.write(a+b);
}
sum(20,30)