console.log(`Hello world!`);

const switchBtn = document.querySelector('input[type="number"]');
const gridContainer = document.querySelector('.container');

function addGridSquare () {
    let newSquare = document.createElement('div');
    newSquare.classList.add('gridSquare')
    gridContainer.appendChild(newSquare);
}

function removeGridSquare () {
    grid
}

console.log(switchBtn);
switchBtn.addEventListener('change', () => {
    let desiredSquareCount = document.querySelector('#squareCount').value;
    console.log(`Desired square count changed to ${desiredSquareCount}`);
    addGridSquare();
}
)