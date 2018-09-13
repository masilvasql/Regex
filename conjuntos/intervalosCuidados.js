const texto = 'ABC [abc] a-c 1234'

console.log(texto.match(/[a-c]/g))
console.log(texto.match(/a-c/g)) //não define o range, precisa estar dentro de []
console.log(texto.match(/[A-z]/g)) // os intervalos usam a ordem da tabela UNICODE

//tem que respeitar os intervalos da tabela UNICODE

//console.log(texto.match(/[a-Z]/g)) inválido
//console.log(texto.match(/[4-1]/g)) inválido