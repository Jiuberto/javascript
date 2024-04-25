'use strict'

// Seleção dos elementos
const exemplo1 = document.querySelector('#exemplo01')
const mensagem = document.querySelector('#mensagem')
const pagina = document.querySelector('body')

// criando um objeto de audio referenciando o arquivo
const efeitoSonoro = new Audio()
efeitoSonoro.src = 'wow.wav'

/* // Criando um Ouvinte de Eventos (Event Listener)

O primeiro parametro do addEventLister é o tipo de evento que queremos "ouvir/monitorar". O segundo parametro é uma função (conhecida como callback) responsavel por executar ações no momento em que o evento acontecer.
 */
exemplo1.addEventListener('click', function() {

    // exibindo um texto no paragrago mensagem
    mensagem.textContent = 'tetelestai'

    //exeibindo um texto no perágrafo mensagem
    mensagem.classList.add('destaque')

    //modificando a fonte do body
    pagina.style.fontFamily = 'Arial'

    //Executando o áudio
    efeitoSonoro.play()
})