'use strict'

// Sintaxe 1: função anonima
const exemplo1 = function(){
    console.log('anonima');
}

//Chamado/invocando a função
exemplo1();

// Sintaxe 2: função nomeada/declarada
function exemplo2(){
    console.log('nomeada')
}

exemplo2()

// Sintaxe 3: arrow function (função flech/seta)
const exemplo3 = () => {
    console.log('arrow');
}

exemplo3()

/* Obs: Funções (qualquer sintaxe) tambem podem trabalhar cp, parametros/argumentos.

Qunado uma função precisad evalores/dados para algum tipo de processamento, ela recebe parametras/argumentos entre os parenteses.

Geralmente, ao termino do processamento dos parametros, a função "retorna" para fora um resultado*/

/* exemplos variados */

//função com parametros
function somar(valor1, valor2){
    /* Ao receber valores (parametros), a função proimeiro calcula depois desenvolvi o resultado */
    return valor1 + valor2
}

console.log( somar(10, 5))
console.log( somar(143, 5))
console.log( somar(18, 5))

console.log('============');

/* Formatação de valores monetários reais */
let preco = 5000
let desconto = preco * 0.10 //10%
let precoFinal = preco - desconto

function formatar(valor){
    /* Constante/variavel de escopo LOCAL, ou seja, sópode ser usada aqui dentro desta função */

    const opcoes = {
        style:'currency',
        currency: 'BRL'
    }
    return new Intl.NumberFormat('pt-br', opcoes).format(valor)
}


console.log(`preço: ${formatar(preco)}`);
console.log(`desconto: ${formatar(desconto)}`);
console.log(`preço fin: ${formatar(precoFinal)}`);

console.log("--------------------");

/* Sintaxe 3: Arrow Function
Sintaxe moderna para funções no JavaScript, bastante usada em biblioteca/frameworks como React, Reactive Native, Angular, Vue e etc.

A sintaxe geral é:

const algumNome - () => {};

No entanto, esta sintaxe pode ser simplificada em alguns casos
*/

//versão 1
/* function dobra(valor) {
    return valor * 2
} */

//versão 2 (arrow function)
const dobra = valor =>  valor * 2

// Chamada
console.log( dobra(10));
console.log( dobra(55));
console.log( dobra(32));

console.log('--------------------------------');

// Funções como métodos/comportamentos de Objetos
let pessoa = {
    nome:'fulano',
    idade: 25,
    verificaIdade() {
        if (PermissionStatus.idade >= 18) {
            return 'maior'
        } else {
            return 'menor'
        }
    }
}

console.log(pessoa.nome);
console.log(`É ${pessoa.verificaIdade()}`);