
    function playEasy(){ // open the game at the easy level
        
            location.replace("game.html?playEasy");
            
            
    }
    function playMedium(){//open the game on the medium level
        
        location.replace("game.html?playMedium");
}
function playHard(){ //open the game on the hard level
        
    location.replace("game.html?playHard");
}



// function fullTheSudoku(mat){// function that insert the numbers of sudoku game into each cell of the table
//     table= document.getElementById('table');
//     let number=0;
//     for(r = 0; r < table.rows.length; r++){
//         for(c = 0;c < table.rows[r].cells.length; c++){
//            table.rows[r].cells[c].innerHTML = mat[r][c];
            
//         }
//     }
    
// }
// fullTheSudoku([[9,1,4,7,8,2,3,6,5],
//             [3,8,5,4,1,6,7,9,2],
//             [7,2,6,5,9,3,4,1,8],
//             [8,9,2,6,3,7,5,4,1],
//             [4,6,3,2,5,1,8,7,9],
//             [5,7,1,9,4,8,2,3,6],
//             [1,4,8,3,2,9,6,5,7],
//             [2,5,7,1,6,4,9,8,3],
//             [6,3,9,8,7,5,1,2,4]]);