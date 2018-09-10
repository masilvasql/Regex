const texto = 'Você precisa responder sim, não ou não sei!'
console.log(texto.match(/sim|não|sei/g)) //alternativa (OU) utilizando pipe |
console.log(texto.match(/sim|n.o|sei/g)) //alternativa (OU) utilizando pipe | + utilização do ponto que substitui qualquer caracter entre a letra inicial e final