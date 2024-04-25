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
const h22 = document.querySelectorAll('p, a, p')
console.log(h22);

/* Modificando dom:
podemos alterar conteudo, tags, estilos, criar elementos, remover elementos etc
*/

//alteraçao de conteudo text
legenda.textContent = 'imagem do modelo de objetos do documento'

ed.innerHTML = '<i>Front-End</i>'

//alter de esty inline (CSS in JS)
back.style.color = 'red'

//Aplic de classes css via JS
titulo.classList.add('destaque')

const listaDeEditores = [
    {
        nome: 'Visual Studio Code',
        fin: 'desenvolvimento Web em geral'
    },
    {
        nome: 'Xcode',
        fin: 'desenvolvimento de aplicativos ios'
    },
    {
        nome: 'Android Studio',
        fin: 'desenvolvimento de aplicativos Android'
    }
]


//Acesando/selecionado a lista que será usada no HTML
const lista = document.querySelector('.lista')
console.log(lista);

/* Percorrer (loop) um array de listaDeEditores e criar os itens <li> com o conteudo do array e adicionaá-los à lista HTML. */

//For (variavel/constante de acesso of arrayComDadosQueQueremosAcessar) {}
for (const editor of listaDeEditores) {
    console.log(editor.nome);
    // 1): criar elemento <li>
    const item = document.createElement('li')

    // 2) adicionar o conteudo ao novo elemento
    item.innerHTML = `<b>${editor.nome}</b>: ${editor.fin}`

    // 3) adicionar o elemento a lista <ol>
    lista.appendChild(item)
}

/* Criando/configurando atributos HTML via js */
const linksDeReferencia = document.querySelectorAll('.referencias a')

//acessa cada item da lista individualmente
for (const link of linksDeReferencia) {
   console.log(link);
   //colocandoo atributo target valendo _blank em cada link para abrir nova guia
    link.setAttribute('target', '_blank')
}