// WHAT IS CALLBACK FUNCTION IN JAVASCRIPT => calling function inside anther function is known as call back function
function x(){

}
x(function y(){

});

// JAVASCIPT IS SYNCHRONOUS AND SINGLE THREDED LANGUAGE
setTimeout(function(){
    console.log("timer");
},5000);
function x(y){
console.log("x");
}
x(function y(){
console.lof("y");
});

//DEEP ABOUT EVENT LISTNERS
document.getElementById("clickMe").addEventListener("clickMe",function xyz(){
console.log("THE BUTTON IS CLICKED");
});

//CLOSURES WITH EVENT LISTENERS
function attcheventlisteners(){
    let count = 0;
    document.getElementById("clickMe").addEventListener("clickMe",function xyz(){
        console.log("THE BUTTON IS CLICKED", ++count);
        });
}
attcheventlisteners();

// CALLBACK HELL => When a function is passed as an argument to another function , it becomes the callback function. this process continous and there are many callbacks inside another callback function .
// This grows the code horizontally instead of vertically . that mechanism is known as call backhell.

const cart = ["shoes", "pants","kurta"];

Api.createorder(cart ,function(){

    api.proceedtopayment(function(){

        api.showordersummary(

            function(){
                
                api.updatewallet()
            }
        )
    })
})

// INVERSION CONTROL => The callback function is passed to another callback , this way we lose the control of our code . we dont know what is happening  behind the scene and the program becomes very difficult to maintain .
// that process is called inversion of control
