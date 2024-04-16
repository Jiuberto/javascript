'use strict'

/* vetor (array de uma dimensão) */

//Declarando array
const alunos = ["Midorya", "Todoroki", "Bakugo", "Uraraka"]

//exibindo a estrutura de array
console.log(alunos);

//acessando individualmente atravós de indice
console.log(alunos[0]);
console.log(alunos[3]);

const livro = ['Senhor dos Aneis', 'Cronicas de Olam', 'Cronicas de Nárnia', 'Ortodoxia','Cartas de um Diabo ao seu Aprendiz', 'Caminhando com Peregrina', 'Manso e Humilde']

console.log(livro);

let mensagem = `Já li ${livro[1]} e ${livro[6]} mas falta terminar ${livro[4]}`

console.log(mensagem);

/* Matriz (array com maisde uma dimensão) */
const tecnologias = [
    ['HTML5','CSS3','JS'],
    ['PHP','SQL','NODE.JS']
];

console.log(tecnologias[0][1], tecnologias[1][0]);

