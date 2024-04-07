// OBJECT LITREALS => A object literals is a comma - separated list of name -value pairs inside the of curly braces.
let name = " rajveer";
let course = "BSC";
var obj = {
    name ,
    course,
};
document.write(obj);

// ANATHER EXAMPLE 
let obj = {
    name : "yahoo baba",
    show(){
        document.write(this.name);
    }
};
// example 
let fname = "rajveer";
let lname = "parihar";
let cour = "btech";
function student (fname , lname ,cour){
    let fullname = fname + " " + lname;
    return { fullname , cour};
}
console.log(student (fname , lname , cour));

// DESTRUCTING ARRAY IN JAVASCRIPT => destructing makes it easy to extract only what is needed.
let user = ["yahoo baba" ,25,"Delhi"];
let [names , age ,city] = user;
console.log(names);
console.log(age);
console.log(city);

//example 
let users = ["raj" , 22 ,"MP"];
let [naam , ...args] = users;
console.log(naam);
console.log(args);

// ANATHER EXAMPLE
function user(){
    return ["yahoo baba" , 22 ,"mumbai"];
}
let [namee , agee ,cityy] = user;
document.write(cityy);

// DESTRUCTING OBJECT IN JAVASCRIPT
let user ={
    nameen : "rajveer",
    ageen : 20,
    citye : "kasoon"
}
let { nameen , ageen , citye} = user;
console.log(nameen);
console.log(ageen);
console.log(citye);
