'use strict'

// Declaração das variáveis
let nota1 = 1; // Insira a nota 1 aqui
let nota2 = 3; // Insira a nota 2 aqui
let resultado; // Variável para armazenar a média

// Cálculo da média
const media = (nota1 + nota2) / 2;
console.log(media);

// Verificação da média e exibição da mensagem
if (media >= 7) {
  resultado = "foi aprovado!";
} else if (media >= 5) {
  resultado = "está em recuperação.";
} else {
  resultado = "foi reprovado.";
}
console.log(`o aluno Fulano ${resultado}`)
