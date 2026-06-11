      let student=
    [
        {
        name:"Ram bhattarai",
        age:17,
        address:"Bharatpur-12,chitwan",
        email:"Ram_123@gmail.com",

        },
        {
        name:"Laxman bhattarai",
        age:28,
        address:"Bharatpur-12,chitwan",
        email:"lucky_123@gmail.com", 
        },
        {
        name:"Santosh bhattarai",
        age:28,
        address:"Bharatpur-12,chitwan",
        email:"santosh_123@gmail.com", 
        },

    ];
   let Name=student.map(s=>s.name);
   let Age=student.filter(s=>(s.age>27));
   let Email=student.find(s=>s.email==="lucky_123@gmail.com");
   let avg=student.reduce((total,s)=>total+s.age,0)/ student.length;
   console.log(Email);
   console.log(Name);
    console.log(Age);
     console.log(avg);
   
   
   