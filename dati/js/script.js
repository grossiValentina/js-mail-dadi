// genera un numero random da 1 a 6 per il giocatore
const numberPlayer = parseInt(Math.floor(Math.random() * 6 ) + 1);
console.log(numberPlayer);

// genera un numero random da 1 a 6 per il computer
const numberComputer = parseInt(Math.floor(Math.random() * 6 ) + 1 );
console.log(numberComputer);

// variabile globale
let result = "";

// ciclo for
if (numberPlayer > numberComputer) {
    result = "Hai vinto!";
} else {
    result = "Hai perso, riprova!";
}
console.log(result);

// estrazione di elemento da HTML
const resultElem = document.querySelector(".message");
console.log(resultElem);

// Otput


