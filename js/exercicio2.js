'use strict'

const clientes = [
    { nome: 'Aragorn', id:1},
    { nome: 'Gandalf', id:2},
    { nome: 'Frodo', id:3},
]



 for (const cliente of clientes) {
    console.log(`Cliente: ${cliente.nome} (id: ${cliente.id})`);
}

 
/* let quantidade = clientes.length;

for (let i = 0; i < clientes.length; i++ ) {
    console.log(`Cliente: ${cliente[i].nome} (id: ${cliente[i].id})`);
} 
 */
