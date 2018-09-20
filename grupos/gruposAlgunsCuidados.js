const texto = 'Pedrinho (filho de pedro Silva) é doutor da ABCabc!'
console.log(texto.match(/[(abc)]/gi)) // não é um grupo
console.log(texto.match(/([abc])/gi))
console.log(texto.match(/(abc)/gi))
console.log(texto.match(/(abc)+/gi))