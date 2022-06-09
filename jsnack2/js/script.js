// Chiedi un numero di 4 cifre all’utente nel prompt
//  e calcola la somma di tutte le cifre che compongono il numero. (modificato) 

let number = prompt('Dimmi un numero di 4 cifre')
let numberResult

for (let i = 0; i < number.length; i++) {
    numberResult = parseInt(number[0]) + parseInt(number[1]) + parseInt(number[2]) + parseInt(number[3])
}
console.log(numberResult)
