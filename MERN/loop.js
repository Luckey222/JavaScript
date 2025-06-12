// const coding=["js","ruby","python","c++","c#"]
// 


// const values=coding.forEach((items)=>{
// console.log(items);
// return items

// })
// console.log(values);


const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNums.filter((num)=>{
//     // num>4  it should be return to get result
//  return num>4
// })

const newNums=[]
myNums.forEach((num)=>{
    if (num>4){
        console.log(newNums.push(num));
        
    }
})



// console.log(newNums);
