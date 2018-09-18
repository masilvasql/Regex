const texto = `Os emails dos convidados são:
- teste@email.com.br
- outro@email.com
- marcelo@gmail.com
- uniarp@edu.br
- rafa.sampa@yahoo.com.br`

console.log(texto.match(/\n.*/g))
console.log(texto.match(/[a-zA-Z0-9]+@.*/g))
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}(\.\w{2})?/g))
