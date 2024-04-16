

/* modo estrito. Ao fazer isso, a linguiagem passa a analisar se voce declarou varíaveis e não está usando palavras-reservadas.
Se isso acontecer, erro serão exibidos. */
'use strict';

// comentarios de apenas uma linha
/* aceita multiplas linhas (shift alt a) */

// Comando de saida de dados
console.log("Hello world")
console.log('Hello world')

/* manipular dados */

// variaveis (os nomes não podem ter caractere especial)
let curso = "html e CSS3"; // string, literal (entre aspas)
let ano = 2024; // numeros (inteiros/real), sem aspas
let disciplina = "logica"
console.log(disciplina);

// constantes
const escola = "Senac Penha";

//constantes sempre devem ter valor
const materia = "portugues"

//saida de dados
console.log(curso);
console.log(ano);
console.log(escola);

// let nomeDaVariavel = "algum valor"
// console.log(nomeDaVariavel);

// palavras-chaves de uso reservado: public, implements, rivate, arguments 
// let public = 'Palavra-reservada!'
// console.log(public);



/* saida de dados personalizado */
/* Estor fazendo curso de html e css3 no senac penha */

//concatenação (antiga)
console.log('Estou fazendo o curso de ' + curso + ' no ' + escola + ".");

//templete literal/string (moderna)
console.log(`Estou fazendo o curso de ${curso} no ${escola}.`);

//Montando a frase antes de dar saída nela
let mensagem = `Estou fazendo o curso de ${curso} no ${escola}.`;

//Dando saída na frase já montada
console.log(mensagem)

/* operações matematicas basicas */
let valor1 = 10 //inteiro
let valor2 = 5 // inteiro
let valor3 = 1200.55 // decimal

//operaçoes
let soma = valor1 + valor2
let subtracao = valor1 - valor2
let multiplicacao = valor1 * valor2
let divisao = valor1 / valor2

console.log("Soma: " + soma);
console.log("Subtração: " + subtracao);
console.log("Multiplicação: " + multiplicacao);
console.log("Divisão: " + divisao);
