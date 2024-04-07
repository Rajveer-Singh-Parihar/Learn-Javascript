// HIGHER ORDER FUNCTION =>  a function which takes anther function as argument( or return from it ) is known as higer order funtion.
const radius = [1,2,3,4];
const area = function(radius){
    return Math.PI*radius*radius;
};
const circumference = function(radius){
    return 2*Math.PI*radius;
};
const diameter = function(radius){
    return 2*radius;
};
const calculate = function (radius , logic){
    const output = [];
    for(let i=0 ; i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
};
console.log(calculate(radius,area));
console.log(calculate(radius,circumference));
console.log(calculate(radius,diameter));


// MAP FILTER AND REDUCE
// MAP => MAP METHOD IS USED WHEN WE WANT TO TRANSFORMATION OF WHOLE ARRAY
const arr = [5,3,4,1,7];
// double - [ 10,6,8,2,14];
// triple- [15,3,12,3,21];
// binary["101","1","11","10","110"];
function double(x){
    return x*2; // for binary x.toString(2);
}
const output = arr.map(double);
console.log(output);

// FILTER => filter is used when we want to filter the array to obtain  required value
const arrr = [5,3,4,1,7];// filter odd values
function isOdd(x){ //isEven
    return x%2; // x%2===0;
}
const outputt = arrr.filter(isOdd);
console.log(outputt);

// REDUCE (takes to parameter) => reduce is used when we want to reduce the array to single values eg(max, min,avg,sum,difference)etc.
const aar= [5,3,4,1,7];  // -> current values
// sum ->(acc)or max
const outpuut = arr.reduce(function (acc, curr){ // acc - max - accumalator
    acc = acc+curr;  //if (curr>max){ max = curr;}
    return acc ;      // return max;
},0) //-> intial value
console.log(outpuut);


// EXAMPLE 1
const users = [
    { firstname : "rajveer", lastname : "parihar" ,age : 26},
    { firstname : "raj", lastname : "parmar" ,age : 56},
    { firstname : "veer", lastname : "soni" ,age : 76},
    { firstname : "rudra", lastname : "panchal," ,age : 46}
];
 // list of full names 
 const outputtt = users.map(x => x.firstname + " " + x.lastname);
 console.log(outputtt);

 // EXAMPLE 2 
 const userss = [
    { firstname : "rajveer", lastname : "parihar" ,age : 26},
    { firstname : "raj", lastname : "parmar" ,age : 56},
    { firstname : "veer", lastname : "soni" ,age : 76},
    { firstname : "rudra", lastname : "panchal," ,age : 46}
];
 
// acc = ( 26:2,62:1,56:1)
const outtput = user.reduce(function(acc,curr){
if (acc[curr.age]){
    acc[curr.age] = ++acc[curr.age];
}
else{
    acc[curr.age]=1
}
return acc;
},{})
console.log(outtput);

// EXAMPLE 3 
const uusers = [
    { firstname : "rajveer", lastname : "parihar" ,age : 26},
    { firstname : "raj", lastname : "parmar" ,age : 56},
    { firstname : "veer", lastname : "soni" ,age : 76},
    { firstname : "rudra", lastname : "panchal," ,age : 46}
];
const ouutput = user .reduce(function(acc , curr){
    if(curr.age<30){
        acc.push(curr.firstname);
    }
    return acc;
},[])
console.log(ouutput);

// EXAMPLE 4
const useers = [
    { firstname : "rajveer", lastname : "parihar" ,age : 26},
    { firstname : "raj", lastname : "parmar" ,age : 56},
    { firstname : "veer", lastname : "soni" ,age : 76},
    { firstname : "rudra", lastname : "panchal," ,age : 46}
];
const ooutput = users.filter = (x => x.age<30).map((x)=> x.firstname);
console.log(ooutput);