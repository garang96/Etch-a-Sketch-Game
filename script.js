const gridSquares = document.querySelector('.grid-squares');
const gridRange = document.querySelector('.grid-range');
const generate = document.getElementById('generate');
const clear = document.getElementById('clear');
const sizes = document.querySelectorAll('.size');

let currentGridSize = gridRange.defaultValue;
// console.log(gridSquares.offsetWidth)
let gridCell;

//function to track the slider input value

const sliderValue = (inputVal) => {
    // console.log(e.target.value);
    currentGridSize = inputVal.target.value;
    generate.disabled = false;
    generate.style.background = 'orange'
    generate.style.color = '#fff';
    for (const size of sizes) {
        size.innerText = currentGridSize;
    }
    clearCells();
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

//function to display grid cells in grid container

const generateCells = (e) => {
    gridGame(+currentGridSize);
    e.target.style.color = 'gray';
    e.target.style.background = '#fefefe';
    e.target.disabled = true;
    clear.style.color = '#fff';
    clear.style.background = 'red';
    clear.disabled = false;
}

//function to clear grid cells from the grid container
const clearCells = (e) => {
    gridSquares.innerHTML = '';
    e.target.style.color = 'gray';
    e.target.style.background = '#fefefe';
    e.target.disabled = true;
    generate.style.color = '#fff';
    generate.style.background = 'orange';
    generate.disabled = false;

}

const generateRandomRGB = () => {
    const randomColorValue1 = Math.floor(Math.random() * 256);
    const randomColorValue2 = Math.floor(Math.random() * 256);
    const randomColorValue3 = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${randomColorValue1}, ${randomColorValue2}, ${randomColorValue3})`;
    return randomColor;
}

//function to display hover effect

const hoverEffect = (hover) => {
    const target = hover.target;
    if (target.className !== 'cell') return;
    target.style.background = generateRandomRGB();
}

const unhoverEffect = (unhover) => {
    const target = unhover.target;
    target.style.background = '#fefefe'
}

generate.addEventListener('click', generateCells);
clear.addEventListener('click', clearCells);
gridRange.addEventListener('input', sliderValue);
gridSquares.addEventListener('mouseover', hoverEffect);
gridSquares.addEventListener('mouseout', unhoverEffect);