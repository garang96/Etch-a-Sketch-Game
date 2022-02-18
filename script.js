const gridSquares = document.querySelector('.grid-squares');
//const gridSize = document.querySelector('.grid-size');
const gridRange = document.querySelector('.grid-range');
const generate = document.getElementById('generate');
const clear = document.getElementById('clear');

gridSize = gridRange.value;
console.log(gridSize);
let cellWidth = gridSquares.offsetWidth / gridSize;
console.log(cellWidth);