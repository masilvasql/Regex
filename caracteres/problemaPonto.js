const texto = `Bom\ndia`
console.log(texto.match(/.../gi))//
console.log(texto.match(/..../gi)) // o ponto não engloba o \n
console.log(texto.match(/.+\n.+/gi)) // uma solução seria essa

//dotall - algumas linguagens tem uma flag /exp/s, mas o JS não!