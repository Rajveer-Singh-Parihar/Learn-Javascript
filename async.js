// EVENT LOOPS
// In javascript , the event loop ,microtask queue(prioroty queue the task of this execute first-promises are goes in microtask queue) , callback queue and the call stack are the key companents that help to manage the asynchronous nature of the language.

// CALL STACK 
// the call stack is a data structure that keeps track of the function calls in your code and follows LIFO principle

// CALLBACK QUEUE
// the call back queue is also known as the task queue, holds tasks (callbacks or events) that are ready to be executed. these tasks usally come from asynchronous operations , such as dom events , http requests, or timers ,event loop.

// EVENT LOOP
// the event loop is responsible for continously checking the call stack and the callback queue . 

//MICROTASK QUEUE
// the microtask queue holds the task that are also ready to be executed but has a higher priority than a callback queue. microtask are usally schedule by javascript , promises and mutation observers and other similar mechanisms.

console.log(" start"); // 1st in callstack
setTimeout (function cbt(){
    console.log(" cb settimeout"); // 4th because callback queue
},5000);
fetch("https://api.netflix,com") // 3rd in call stack because microtask queue
.then(function cbf(){
    console.log (" callback netflix");
});
console.log("end"); // 2nd in callstack

// JAVACRIPT ENGINE(is not machine) IS HEART OF JAVASCIPT RUNTIME ENVIRONMENT.
// javascript has just in time compiler(JIT). javascript is interpreted language but modern browser use compiler.

// PROBLEMS WITH SET TIMEOUT
console.log("start"); // 1ex
setTimeout(function cb(){
    console.log("callback");//4th ex
},4000);
console.log("end"); // 2nd ex

// million
let startdate =new Date().getTime();
let enddate = startdate;
while(enddate<startdate + 6000){
    enddate = new Date().getTime();
}
console.log("while expires"); //3rd ex
