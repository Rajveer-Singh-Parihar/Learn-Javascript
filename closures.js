function x(){  // WHAT IS CLOSURES -> Closure is function bundled with its lexical environment is known as closure
    var a = 7;
    function y(){
        console.log(a);
    }
    a=100;
    return y;
}
var z = x();
console.log(z);
z();
// uses of closures -> 1] module design pattern 
//2]currying 
//3] functions like once 
//4]memoize 
//5] maintaining state in async world 
//6]set timeouts 7]iterators

// JS INTERVIEW PREPARATION QUESTIONS PRACTICE
function x(){
    var i =1;
    setTimeout(function(){
        console.log(i);
    },2000)
    console.log(" NAMASTE RAJVEER SINGH PARIHAR");
}
x();
// LINE BY LINE CODE EXECUTION
function x(){
    for(let i=0; i<=5; i++){ // if put var in value of let it gives 5times[6] because it is global scope it gives reference of i.
        sertimeout(function (){
            console.log(i);
        }, i*1000)
    }
    console.log(" here let is blocked scope so it print 1 to 5");
}
// with help var we can print 5 line by line help of closures
function x(){
    for ( var i=0; i<=5 ; i++){
        function close(i){
            setTimeout(function(){
                console.log(i);
            }, x*1000)
        }
        close(i);
    }
    console.log("we can execute line by line code by the help of closures function is blocked scope");
}
x();
// ARE FUNCTION CLOSED 
function outer(b){
    function inner(){
        console.log(a,b);
    }
    let a=10;
    return inner;
}
var close = outer("hello world");
close();
// DATA HIDING AND ENCAPSULATION
function counter(){
    var count = 0;
    return function incrementcounter(){
        count++;
        console.log(count);
    }
}
var counter1 = counter();
counter1();

var counter2 = counter(); // it has anather scope
counter2(); counter2(); counter2();

// USING THE CONSTRUCTOR FUNCTION
function Counter(){ // we should new keyword for the declaration
    var count =0;
    this.incrementCounter = function(){
        count++;
        console.log(count);
    }
    this.decrementCounter = function(){
        count--;
        consolr.log(count);
    }
}
var counter1 = new Counter();
counter1.incrementCounter(); // closures takes loat of memory it is a disadvantage
counter1.incrementCounter();
counter1.decrementCounter();
