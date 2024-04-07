// PROMISES are used to handle async operation in javascript(promise is nothing but an empty object).

// 1) A promise is an object represents the eventual compilition or failure of an asynchronus operation.[IMP]
// 2)three stage in promises ( 1] pending 2] fullfilled 3] rejected ).
// 3)A promise resolves only once and it is immutable.
// 4)using .then() we can control when we call the callback function.
// 5) to avoid the  callback hell ( pyramid of doom ) => we use promise chaining . this way our code expands vertically instead of horizantally.chaining is done using .then().

const cart = ["shoes","pants","kurta"];

createOrder(cart)
.then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    return showordersummary(paymentInfo);
})
.then(function(paymentInfo){
    return updatewalletbalance(paymentInfo);
});

// ANATHER WAY TO WRITE WITH ARROW FUNCTION
createOrder(cart)
.then(orderId => proceedToPayment(orderId))
.then(paymentInfo => showordersummary(paymentInfo))
.then(paymentInfo => updatewalletbalance(paymentInfo));

// simple promise and reject
var ans = new promise((resolve , reject) =>{
    Math.floor(Math.random() *10);
    if(n<5){
        return resolve();
    }
    else{
        return reject();
    }
})
ans.then(function(){
    console.log(" BELOW THAN")
})
.catch(function(){
    console.log(" ABOVE THAN")
});

// CREATING A PROMISE AND CHAINING , ERROR HANDLING

const carts = ["shoes","pants","kurta"];

createOrder(cart)
.then(function(orderId){
    console.log(orderId);
    return orderId; // return keyword is used to next part of chain
})
.then(function (paymentInfo){
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    console.log(paymentInfo);
})
.catch(function (err){
    console.log(err.message);
});

// procedure for creating a promise
function createOrder(cart){
    const pr = new promise (function(resolve , reject){
    // createorder/ validate cart / order id
    
    if(!validateCart(cart)){
        const err = new error (" THE CARD IS NOT VALID");
   reject(err);
    }
    // logic for create order

    const orderId = "12345678";
    if(orderId){
        setTimeout(function(){
        resolve(orderId);
    },5000);
}
});
return pr;
}
function proceedToPayment(orderId){
    return new promise(function(resolve , reject){
        resolve("payment is done succesfully");
    });
}

function validatecart(cart){
return true; // false
}

// promish.all() => take array of promises [ val1(1secound), val2(2secound),val3(3secound)]->> execute in three secounds.
// if 1value throws error it doesnt wait for other promises throwa error in console.(2secound contains error)
// promise.allseteled([p1,p2,p3]) if one value thorows error but it gives error in three secound it waits until all value execute.
// promise.race [p1(1sec),p2(5sec),p3(3sec)] =>> p1 value we get after one secound . value of  first promise settled.
// promise.any([p1,p2,p3]) => wait for first success .it returns the value of p1 if p1 contains error than it wait for p2.

const p1 = new promise((resolve , reject)=>{
    setTimeout(()=> resolve("p1 successs"),3000); // it tooks three secounf
})
const p2 = new promise((resolve , reject)=>{
    setTimeout(()=> resolve("p2 successs"),1000); //reject ("p2 fail ")-> after one secound it throws an error
})
const p3 = new promise((resolve , reject)=>{
    setTimeout(()=> resolve("p3 successs"),2000);
})
promise.all([p1,p2,p3]).then(res =>{
    console.log(res);
})
.catch(err => {
console.log(err);
});

// 2nd promise.all settled
promise.allSettled([p1,p2,p3]).then(res =>{ // it waits all the promises to settled it waits 3secound until it have error
    console.log(res);
})
.catch(err => {
console.log(err);
});

// 3rd promise .race
promise.race([p1,p2,p3]).then(res =>{ // it is type of race of task which first complete(throws quickely error).
    console.log(res);
})
.catch(err => {
console.log(err);
});

// 4th promise.any
promise.any([p1,p2,p3]).then(res =>{ // waits for first settled success if p1 is unsuccess then it gives if p2 is successor p3.
    console.log(res); // if all three is unsuccess then it give an aggregrate error.
})
.catch(err => {
console.log(err);
});