'use strict'

// Seleção dos elementos
const exemplo1 = document.querySelector('#exemplo01')
const mensagem = document.querySelector('#mensagem')
const pagina = document.querySelector('body')
const video = document.querySelector('video')

// criando um objeto de audio referenciando o arquivo
const efeitoSonoro = new Audio()
efeitoSonoro.src = 'wow.wav'//aí-ze-da-manga-made-with-Voicemod.mp3

//criando um obj de img
const imagem = new Image()
imagem.src = 'wow.gif'// ou meme gif



/* const video = documentElement('video')
video.src = 'aí-ze-da-manga-made-with-Voicemod.mp3'
video.width = 354
video.height = 196
 */

/* // Criando um Ouvinte de Eventos (Event Listener)

O primeiro parametro do addEventLister é o tipo de evento que queremos "ouvir/monitorar". O segundo parametro é uma função (conhecida como callback) responsavel por executar ações no momento em que o evento acontecer.
 */
exemplo01.addEventListener('click', function() {

    // exibindo um texto no paragrago mensagem
    mensagem.textContent = 'tetelestai'

    //exeibindo um texto no perágrafo mensagem
    mensagem.classList.add('destaque')

    //modificando a fonte do body
    pagina.style.fontFamily = 'Arial'

    //Executando o áudio
    efeitoSonoro.play()

    //inserindo imagem após o paragrafo de mensagem
    mensagem.insertAdjacentElement('afterend', imagem)

    //remover a atributo hidden(fara com que o video apareça)
    video.removeAttribute('hidden')
    video.play()

})

/* exemplo modo noturno */
const divContainer = document.querySelector('.container')
const botao = document.querySelector('#noturno')

botao.addEventListener('click', function () {
    pagina.classList.toggle('noturno') //função de ligar/desligar toggler = alternar
    divContainer.classList.toggle('noturno')
})