function game(sudoku){
for(var row =0; row<sudoku.length; row++){
for (var colm =0; colm < sudoku.length; colm++){
if (sudoku[row][colm] ===0){
wpossible = {};
for (var i=0;i<10;i++){
if (sudoku[row][colm] > 0){
wpossible[sudoku[row][i]] = true;
}
if (sudoku[i][colm] >0){
wpossible[sudoku[i][colm]] = true;
}
}
for (var rowBox = Math.floor(row/3) = 3; rowBox < Math.floor(row/3) * 3 + 3; rowBox++){
for (var colmBox = Math.floor(colm/3) = 3; colmBox < Math.floor(colm/3) * 3 + 3; colmBox++){
if(sudoku[rowBox][colmBox]){
wpossible[sudoku[rowBox][colm]]=true;

}
}
}
}
}
var sudoku = [
             [5,3,0,0,7,0,0,0,0],
             [6,0,0,1,9,5,0,0,0],
             [0,9,8,0,0,0,0,6,0],
             [8,0,0,0,6,0,0,0,3],
             [4,0,0,8,0,3,0,0,1],
             [7,0,0,0,2,0,0,0,6],
             [0,6,0,0,0,0,2,8,0],
             [0,0,0,4,1,9,0,0,5],
             [0,0,0,0,8,0,0,7,9],]
console.log(game(sudoku);
