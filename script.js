const gridSquares = document.querySelector('.grid-squares');
//const gridSize = document.querySelector('.grid-size');
const gridRange = document.querySelector('.grid-range');
const generate = document.getElementById('generate');
const clear = document.getElementById('clear');

let gridSize = gridRange.value;
console.log(gridSize);
let cellWidth = gridSquares.offsetWidth / gridSize;
console.log(cellWidth);


const gridGame = (givenSize) => {
    gridSquares.style.setProperty('--gridColumns', givenSize);
    gridSquares.style.setProperty('--cellWidth', cellWidth);
    for (let i = 1; i <= givenSize; i++) {
        for (let j = 1; j <= givenSize; j++) {
            const gridCell = document.createElement('div');
            gridCell.classList.add('cell');
            gridSquares.appendChild(gridCell);
        }
    }
}

gridGame(+gridSize);