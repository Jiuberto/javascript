'use strict'

//Declarar um objeto
const livro = {
    titulo: 'Senhor dos Anéis',
    autor: 'J.R.R Tolkien',
    volume: 3,
    ano: 1954

}
console.log(livro);

console.log(livro.volume);

console.log(
    `${livro.titulo} foi escrito por ${livro.autor}`
);

const carro = {
    marca: 'Chevrolet',
    modelo: 'Onix',
    anoDeFabricacao:2010,
    quantidadeDePortas:4,
    cor:'preto',

    //propriedade com array
    listaOpc: ['ar-condocionado', 'vidro elétricos', 'alarme']
}

console.log(carro)

let mensagem = [
    `Eu tenho um ${carro.modelo} da ${carro.marca} de ${carro.anoDeFabricacao}, ele é ${carro.cor}, tem ${carro.quantidadeDePortas} portas e tem ${carro.listaOpc[0]}`
];

console.log(mensagem);


