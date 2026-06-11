let a=parseInt(prompt("Enter the first numbeer: "));
let b=parseInt(prompt("Enter the second number"));
try{
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
catch(error){
        console.log("Error",error.message);
            
        }