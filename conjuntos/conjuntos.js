const texto = '1,2,3,4,5,6,a.b c!d?e[f'

//para definir uma classe ou um conjunto de caracteres você usa o []

const regexPares =/[02468]/g
console.log(texto.match(regexPares))

const regexConjunto = /[./-]/g 
const cnpj2 ='12.182.351/0001-40' 
console.log('cnpj2 -> ', cnpj2.replace(regexConjunto,''))

const texto2 = 'João não vai passear na moto.'
const regexComESemAcento = /n[ãa]./gi
console.log(texto2.match(regexComESemAcento))