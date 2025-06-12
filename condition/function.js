// function bioData()
// {
//     return {
//     name:"Laxman Bhattarai",
//     Address:"Bharatpur-12",
//     age:25,
//     email:'Example@gmail.com'

// };

// }

// const info=bioData();
// // console.log(info);
// // console.log(info.email);
// info.email="Laxumanbhattarai222@gmail.com"
// // console.log(info.email);



// info.name="pratish dahal",
// console.table(bioData())
// info.name="hari prasad"
// Object.freeze(info.name)
// bioData.name="shyam bahadur"
// info.father_name="rohan bahadur"
// console.log(info.name);
// info.email="love@gmail.com"
//  console.log(info);
 







// Dynamic function 
const mySym=Symbol ("sn")
const info=function(sn,name,Address,age,email)
{
    return {
        [mySym]:'158',
    name:"laxman Bhattarai",
    Address:"bharatpur-20",
    age: 29,
    email :"Laxman.bh2056@gmail.com"

};

};
 








// correct way to write code 

// const mySym = Symbol("sn");  // Create a Symbol
// // Function that returns an object
// const info = function(SN, name, Address, age, email) {
//   return {
//     [mySym]: SN,         // Symbol as a key
//     name: name,
//     Address: Address,
//     age: age,
//     email: email
//   };
// };

// // Test: typeof [mySym]
// console.log(typeof mySym); // 👉 "object" — because it's an array with a Symbol inside

// // Call info() with values
// const userInfo = info("158", "Laxman Bhattarai", "Bharatpur-20", 29, "Laxman.bh2056@gmail.com");

 
// // Object.freeze(userInfo);

// // Log with console.table
// console.table(userInfo);

// // Try calling again with different values
// const userInfo2 = info("999", "LAxman", "bharatpur-19", 12, "Example12@gmail.com");

// // Freeze and log the second object
// Object.freeze(userInfo2);
// console.table(userInfo2);

// // Final output for reference
// console.log(userInfo);
