class user {
    constructor(email , password){
        this.email = email;
        this.password = password
    }
    get password(){
        return this.__password.ToUpperCase()
    }
    set password(value){
        this.__password = value;
    }
}
const raj = new user ("rajveer singh@gmail.com" , "ban2334");
console.log(raj.password);

// static properties => use static anyone cant access it is safe and secure.
class user {
    constructor(username){
        this.username = username ;
    }
    logme(){
        console.log ( `username : ${this.username}`);
    }
    static createID(){
        return '123'
    }
}
const rajveer = new user ("rajvansh");
console.log(rajveer.createID());

// FOR EACH LOOP IN JAVASCIPT
var a = ["rahul","jay","vijay"];
a.foreach(function (value){
    document.write(value + "<br>");
});

// JAVASCRIPT FOR IN LOOP
var obj = {
    firstname : "rajveer",
    lastname : "singh",
    age : 20,
    country : "bharat"
};
for(var key in obj){
    document.write(obj[key] + "<br>");
}