const mySym=Symbol("key1")     // need to declare the symbols objeects 
const jsUser={
    name: "Laxman",
    "full name":"Laxman bhattarai",
    [mySym]:"1234",               // proper use of symbols syntax 
    age: 25,
    location: "bharatpur",
    email:"example@gmail.com",
    isLoggedIn:false,
    
}
console.log(jsUser[mySym]);



   jsUser.greeting=function(){
   console.log(jsUser[mySym]); 
    console.log("hello js user");
 }



   jsUser.greetingTwo=function(){
   console.log(`hello js user, ${this.name}`);
 }



//  console.log(jsUser.greeting());
 console.log(jsUser.greetingTwo());




