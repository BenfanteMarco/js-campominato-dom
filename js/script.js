// recupero il button
const playBtn = document.getElementById('play');

// aggiungo il click al button
playBtn.addEventListener('click', function(){
    // chiamata funzione createnewgame
    createNewGame();
})

// funzione che crea la grafica della cell
function createCell(num, cells_in_row){
    // create div class = square
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `calc(100% / ${cells_in_row})`;
    square.style.height = square.style.width;

    square.innerText = num;
    
    return square
}

// funzione per generare la grid
function createNewGame(){
    // take grid from html
    const grid = document.getElementById('grid');
    
    // take select from html
    const difficulty = document.getElementById('difficulty');
    // dichiaro variabile collegata alla value
    let level = parseInt(difficulty.value);

    // costante delle bombe
    const NUMBER_OF_BOMBS = 16;
    
    // selezione della difficoltà
    
    // dichiaro i numberi dlle cell in base alla difficoltà
    let cellsNumber;
    let cellsPerRow;
    
    // utilizzio switch per la selezione del livello (rivedi a che serve switch) (switch serve per non utilizzare per forza if else)
    switch(level){
        case 1:
            cellsNumber = 100;
            break;
        case 2:
            cellsNumber = 81;
            break;
        case 3:
            cellsNumber = 49;
            break; 
    }

    // faccio la radice quadrata al contrario
    cellsPerRow = Math.sqrt(cellsNumber); // quindi la radie di 81 è 9

    // fare in modo che crea solo una griglia e non di più
    grid.innerHTML = '';
    
    // chiamata funzione che crea la grid
    createGrid(cellsNumber, cellsPerRow);
    
    // array delle bombs
    const bombs = generateBombsList(NUMBER_OF_BOMBS);
    console.log(bombs);

    // funzione che crea la grid
    function createGrid(cells_number, cells_in_row){
        // crea la grid con le cell
        for(let i=1; i<=cells_number; i++){
            // create a cell
            let cell = createCell(i, cells_in_row);
    
            // quando clicchi la cell si colora (metterlo prima dell'appenChild)
            cell.addEventListener('click', function(){
                this.classList.add('clicked');
                console.log('Cell number: ' + this.innerText)
            })
    
            // bomb clicked red
            cell.addEventListener('click', function(){
                if(!bombs.includes(i)){
                    this.classList.add('clicked');
                } else{
                    this.classList.add('clicked-bomb');
                }
            })
    
            // add cell to grid
            grid.appendChild(cell); 
        }
    }
        
}

// funzione che genera le bombe
function generateBombsList(NUMBER_OF_BOMBS){ // scritto in maiuscolo perchè è una costante il numero di bombe
    // array inizialmete vuoto
    let bombs = [];

    for(let i=0; i<NUMBER_OF_BOMBS; i++){
        // inserire nell'array vuoto un numero casuale
        // richiamo funzione che genera il numero unico
        bombs.push(generateUniqueNumber(bombs));
    }

    return bombs;
}

// funzione che genera un numero UNICO casuale per le bombe
function generateUniqueNumber(array_bombs){
    let checkNumber = false;
    let randomInt;

    while(checkNumber == false){ // oppure solo (!checkNumber)
        // genera numero
        randomInt = Math.floor(Math.random() * 100 + 1);

        // verifico che il numero non sia uguale
        if(array_bombs.includes(randomInt) == false){
            checkNumber = true;
        }
    }

    return randomInt;
}