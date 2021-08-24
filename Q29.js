//map data structure
'use strict'  
var colors = new Map([  
   ['1', 'Red'],  
   ['2', 'Green'],  
   ['3', 'Yellow'], 
   ['4', 'Violet']  
]); 
for (let col of colors.values()) { 
    console.log(col); 
} 
console.log(" ") 
for(let col of colors.entries())  
console.log(`${col[0]}: ${col[1]}`);