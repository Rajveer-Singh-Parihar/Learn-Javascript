// CLASSES IN JAVASCRIPT => Class is a program -code template for creating obejct . Those object will have some state(VARIABLES) and some behaviour(FUNCTIONS) inside it.
// OBJECT => a object is instance of class
class toyotaCar {
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
}
let fortuner = new toyotaCar(); // new keyword is used for creating an object
let lexus = new toyotaCar(); // we can access the properties toyota car

// CONSTRUCTOR IN JAVASCRIPT => a constructor is method that(automatically invoked by new) .
// a constructor is used to intialize the object
class toyotaCar {
    constructor(brand){
        console.log("creating new objects"); // sabse pahle constructor invoke
        this.brand = brand; // this refers to object brand 
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
}
let fortuneer = new  toyotaCar("buggati");
console.log(fortuneer);

// anather example of constructor
let DATA = "secret information";
class user{
    constructor(name ,email){
        this.name = name;
        this.email = email;
    }
    viewdata(){
        console.log("data =", DATA);
    }
}
let student1 = new user("rajveer","raj@gmail.com");
let student2 = new user("raj",'rajveer@gmail.com');


// INHERITANCE => Inheritance is concept of passing down properties and methods from parent class to child calss is known as inheritance.
// if child and parent have same method then childs method will be used -> it is known as method overriding.
class parent{
    hello(){
        console.log(" I AM parent class");
    }
}
class child extends parent {}
let obj = child();
 
// anther example
class person{
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
}
class engineer extends person {
    work(){
        console.log(" solve problems , build something");
    }
}
let rajveerobj = new engineer();

// SUPER KEYWORD IN JAVASCRIPT => the super keyword is used to call the constructor of its parent class to access the parents properties and methods(child<->parent).
class human{
    constructor(){
        console.log("enter in parent constructor");
        this.species = "homo species";
    }
    eat(){
        console.log("eat chapati");
    }
}
class engineer extends human{
    constructor(branch){
        console.log("enter child constructor"); // start from there
        super();// to invoke the parent class constructor
        this.branch = branch;
        console.log("exit child constructor");
    }
    work(){
        console.log(" solve problems , build something");
    }
}
let engobj = new engineer(" computer science");