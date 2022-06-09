// Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e
// in verde i numeri pari.

// Creo l'array di numeri
let numbers = [0, 1, 2, 3, 4, 5]

// Dichiaro la variabile thisNumber, scorro l'array col ciclo for e stampo in pagina
let thisNumber

for( let i = 0; i < numbers.length; i++ ) {
    let thisNumber = numbers[i]
    if (thisNumber % 2 === 0) {
        document.getElementById('green').innerHTML += thisNumber + ' '
    } else {
        document.getElementById('red').innerHTML += thisNumber + ' '
    }

}

