// definisco la variabile che mi collega all'html
const diceGame = document.getElementById('dice-game');

// definiscpo la variabile che mi indica il numero di giocatori scelto dall'utente
const playerNumber = parseInt(prompt('Inserisci il numero di giocatori'));

// definisco l'array dei numeri estratti
const numList = [];

// definisco un ciclo for per ripetere l'estrazione randomica di numeri per il numero di giocatori scelto dall'utente
for (let i = 1; i <= playerNumber; i++) {
    let num = Math.floor(Math.random() * 6) + 1;
    // inserisco i numeri nell'array
    numList.push(num);
    // numList.push(`player${i}_${num}`);
}

// definisco la funzione che indica il numero piuù grande dell'array
let winnerNumber = (Math.max(...numList));

// definisco la funzione che associa al numero vincente il primo giocatore che lo ha estratto
let winnerPlayer = parseInt(numList.indexOf(winnerNumber));

// stampo a schermo l'esito del gioco
diceGame.append('Player' + (winnerPlayer + 1));