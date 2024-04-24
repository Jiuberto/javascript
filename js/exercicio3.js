'use strict'


let dolar = 5000
let cotacao = 5.16 

//(parametro) parmetros recebem dados que vairiam
function converterEmReais(valor) {
    return valor * cotacao
}

function formatar(valor, moeda, local) {
    const opcoes = {
        style: 'currency',
        currency: moeda
    };
    return new Intl.NumberFormat(local, opcoes).format(valor);
}

console.log(`Dólar: ${formatar(dolar, 'USD', 'en')}`);

// versão 1 (função como parametro para outra função) com formatação
console.log(`Em reais: ${formatar(converterEmReais(dolar), "BRL",'pt-br')}`);

// versão 2 (primeiro, guardamos o resultado da versão; depois passamos o resultado para a formatação)
let valorEmReais = converterEmReais(dolar);
console.log(`Em reais: ${formatar(valorEmReais, "BRL", 'pt-br')}`);
