// definisco l'elenco delle email che possono accedere
const emailList = ["pincopallino@gmail.com", "gino@hotmail.it", "perryornitorinco@gmail.com", "mauriziosenzacollo@libero.it"];

// definisco la variabile che mi collega all'html
const loginResult = document.getElementById('email-login');

// definisco la variabile flag
let flag = false;

// chiedo all'utente la sua email
let userEmail = prompt('Inserisci qui la tua email');

// confronto l'email dell'utente con l'array delle email che possono accedere
// uso il ciclo for per definire un contatore che cammini nell'array
for (let i = 0; i < emailList.length; i++) {
    // uso il ciclo if per confrontare la "userEmail" con i valori dell'array
    if (userEmail === emailList[i]) {
        flag = true;
    }
}

// stampo i risultati in base all'esito del confronto
if (flag) {
    loginResult.append('email validata, accesso consentito!');
} else {
    loginResult.append('Accesso non autorizzato!');
}

// ------------------------------------------------------------------------------------

// definisco la variabile che mi collega all'html
const diceGame = document.getElementById('dice-game');

// Genero due numeri casuali da 1 a 6
// num1 per il computer
let num1 = Math.floor(Math.random() * 6) + 1;

// num2 per il giocatore
let num2 = Math.floor(Math.random() * 6) + 1;

// uso un ciclo if per confrontare i due numeri casuali e determinando il vincitore
if (num1 === num2) {
    diceGame.append('Pareggio');
} else if (num1 > num2) {
    diceGame.append('Vince il computer');
} else {
    diceGame.append('Vince il giocatore');
}