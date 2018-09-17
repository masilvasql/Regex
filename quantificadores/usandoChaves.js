const texto = 'O João recebeu 120 milhões apostando o valor 6 9 21 35 46.'

// para definir um quantificador usa {}

console.log(texto.match(/\d{1,2}/gi))
console.log(texto.match(/[0-9]{2}/gi))
console.log(texto.match(/\d{1,}/g))
console.log(texto.match(/\w{7}/gi))
console.log(texto.match(/[\wõ]{7,}/gi))


const senha = '12345'

if(senha.match(/\d{7}/gi)){
    console.log(senha.match(/\d{7}/gi))
    console.log('Senha válida')
}else{
    console.log(senha.match(/\d{7}/gi))
    console.log('A senha possui menos que 7 dígitos')
}