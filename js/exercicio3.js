'use strict'


let dolar = 5000
let reais = dolar * 5.16 


function formatar(valor, moeda) {
    const opcoes = {
        style: 'currency',
        currency: moeda
    };
    return new Intl.NumberFormat('pt-br', opcoes).format(valor);
}

console.log(`Dólar: ${formatar(dolar, 'USD')}`);
console.log(`Em reais: ${formatar(reais, 'BRL')}`);
