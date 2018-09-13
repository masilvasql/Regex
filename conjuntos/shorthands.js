const texto = `1,2,3,4,5,6,a.b c!d?e-	
f_g`

const cnpj = '12.182.351/0001-40'

console.log(texto.match(/\d/g)) // numeros [0-9]
console.log(texto.match(/\D/g)) //NÃO NÚMEROS [^0-9]

console.log(texto.match(/\w/g)) //caractéres [a-zA-Z0-9_]
console.log(texto.match(/\W/g)) //não caracteres [a-zA-Z0-9_]
console.log(cnpj.replace(/\W/g,''))

console.log(texto.match(/\s/g)) //espaços [ \t\n\r\f]
console.log(texto.match(/\S/g)) // não espaços [^ \t\n\r\f]



