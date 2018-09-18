const texto = `CPF dos aprovados:
- 600.567.890-12
- 765.998-345-23  
- 080.444.123-28
- 998.534.996-00` 

console.log(texto.match(/\d.*/g))