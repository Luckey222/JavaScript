const userEmail=[]
 
if (userEmail) {
    console.log("got user email");
       
}else{
    console.log("Don't have user email");
    
}

// truthy or falsely value

// falsy value.
// false, 0,-0, BigInt 0n, "", null, undefined, NaN
// remaining all the value are trusy value

// truthy value 
// "0", 'false', " ", [], {}, function(), 


if (userEmail.length===0) {
    console.log("Array is empty");
    
    
}


const emptyObject={}
if (Object.keys(emptyObject).length===0) {
    console.log("object is empty");
    
}



// nullish coalescing operator(??:): null undefine 

let val1;
// val1=5 ?? 10
// val1 = null ?? 20
// val1= undefined ?? 15
val1= null ?? 10 ?? 15


console.log(val1);
// Terniary operator 

// condition ? true: false

const iceTeaprice=100
iceTeaprice>= 80 ? console.log("more then 80 "):console.log("less then 80");

