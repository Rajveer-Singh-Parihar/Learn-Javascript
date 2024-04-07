// WHAT IS ASYNC => async always return a promise.
// WHAT IS AWAIT => await can only be used inside an async function.
// ASYNC AND AWAIT => async and await is used to handle the promises.

const p = new Promise((resolve , reject) =>{
    resolve("PROMISE RESOLVED VALUE");
});
async function handlePromise(){
    const val = await p;
    console.log(val);
}
handlePromise();

// DIVING DEEP INTO ASYNC AWAIT
const p1 = new Promise((resolve , reject) =>{
    setTimeout(() =>{
        resolve(" the problem is resolve");
    },10000);
});

const p2 = new Promise((resolve , reject) =>{
    setTimeout(() =>{
        resolve(" the problem is resolve"); // if (p2) reverse p1 goes upward resolve in 5secounds then the promise has been resolve in 5secound.
    },5000);
});
async function handlePromise(){
    console.log(" hello world"); // it execute very quickely and doesnt wait for await
    const val = await p1;
    console.log("hello rajveer singh parihar"); // it waits for 10secound after the promise is resolve.
    console.log(val);

    const val2 = await p2; // p1 then also it waits for 10second.
    console.log("hey i am anther await "); //it also wait for 10secound after it prints
    console.log(val2);
}
handlePromise();

// REAL WORLD EXAMPLE OF ASYNC AWAIT
const API_URL = "https://api.github.com??users/rajveer77";
async function handlepromise(){
     const data = await fetch(API_URL)  // fetch gives as promise (it gives response object - then we convert response.json- json value)
const jsonValue = await data.json();
console.log(jsonValue);
}
handlepromise();

//ERROR HANDLING
const API_URL1 = "https://api.github.com??users/rajveer77";

async function handlepromise(){
    try{
        const data = await fetch(API_URL1);
        const jsonValue = await data.json();
        console.log(jsonValue);
    }
    catch(err){
        console.log(err); // error says failed to fetch
    }
}
handlepromise();
