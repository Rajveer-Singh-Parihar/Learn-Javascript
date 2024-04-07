 // THIS KEYWORD => in javascript this keyword refers to an object
 const person = {
    firstname : "Rajveer",
    lastname : "singh parihar",
    id : 5554,
    fullname : function (){
        return this.firstname + " " + this.lastname;
    }
 };

 // THIS IN GLOBAL Space
 console.log(this); // global object -> window ,global

 // THIS INSIDE A FUNCTION
 function x(){        // this keyword work differnetly in strict mode and unstrict mode and value depends it mode 
    console.log(this); // strict mode - value - undefined or null (this substitution)
                       // unstrict mode - value - window 
 }
x(); // value undefined
window.x(); // window object

// THIS INSIDE A OBJECTS METHOD.(function as part of an object is known as method)
const obj = {
    a:10, // this.a -> 10
    x:function(){
        console.log(this);
    },
};
obj.x(); // object is printed


// THIS IS INSIDE AN ARROW FUNCTION
const obj1 = {
    a:10, 
    x:() =>{
        console.log(this);
    },
};
obj1.x(); // window object ( enclosed in lexical context)

// anther example
const obj2 = {
    a:10, // this.a -> 10
    x:function(){
        // enclosing lexical contexr=t
        const y = () =>{
        console.log(this);
    };
    y();
},
};
obj2.x(); // refers to object 2


// THIS KEYWORD INSIDE DOM = > the value is reference to html element.
