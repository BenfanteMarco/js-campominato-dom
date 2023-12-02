// recupero il button
const playBtn = document.getElementById('play');

// aggiungo il click al button
playBtn.addEventListener('click', function(){
    // chiamata funzione createnewgame
    createNewGame();
})

// funzione che crea la grafica della cell
function createCell(){
    // create div class = square
    const square = document.createElement('div');
    square.classList.add('square');

    return square
}

// funzione per generare la grid
function createNewGame(){
    // take grid from html
    const grid = document.getElementById('grid');
    for(let i=1; i<=100; i++){
        // create a cell
        let cell = createCell();

        // add cell to grid
        grid.appendChild(cell); 
    }
}