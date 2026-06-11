
let index=1
while (index<=10) {
    // console.log(`the value of index is ${index}`);
    index+=2;    
}

const myArray=["superma","batman","spiderman"]
let arr= 0
while (arr<myArray.length) {
    // console.log(`value is ${myArray[arr]}`);
    arr+=1
    
}




let score=1
do {
    // console.log(`the score value is ${score}`);
    score++
} while (score<=10);



const arr1 =[1,2,3,4,5,6,7,8,9,10]
for (const num of arr1) {
    // console.log(num);
}


const greeting="hello world"
for (const num2 of greeting) {

    // console.log(`each char is ${num2}`);

  
}
console.log();

const greet="hello world"
for (const go of greet) {
    if (go==" ")
        break
    // console.log(`each char is ${go}`);

  
}


// const map = new Map()
// map.set('nep',"Nepal")
// map.set('USA',"United State of America ")
// map.set('fr',"France")
// map.set('PAK',"Pakistan")
// map.set('nep',"Nepal")

//  console.log(map);

// for (const  [key,value] of map) {
//     // console.log(key, ':-', value);
    
    
// }


// const myobject={
//     game1:'NFS',
//     game2:'spiderman'
// }
// for (const [key,value] of myobject) {
    // console.log(key, ':-', value);
    
// }




const myobject={
    js:'javascript',
    cpp:'c++',
    rb:"ruby",
    
}
for (const key in myobject) {
    // console.log(myobject[key]);
    // console.log(`${key} shortcut is for ${myobject[key]}`);
    
            
    }


    const programming=["js","java","cpp","c#","py"]
    for (const key in programming) {
        // console.log(key);
        // console.log(programming[key]);
        
        
            
        }



const map = new Map()
map.set('nep',"Nepal")
map.set('USA',"United State of America ")
map.set('fr',"France")
map.set('PAK',"Pakistan")
map.set('nep',"Nepal")

for (const [key,value] in map) {
 console.log(key);
}

// Define the map FIRST
// const map = new Map()
// map.set('nep', "Nepal");
// map.set('USA', "United State of America");
// map.set('fr', "France");
// map.set('PAK', "Pakistan");
// map.set('nep', "Nepal"); // This will overwrite the previous 'nep' key

// // THEN iterate over it
// for (const [key, value] of map) {
//     console.log(key, value);
// }



