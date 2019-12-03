
debugger
function difficultyLevel(mat){
let difflevel= location.search;
let randomrunrow;
let randomruncoll;
let numberstoclear;
// var mat = 0;
let empty;


if(difflevel=='?playEasy'){
    numberstoclear=20;    
}
if(difflevel=='?playMedium'){
    numberstoclear=40;    
}
if(difflevel=='?playHard'){
    numberstoclear=60;
}
while(numberstoclear>0){
    randomrunrow= Math.floor(Math.random()*9);
    randomruncoll= Math.floor(Math.random()*9);
    // console.log(mat[randomrunrow][randomruncoll]);

    if(mat[randomrunrow][randomruncoll]!=""){
        mat[randomrunrow][randomruncoll]='';
        numberstoclear--;
        
    }
  
}
table= document.getElementById('table');
let number=0;
for(r = 0; r < table.rows.length; r++){
    for(c = 0;c < table.rows[r].cells.length; c++){
       table.rows[r].cells[c].innerHTML = mat[r][c];
        
    }
} 
} 





// debugger

function fullTheSudoku(mat){  // function that insert the numbers of sudoku game into each cell of the table
   
    table= document.getElementById('table');
    let number=0;
    for(r = 0; r < table.rows.length; r++){
        for(c = 0;c < table.rows[r].cells.length; c++){
           table.rows[r].cells[c].innerHTML = mat[r][c];
            
        }
    } 
    console.log(mat);
       
  difficultyLevel(mat);

}  

fullTheSudoku([[9,1,4,7,8,2,3,6,5],
            [3,8,5,4,1,6,7,9,2],
            [7,2,6,5,9,3,4,1,8],
            [8,9,2,6,3,7,5,4,1],
            [4,6,3,2,5,1,8,7,9],
            [5,7,1,9,4,8,2,3,6],
            [1,4,8,3,2,9,6,5,7],
            [2,5,7,1,6,4,9,8,3],
            [6,3,9,8,7,5,1,2,4]]);

difficultyLevel([[9,1,4,7,8,2,3,6,5],
    [3,8,5,4,1,6,7,9,2],
    [7,2,6,5,9,3,4,1,8],
    [8,9,2,6,3,7,5,4,1],
    [4,6,3,2,5,1,8,7,9],
    [5,7,1,9,4,8,2,3,6],
    [1,4,8,3,2,9,6,5,7],
    [2,5,7,1,6,4,9,8,3],
    [6,3,9,8,7,5,1,2,4]]);



            
            






