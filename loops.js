// LOOPS  => Sometimes programmer wants to execute a group of statement certain number of times . this can be done through loop.

// WHILE - LOOP => While loop execute statments the condition is true . if condition is false the interpreter comes out the while loop.
var a =1 ;
while(a<=10){
    document.write("raj");
    a= a+1; // a++
}

// DO WHILE LOOP => Do - while loop in which a set of instruction will execute at least once.
var a =1;
do{
    document.write("ROHAN");
    a=a+1;
}while(a<=10)

// FOR LOOP => Loops through a block of code a number of times.
for(let i=0; i<=20;i++){
    document.write(" thakur sahab");
}

for(var a=1;a<=10;a++){
    if(a%2==0){
        document.write(a+"<br>");
    }
}

for(var a=1;a<=100;a=a+10){
    for(var b=a;b<a+10;b++){
        document.write(b+" ");
    }
    document.write("<br>");
}

// BREAK
for(var a=1;a<=10;a++){
    if(a==3){
        document.write("hey" +a+"<br>");
        break;
    }
    document.write("number" +a+ "<br>");
}

// CONTINUE
for(var a=1;a<=10;a++){
    if(a==3){
        document.write("hey" +a+"<br>");
        continue;
    }
    document.write("number" +a+ "<br>");
}

// ARRAYS IN JAVASCRIPT
var a = [10,20,30,40,50];
console.log(a);

var b = [11,22,45,67,77];
var sum = 0;
for(var b=0;b<=4;b++){
    document.write(ary[b]);
sum = sum + ary[b];
}

var ary = new Array();
ary[0] = 10;
ary[1] = "Harry poter";
ary[3] = true;
for (var a=0; a<4; a++){
    document.write(ary[a]);
}

// MULTI - DIMENSIONAL ARRAY
let ary = [
    ["harry",18,"male","b.com"],
    ["harry",18,"male","b.com"],
    ["harry",18,"male","b.com"],
    ["harry",18,"male","b.com"]
];
for(let a=0; a<4; a++){
for( let b=0; b<4; b++){
    document.write(ary [a][b] +" ")
}
document.write("<br>")
}

// MODIFY AND REMOVE ARRAY ELEMENTS
var a = ["HARRY",18,"BCA"];
a[1] = 19;
document.write(a);

var b = ["HARRY", 12,"BCA"];
delete a[1];
document.write(a)

// ARRAY METHODS
var c = [ "Sanjay","Aman","Karan","Rehman"];
c.sort();
c.reverse();
c.pop() // remove from last
c.push() // add at last
c.shift() // remove from first index
c.unshift() // add at first index
c.concat()
c.join()
c.slice() // gives new array
c.splice()// add or remove elements in exisitng array
c.isarray() // checks the value is array or not
c.includes() // add an element in array
toString()
fill()

// JAVASCRIPT OBJECTS
var a = {
    fname : "Rajveer",
    lname : "parihar",
    age: 25,
}
document.write(a.fname);

// ARRAYS OF OBJECTS
var student = [
    {name : 'ram',age:23},
    {name : 'rohan',age:43},
    {name : 'raina',age:53},
]
for(var a=0; a<student.length;a++){
    document.write(student[a].name + "<br>");
}

const a = [10,20,30];
a[1] = 25;
console.log(a);

//for in loop
var obj = {
    fname :"banna",
    lname : "rajveer singh parihar",
    age : 20,
    country : "BHARAT"
};
for (var key in obj){
    document.write(obj[key] + "<br>");
}

// JAVASCRIPT STRINGS METHOD
var str = "Rajveer singh";
var a = str.length;
var a = str.toLocaleLowerCase;
var a = str.toUpperCase;
var a = str.includes("parihar");
var a = str.startsWith("Rajveer");
var a = str.endsWith("Parihar");
var a = str.search("gh");
var a = str.match(is/g);
var a = str.indexOf("singh");
var a = str.lastIndexOf("Parihar");
var a = str.replace("Rajveer","Raghvendra");
var a = str.charAt(3);
var a = str.charCodeAt(1);
var a = str.concat(str2);
var a = str.split(" ");
var a = str.repeat(4);
var a = str.slice(3,14);
var a = str.substring(3,5);
var a = str.toString();
document.write(a+20);

// * * * * * * *  **  *  * * * * * * * **  * * * * **  * * * ** * * *  * **  **  * **  * ** **  * * * **  * * ***  ** * *  ** ** * * ** * * * * * *