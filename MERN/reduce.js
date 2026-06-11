const mynums =[1,2,3]
//  myTotal=mynums.reduce(function (acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc+currval
//  },0)
const myTotal= mynums.reduce((acc, curr)=>acc+curr,0)

 console.log(myTotal);
 

 const shoppingCard=[
    {
        itemsName:"js vourse",
        price:299
    },
     {
        itemsName:"python",
        price:12500
    },
     {
        itemsName:"data scence",
        price:22500
    }
 ]

 const priceToPay = shoppingCard.reduce((acc,items)=>acc+items.price,0)
 console.log(priceToPay);
 