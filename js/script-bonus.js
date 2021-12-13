// definisco la variabile che mi collega all'html
const diceGame = document.getElementById('dice-game');

// definiscpo la variabile che mi indica il numero di giocatori scelto dall'utente
const playerNumber = parseInt(prompt('Inserisci il numero di giocatori'));

// definisco l'array dei numeri estratti
const numList = [];

// definisco un ciclo for per ripetere l'estrazione randomica di numeri per il numero di giocatori scelto dall'utente
for (let i = 0; i < playerNumber; i++) {
    let num = Math.floor(Math.random() * 6) + 1;
    // inserisco i numeri nell'array
    numList.push(num);
}

let winnerNumber = (Math.max(...numList));