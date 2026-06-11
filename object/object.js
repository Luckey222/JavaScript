         let   super_hero={
              Hanuman : { name:"hanuman",
              age: "imortal ",
              address:"Sumeru mountain",
              contact: "Impossible",
              show(){
                console.log(this.address);
                
              },
        },
     Ram :
                {
                    name:"Ram",
                      age: "5000 year ",
              address:"Aayodhya",
              contact: "Impossible",
                }
            };
       
        
            console.table([
                super_hero.Hanuman,
                super_hero.Ram
            ]);
                 super_hero.Hanuman.show();