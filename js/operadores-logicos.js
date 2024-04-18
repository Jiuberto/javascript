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

console.log("--------");

let idade = 25

//operador ou/or (||) obs: o simbolo | é chamao pipe
if ( idade >= 18 || idade <= 12) {
    console.log('Voceé um adulto ou criança');
} else {'adolescente'
    
}

let onibus = 2203; // 2203 ou 2019
if (onibus == 2203 || onibus == 2019) {
    console.log("embarque");
} else {
    console.log('aguarde');
}