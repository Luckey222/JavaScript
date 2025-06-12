const Book={
    name: "Laxman",
    "full name":"Laxman bhattarai",
    age: 25,
    location: "bharatpur",
    email:"example@gmail.com",
    isLoggedIn:false,
    getPrice:function ( ) {
        console.log(this.getPrice);
        
        
    }
    
}
 console.log(Book);


 const {name,email,age}= Book;// destrocture the object 
 console.log(name,age,email);




 