// a=3
// b=2

// if (a>=b) {
//     console.log("greatest numbeis ",a);
       
// }
// else
//   {console.log("the greatest number is ",b);
//     }


// const score=300
// if (score>100) {
//     let power="fly"
//     console.log(`user power:${power}`);
    
// }
// console.log(`user power: ${power}`);



// const balance=1000
 // if (balance > 500)  console.log("test");

// if (balance<500) {
//     console.log("less then 500");
    
// }
// else if (balance<750) {
//     console.log("less then 750");
    
    
// }
// else if (balance<900) {
//     console.log("less then 900");
    
// }
// else (balance<1200) 
//     console.log("less then 1200");
    



const userLoggedIn=true
const debitCard=false
const userLoggedInFromGoogle=false
const userLoggedInFromEmail=true

if (userLoggedIn&& debitCard) {
    console.log("allow to buy course");
}
if (userLoggedInFromEmail||userLoggedInFromGoogle) {
    console.log("user logged in ");
    
}