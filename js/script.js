const container = document.querySelector('.container');
const button = document.querySelector('.btn');

document.addEventListener('DOMContentLoaded', () => {
    createGrid(16);
});

function changeGridSize() {
    let newSize = parseInt(prompt('Please Enter the new Size'));
    if (newSize > 100) {
        newSize = parseInt(prompt('Please enter a size less than 100'));
    } else if (newSize === null) {
        newSize = parseInt(prompt('Please enter the new Size'));
    } else if (isNaN(newSize)) {
        newSize = parseInt(prompt('Please enter a valid number'));
    } else {
        container.innerHTML = '';
        createGrid(newSize);
    }
}

function generateColor() {
    return `hsl(${Math.floor(Math.random() * 359)} ,100%, 50%)`;
}

function changeColor(e) {
    e.target.style.backgroundColor = generateColor();
}

function createGrid(girdSize) {
    for (let i = 1; i <= girdSize * girdSize; i++) {
        const div = document.createElement('div');
        container.appendChild(div);
        container.style.cssText = `grid-template-columns: repeat(${girdSize}, 1fr)`;
        div.addEventListener('mouseenter', changeColor);
    }
}

button.addEventListener('click', changeGridSize);
