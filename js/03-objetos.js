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

//objeto com array e outro objeto
const pessoa = {
    nome: "Aragorn",
    idade: 87,

    /* Obs: usamos aspas neste caso pois não se trata de números matemáticos ou monetários. */
    telefone: ['11 94825-4658','11-90364-7483'],

    //Propriedades com objetos
    medidasFisicas: {
        peso: 80,
        altura: 1.80
    }
}

console.log(pessoa);

let mens = `${pessoa.nome} tem ${pessoa.idade} anos de idade, mede ${pessoa.medidasFisicas.peso} e pesa ${pessoa.medidasFisicas.altura}. Contato ${pessoa.telefone[0]}`

console.log(mens);

//array de objeto
const livros = [
    {
        titulos: "Harry Potter",
        autor: 'J.K. Rowling'
    },
    {
        titulos: 'Crônicas de Nárnia',
        autor: 'C.S. Lewis'
    },
    {
        titulos: 'Cronicas de Olam',
        autor: 'L.L. Wurlitzer'
    }
]

console.log(livros);

console.log(livros[1].titulos);

console.log('----------');

console.table(livros);