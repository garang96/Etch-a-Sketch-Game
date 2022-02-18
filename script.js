const gridSquares = document.querySelector('.grid-squares');
const gridRange = document.querySelector('.grid-range');
const generate = document.getElementById('generate');
const clear = document.getElementById('clear');

let currentGridSize = gridRange.defaultValue;
console.log(gridSquares.offsetWidth)
let gridCell;

//function to track the slider input value

const sliderValue = (e) => {
    console.log(e.target.value);
    currentGridSize = e.target.value;
}

//function to create grid cells and add them to grid container

const gridGame = (givenSize) => {
    let cellWidth = (gridSquares.offsetWidth / currentGridSize) + `px`;
    gridSquares.style.setProperty('--gridColumns', givenSize);
    gridSquares.style.setProperty('--cellWidth', cellWidth);
    for (let i = 1; i <= givenSize; i++) {
        for (let j = 1; j <= givenSize; j++) {
            gridCell = document.createElement('div');
            gridCell.classList.add('cell');
            gridSquares.appendChild(gridCell);
        }
    }
}

//function to make grid cells appear in the grid container

const generateCells = (e) => {
    gridGame(+currentGridSize);
    e.target.style.color = 'gray';
    e.target.style.background = '#fefefe';
    clear.style.color = '#fff';
    clear.style.background = 'red';
}

//function to clear grid cells from the grid container
const clearCells = (e) => {
    gridSquares.innerHTML = '';
    e.target.style.color = 'gray';
    e.target.style.background = '#fefefe';
    generate.style.color = '#fff';
    generate.style.background = 'orange';
}

generate.addEventListener('click', generateCells);
clear.addEventListener('click', clearCells);
gridRange.addEventListener('input', sliderValue);