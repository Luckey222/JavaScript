const prompt = require("prompt-sync")();
let a=parseInt(prompt("Enter the first numbeer: "));
let b=parseInt(prompt("Enter the second number"));
try{
    if(isNaN(a)||isNaN(b))
    {
        throw new Error("Error: Please enter a valid number");
        
    }
    if(a>b)
    {
        console.log(`${a} is greater number`);
        
    }
    else if(b>a)
    {
        console.log(`${b} is greatest number`);
        
    }
    else
    {
        console.log(`${a} and ${b} are equal number`);
        
    }
}
catch(error)
        {
        console.log("Error",error.message);
            
        }    