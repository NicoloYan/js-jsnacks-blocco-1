// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

// Creo un array vuoto
let numbers = []

let userNumber

// Genero i prompt per l'utente per ottenere i numeri
    // se il numero è dispari, popolo l'array   

for ( let i = 0; i < 6; i++ ) {
    userNumber = parseInt(prompt('Dammi un numero'))
    if (userNumber % 2 != 0) {
        numbers.push(userNumber)
    }
}

// Stampo in console l'array con gli eventuali numeri dispari
console.log(numbers)