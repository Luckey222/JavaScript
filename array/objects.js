/*object can be define in two or three types they are  litral and constructor 
singleton 
object literals 
*/

const mySym=Symbol("key1")     // need to declare the symbols objeects 
const jsUser={
    name: "Laxman",
    "full name":"Laxman bhattarai",
    [mySym]:"mykey1",               // proper use of symbols syntax 
    age: 25,
    location: "bharatpur",
    email:"example@gmail.com",
    isLoggedIn:false,
    
}

// console.log(jsUser.name);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);






// jsUser.email="Laxuman@gmail.com"
// // Object.freeze(jsUser)
// jsUser.email="Laxuman@yahoo.com"
// console.log(jsUser);




 // declaration of the function 

 jsUser.greeting=function(){
    console.log("hello js user");
    
 }

 jsUser.greetingTwo=function(){
    console.log(`hello js user, ${this["full name"]}`);
    
 }

 console.log(jsUser.greeting());
 
 console.log(jsUser.greetingTwo());          
