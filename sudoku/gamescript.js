fullTheSudoku([
    [9, 1, 4, 7, 8, 2, 3, 6, 5],
    [3, 8, 5, 4, 1, 6, 7, 9, 2],
    [7, 2, 6, 5, 9, 3, 4, 1, 8],
    [8, 9, 2, 6, 3, 7, 5, 4, 1],
    [4, 6, 3, 2, 5, 1, 8, 7, 9],
    [5, 7, 1, 9, 4, 8, 2, 3, 6],
    [1, 4, 8, 3, 2, 9, 6, 5, 7],
    [2, 5, 7, 1, 6, 4, 9, 8, 3],
    [6, 3, 9, 8, 7, 5, 1, 2, 4]
]);

difficultyLevel([
    [9, 1, 4, 7, 8, 2, 3, 6, 5],
    [3, 8, 5, 4, 1, 6, 7, 9, 2],
    [7, 2, 6, 5, 9, 3, 4, 1, 8],
    [8, 9, 2, 6, 3, 7, 5, 4, 1],
    [4, 6, 3, 2, 5, 1, 8, 7, 9],
    [5, 7, 1, 9, 4, 8, 2, 3, 6],
    [1, 4, 8, 3, 2, 9, 6, 5, 7],
    [2, 5, 7, 1, 6, 4, 9, 8, 3],
    [6, 3, 9, 8, 7, 5, 1, 2, 4]
]);

let counter=0;
checkBoard([
    [9, 1, 4, 7, 8, 2, 3, 6, 5],
    [3, 8, 5, 4, 1, 6, 7, 9, 2],
    [7, 2, 6, 5, 9, 3, 4, 1, 8],
    [8, 9, 2, 6, 3, 7, 5, 4, 1],
    [4, 6, 3, 2, 5, 1, 8, 7, 9],
    [5, 7, 1, 9, 4, 8, 2, 3, 6],
    [1, 4, 8, 3, 2, 9, 6, 5, 7],
    [2, 5, 7, 1, 6, 4, 9, 8, 3],
    [6, 3, 9, 8, 7, 5, 1, 2, 4]
]);


function fullTheSudoku(mat) { // function that insert the numbers of sudoku game into each cell of the table
    table = document.getElementById('table');
    let number = 0;
    for (r = 0; r < table.rows.length; r++) {
        for (c = 0; c < table.rows[r].cells.length; c++) {
            document.getElementById(`r${r}c${c}`).value = mat[r][c];
        }
    }
    // difficultyLevel(mat);
}

//function that delete random numbers from the cells according the level of the game that the user chose.

function difficultyLevel(mat) {
    let difflevel = location.search;
    // console.log(difflevel);
    let randomrunrow;
    let randomruncoll;
    let numberstoclear;
    // var mat = 0;
    if (difflevel == '?playEasy') { //if choose easy
        numberstoclear = 20;
    }
    if (difflevel == '?playMedium') { //if choose medium
        numberstoclear = 40;
    }
    if (difflevel == '?playHard') { // if choose hard
        numberstoclear = 60;
    }
    //  debugger
    while (numberstoclear > 0) {
        console.log(numberstoclear);

        randomrunrow = Math.floor(Math.random() * 9); // entering random number from 0-9 into a variable.
        randomruncoll = Math.floor(Math.random() * 9);
        console.log(mat[randomrunrow][randomruncoll]);
        let numToDelete = document.getElementById(`r${randomrunrow}c${randomruncoll}`).value
        // console.log(numToDelete)
        if (numToDelete != "") {
            document.getElementById(`r${randomrunrow}c${randomruncoll}`).value = "";
            document.getElementById(`r${randomrunrow}c${randomruncoll}`).removeAttribute('readonly');

        }
        numberstoclear--;

    }
}

// debugger

function goBack() {
    location.replace("difficulty.html");
    
}
// debugger

function checkBoard(mat) {
    for (r = 0; r < table.rows.length; r++) {
        for (c = 0; c < table.rows[r].cells.length; c++) {
            console.log(mat[r][c]);

            if (document.getElementById(`r${r}c${c}`).value == mat[r][c]) {
                counter++;
            }

        }
    }
    console.log(counter);
    
    if (counter == 81) {
        // window.alert('champ!');
        document.table.style.backgroundColor='green';
    } else {
        document.table.style.backgroundColor='red';
    }
}

function playAgain(){
    location.reload();

}