const texto = '<div> Conteudo 01</div><div>Conteudo 02</div>'

// quantificadore são gulosos (greedy) por padrão...

console.log(texto.match(/<div>.+<\/div>/g))
console.log(texto.match(/<div>.*<\/div>/g))
console.log(texto.match(/<div>.{0,100}<\/div>/g))
console.log(texto.match(/<div>.*<\/div>/g))

// quantificadores NÃO gulosos (lazy)

console.log(texto.match(/<div>.+?<\/div>/g))
console.log(texto.match(/<div>.*?<\/div>/g))
console.log(texto.match(/<div>.{0,100}?<\/div>/g))
console.log(texto.match(/<div>.*?<\/div>/g))