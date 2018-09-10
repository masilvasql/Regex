const texto = 'a   b'

console.log(texto.match(/a   b/)) // ok
console.log(texto.match(/a\s\s\sb/)) // ok
console.log(texto.match(/a\s+b/)) // forma mais simples, o simbolo de MAIS, múltiplica o s pelo total de vezes em que existir entre 'a' e 'b' 
console.log(texto.match(/a {3}b/)) // {3} = quantificador de espaços neste caso
console.log(texto.match(/a\s{3}b/)) // {3} = quantificador de espaços em cima do \s 