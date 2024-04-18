'use strict'

/* Loops mais comuns

- while (enquanto)
- for (para)

Normlmente, os loops são controlados através de uma variável contadora ou de alguma condição lógica para que o loop seja interrompido
*/

// loop while
/* let contador = 1

while (contador <= 5) {
    console.log('Valor do contador '+contador);
    contador++
} */

//loop for
/* for (let i = 1; i <= 10; i++) {
    console.log('contador '+i);
} */

/* obs: normalmente, variáveis de controloles de repetição são chamados de i,j,k */

//loop para acessar array
const alunos = ['Midorya', 'Uraraka', 'Bakugo','Todoroki', 'Kirishima','Iida']

/* for (let i = 0; i < alunos.length; i++ ) {
    console.log(alunos[i]);
}

console.log(alunos[0]); */

//loop exclusivo do js para arrys: for/of
for(const aluno of alunos){
    console.log(aluno);
}

//loop exclusivo do js para objetos: for/in
const livro = {
    titulo: 'HTML5',
    autor: 'Maujor',
    site: 'https://maujor.com',
    ano: 2016
}

console.log('-----------');

for(const prop in livro){
    console.log(livro[prop]);
}
