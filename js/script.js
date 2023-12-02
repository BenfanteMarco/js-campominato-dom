// recupero il button
const playBtn = document.getElementById('play');

// aggiungo il click al button
playBtn.addEventListener('click', function(){
    // chiamata funzione createnewgame
    createNewGame();
})

// funzione che crea la grafica della cell
function createCell(num){
    // create div class = square
    const square = document.createElement('div');
    square.classList.add('square');
    square.innerText = num;

    return square
}

// funzione per generare la grid
function createNewGame(){
    // take grid from html
    const grid = document.getElementById('grid');

    // fare in modo che crea solo una griglia e non di più
    grid.innerHTML = '';

    for(let i=1; i<=100; i++){
        // create a cell
        let cell = createCell(i);

        // quando clicchi la cell si colora (metterlo prima dell'appenChild)
         cell.addEventListener('click', function(){
            this.classList.add('clicked');
         })

        // add cell to grid
        grid.appendChild(cell); 
    }
}