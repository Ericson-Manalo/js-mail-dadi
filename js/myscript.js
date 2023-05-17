/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Teniamo presente che per il gioco dei dadi non serviranno gli array, ma per l'esercizio delle mail.... */

let numPlayer = Math.floor(Math.random()*(7-1)+1);
console.log('Il giocatore ha: ' +numPlayer);

let numComputer = Math.floor(Math.random()*(7-1)+1);
console.log('Il computer ha: ' +numComputer);

// creare una condizione per la quale si stabilisce chi ha vinto in base al risultato del numero che uscirà

if(numPlayer > numComputer){
    console.log('Il giocatore ha vinto!');
} else if ( numPlayer < numComputer){
    console.log ('Il computer ha vinto!');
}else{
    console.log ('Pareggio!');
}
