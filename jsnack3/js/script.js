// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// Faccio un ciclo for per generare 10 prompt per l'utente e ne sommo i valori

let userNumber
let result = 0

for ( let i = 0; i < 10; i++ ) {
    userNumber = parseInt(prompt('Dammi un numero'))
    result += userNumber
}

// Stampo il risultato in pagina

document.getElementById('page_result').innerHTML = 'Risultato della somma = ' + result

