const cnpj = '12.182.351.0001/40'
console.log(cnpj.replace(/\.|\//g,'')) //retira os pontos literais e a barra literal do cnpj

const cpf = '123.123.123-99'
console.log(cpf.replace(/\.|-/g,''))

const cep = '89.515-000'
console.log(cep.replace(/\.|-/g,''))

const celular ='(49)9.9999-9999'
console.log(celular.replace(/\(|\)|\.|-/g,''))
