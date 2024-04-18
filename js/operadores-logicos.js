'use strict'

//requistos para aprovação
const mediaMinima = 7
const limiteDeFaltas = 10

//Aluno exemplo
let aluno = 'Fulano'
let mediaFinal = 10
let faltas = 10
let resultado

//operador e (and &&)
if (mediaFinal >= mediaMinima && faltas <= limiteDeFaltas) {
    resultado = 'aprovado'
} else { 
    resultado = 'reprovado'
}

console.log(resultado);