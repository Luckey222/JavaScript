// function syMyName(){
// console.log("L");
// console.log("A");
// console.log("x");
// console.log("M");
// console.log("A");
// console.log("N");
// }
// syMyName()

// function adddTwoNumber(num1,num2){
//    console.log(num1+num2);
    

// }
// adddTwoNumber(3,"a")
// adddTwoNumber(3,null)
// adddTwoNumber(3,5)
// const result =adddTwoNumber(10,15)
// console.log("result: ", result);


// function adddTwoNumber(num1,num2){
//   let result = num1+num2
//     // console.log("hey laxman you have printed the sum of two  numbers over here ");
//   return num1+num2
//   console.log("laxman");   // after return the program never print the value 
  

// }
//  const result=adddTwoNumber(3,5)
//  console.log(" result is : ", result);



//  function loginUserMessage(Username){
//     if (Username===undefined) {
//         console.log("please enter a user name ");
//         return
        
        
//     }
//     return `${Username} just  logged in `

//  }
// // console.log(loginUserMessage("Laxman"));
// console.log(loginUserMessage());





 function loginUserMessage(Username="Ram"){
    if (!Username) {                //if (Username===undefined) is equivalent to   if (!Username)
        console.log("please enter a user name ");
        return
        
        
    }
    return `${Username} just  logged in `

 }
console.log(loginUserMessage("Laxman"));
// console.log(loginUserMessage());

