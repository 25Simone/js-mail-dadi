// definisco l'elenco delle email che possono accedere
const emailList = ["pincopallino@gmail.com", "gino@hotmail.it", "perryornitorinco@gmail.com", "mauriziosenzacollo@libero.it"];

// definisco la variabile flag
let flag = false;

// chiedo all'utente la sua email
let userEmail = prompt('Inserisci qui la tua email');

// confronto l'email dell'utente con l'array delle email che possono accedere
for (let i = 0; i < emailList.length; i++) {
    if (userEmail === emailList[i]) {
        flag = true;
    }
}

if (flag) {
    console.log('email validata, accesso consentito!');
} else {
    console.log('Accesso non autorizzato!');
}