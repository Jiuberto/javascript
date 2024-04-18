'use strict'

/* Comandos utilizados em condicionais
if (se)
else (senão)
else if (senão se)

switch/case (escolha/caso)
*/

/* operadores relacionais
> maior
< menor
>= maior ou igual
<= menor ou igual
!= diferente
== igual
*/



//condicionais simples
let numero = 10

//variavel para guardar a palavra "maior" ou "menor"
let texto // undefined/indefinida

if(numero > 5){
    console.log("Verdaeira");
}

//condicional composta

let usuario = 'Agostinho'
let idade = 18;

if(idade >= 18){
    texto = 'maior'
    //console.log('maior de idade');
} else {
    texto = `menor`
    //console.log('menor de idade');
}

console.log(`${texto}`);

//alternativa
console.log('');
let texto2 = idade >= 18 ? 'maior' : 'menor'

console.log(texto2);

//alpicando o ternário direto dento da template string
console.log(`${usuario} é ${idade >= 18 ? 'maior' : 'menor'}`);

//condicional encadeada/sucesiva
let texto3
if (idade >= 18) {
    texto3 = 'idoso(a)'
} else if (idade >= 18) {
    texto3 = 'idoso(a)'
} else {
    texto3 = 'idoso(a)'
}
console.log(`${usuario} tem ${idade} anos é ${texto3}`)

console.log('-----------');

//condicional switch/case
let opcao = 1
let mensagem

switch (opcao) {
    case 1: mensagem = 'informações'; break;
    case 2: mensagem = 'informações'; break;
    case 3: mensagem = 'informações'; break;

    default: mensagem = 'falar com atendente'
        break;
}
console.log("opção escolhida " + opcao);
console.log('mensagem ' + mensagem);