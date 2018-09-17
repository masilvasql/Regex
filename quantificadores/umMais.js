const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'
const texto2= 'There is a big fog in NYC'

// + Um ou Mais 

const regex = /fogo+/gi

console.log(texto1.match(regex))
console.log(texto2.match(regex))

const texto3 = '0123456789f'

console.log(texto3.match(/[0-9]/g))
console.log(texto3.match(/[0-9]+/g))
console.log(texto3.match(/\d+/g))

const texto4 = '12.182.351/0001-40'
console.log(texto4.replace(/\D/g,''))