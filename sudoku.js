function gamesudo(generate){
       var fill = {};
for (var row = 0; row < generate.length ; row++){
for (var colm = 0; colm < generate.length ; colm++){
if(generate[row][colm]===0){
       fill = {};
       for(var i = 0; i < 9; i++){
              if(generate[row][i] > 0){
                     fill[generate[row][i]] = true;

              } 
              if(generate[i][colm]>0){
                     fill[generate[i][colm]]=true;              
               } 
              }
               for (var rowB = Math.floor(row/3)*3; rowB < Math.floor(row/3)*3+3; rowB++){
              for (var colmB = Math.floor(colm/3)*3; colmB < Math.floor(colm/3)*3+3; colmB++){
                     if (generate[rowB][colmB]){
                            fill[generate[rowB][colmB]] = true;
                     }

              }       
               }
               console.log(fill);

       }
}
       }
   }

 var generate = [
                [0,0,0,2,6,0,7,0,1],
                [6,8,0,0,7,0,0,9,0],
                [1,9,0,0,0,4,5,0,0],
                [8,2,0,1,0,0,0,4,0],
                [0,0,4,6,0,2,9,0,0],
                [0,5,0,0,0,3,0,2,8],
                [0,0,9,3,0,0,0,7,4],
                [0,4,0,0,5,0,0,3,6],
                [7,0,3,0,1,8,0,0,0]];
    console.log(gamesudo(generate));     

