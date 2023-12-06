const switchBtn = document.querySelector('input[type="number"]');
const gridContainer = document.querySelector('.container');
const gridSquare = document.querySelector('.gridSquare');

// Initial script to add squares
function drawGrid (squareCount) {
    console.log("drawGrid started");
    // Clear container
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
    addGridSquare(gridContainer, squareCount);
    let topRowSquares = document.querySelectorAll('.gridSquare');
    for (let i = 0; i < topRowSquares.length; i++) {
        addGridSquare(topRowSquares[i], squareCount);
    }
    updateHoverListeners();
}

function addGridSquare (container, count) {
    for (let i = 0; i < count; i++) {
        console.log("addGridSquare initiated");
        let newSquare = document.createElement('div');
        newSquare.classList.add('gridSquare')
        container.appendChild(newSquare);
    }
}

switchBtn.addEventListener('change', () => {
    let desiredSquareCount = document.querySelector('#squareCount').value;
    console.log(`Desired square count changed to ${desiredSquareCount}`);
    drawGrid(desiredSquareCount);
}
)

function updateHoverListeners () {
    gridSquares =  document.querySelectorAll('.gridSquare');
    console.log(gridSquares);
    gridSquares.forEach((square) => {
        console.log(square);
        square.addEventListener('mouseover', () => {
            square.classList.add('blackSquare');
        })
    })     
};

// Loads initial 4x4 grid
drawGrid(4)