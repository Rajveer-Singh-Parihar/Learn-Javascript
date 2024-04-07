// PROTYPE => a javascipt object is an entity having a state and behaviour (properties and method) . js object has special property  called protype. we can set prototype using ( __proto__)

let arr = ["akshay","aditiya"]; // everything in javascipt is nothing but object
let object = {
    name : "akshay",
    city: "ujjain",
    getintro: function(){
console.log(this.name + "from" + this.city);
    }
}
let object2 = {
    name : "aditiya"
}
 // never do this in your code
 object2.__proto__ = object; // object 2 inheriting the property of object(object2.city-> ujjain)


 // understanding how bind functions works
 let name = {
    firstname : "rajveer",
    lastname : "parihar"
 }
let printMyName = printName.bind(name);
printMyName();

// CALL APPLY  BIND
// CALL METHOD
let names = {
    firstname : "rajveer",
    lastname : "parihar",
 }
 let printfullName = function(hometown ,state){
    console.log(this.firstname + "" + this.lastname + " from" + hometown)
 }
printfullName.call(names , "dehradhun", "uttarpradesh");

let names2 = {
    firstname : "sachin",
    lastname : "tendulkar"
 }
 // function borrowing or calling
 printfullName.call(names2, "mumbai","maharastra");

 // APPLY
 printfullName.apply(names2, ["mumbai","maharastra"]); // takes secound argument as array list

 //BIND
  let printmyname = printfullName.bind(names2, "mumbai","maharastra"); // does not invokes directly but gives the copy of that method
  console.log(printmyname);


  // FUNCTION CURRYING  IN JAVASCRIPT
  let multiply = function(x ,y){
    console.log(x*y);
  }
  let multiplybytwo = multiply.bind(this,2);
  multiplybytwo(5);
  let multiplybythree = multiply.bind(this,3);
  multiplybythree(6);
  
  // anther way
  let multiplyy = function(x){
    return function(y){
        console.log(x*y);
    }
  }

  let mutltiplYbytwo = multiply(2);
  mutltiplYbytwo(3); // 6