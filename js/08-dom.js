'use strict'

/* Funções/métodos mais comuns para seleção de elementos no DOM

- getElementById()
Seleciona UM ELEMENTO através do atributo ID

- querySelector()
Seleciona um elemento através de um seletor baseado na lógica CSS

- querySelectorAll()
Seleciona varios elementos através de um seletor(es) baseado na lógica CSS

*/

//exemplo 1: getElementById
const legenda = document.getElementById('legenda')
console.log(legenda);

//exemplo2 = querySelector()
const titulo = document.querySelector('h1')
console.log(titulo);

const sobreg = document.querySelector('#sobre')
console.log(sobreg);

/* exer
1) Faça o acesso/seleção do h2 de back-end e mostre no console.

2)Faça o acesso/seleção apenas do h2 existente dentro da div com a classe 'editores' e mostre no console.
*/

const back = document.querySelector('.back-end')
console.log(back);

const ed = document.querySelector('.editores h2')
console.log(ed);

//exemplo 3 = querySelectorAll - funciona parecido com array
const h22 = document.querySelectorAll('p, a, p, ')
console.log(h22);