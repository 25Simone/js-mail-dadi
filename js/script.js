// definisco l'elenco delle email che possono accedere
const emailList = ["pincopallino@gmail.com", "gino@hotmail.it", "perryornitorinco@gmail.com", "mauriziosenzacollo@libero.it"];

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
    console.log('email validata, accesso consentito!');
} else {
    console.log('Accesso non autorizzato!');
}

// ------------------------------------------------------------------------------------

// Genero un numero casuale da 1 a 6 per il computer e per il giocatore
let num1 = Math.floor(Math.random() * 6) + 1;
let num2 = Math.floor(Math.random() * 6) + 1;
if (num1 === num2) {
    console.log('Pareggio');
} else if (num1 > num2) {
    console.log('Vince 1');
} else {
    console.log('Vince 2');
}