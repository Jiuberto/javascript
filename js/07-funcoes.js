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
    return new Intl.NumberFormat('pt-br', {
        style:'currency',
        currency: 'BRL'
    }).format(valor)
}

console.log(`preço: ${formatar(preco)}`);
console.log(`desconto: ${formatar(desconto)}`);
console.log(`preço fin: ${formatar(precoFinal)}`);