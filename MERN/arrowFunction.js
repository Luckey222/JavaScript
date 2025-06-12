//  const user={
//     username:"Laxman",
//     price:999,
//     welcomeMessage:function(){
//         console.log(`${this.username}, welcome to website`);
//         console.log(this);
        
//     }
    
//  }

// // user.welcomeMessage()
// user.username="ram"
// // user.welcomeMessage()

// console.log(this); // it return the empty value 
// /* in the website the global value is windows but in the code editor 
// the global value may be the emplty object   */



// function chai() {
//     let username="laxman"
//     console.log(this.username);
    
// }
// chai()


const chai= ()=> {

    let username="laxman"
     console.log(this);
}

// chai()

const adddTwo=(num1,num2)=>{
    return num1+num2
}
console.log(adddTwo(3,4));



// const adddTwo=(num1,num2) =>  num1+num2

// const adddTwo=(num1,num2) =>  (num1+num2)   // implesite return


// const adddTwo=(num1,num2) =>   ({username:"Laxman Bhattarai"})
// console.log(adddTwo(3,4));


// const mynewArray=[2,5,7,9,3,8]
// mynewArray.forEach(()=>{})

