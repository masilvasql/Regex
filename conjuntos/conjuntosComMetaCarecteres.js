const texto = '.$+*?-'
console.log(texto.match(/[+.?*$]/g)) //nao precisa de scape dentro de um conjunto
console.log(texto.match(/[$-?]/g)) // isso é um intervalo (range)

//NÃO É UM INTERVALO
console.log(texto.match(/[$\-?]/g)) ///// utilizado o scape \ o menos não é mais um intervalo
console.log(texto.match(/[-?]/g))