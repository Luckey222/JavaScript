const books=[
    { title:'book one', genre:'friction',publish:1981,
         edition:2004  },

          { title:'book two', genre:'non friction',publish:1987,
             edition:2007    },
          { title:'book three', genre:'history',publish:1989, 
           edition:2010  },
          { title:'book four', genre:'comics',publish:1999, 
             edition:2014  },
       { title:'book five', genre:'history',publish:2000, 
                edition:2018  },
            { title:'book six', genre:'comis',publish:2007, 
                edition:2019  },
                  { title:'book seven', genre:'si-fi',publish:2009, 
                edition:2020  },
                  { title:'book eight ', genre:'friction',publish:2010, 
                edition:2021  },
                  { title:'book nine', genre:'comedy',publish:2011, 
                edition:2014  },          

];
// const userBooks=books.filter((bk)=>bk.genre==='friction')

const userBooks=books.filter((bk)=>bk.publish>=1980 && bk.genre=='history')
console.log(userBooks);
