/*
            Exercícios de interpretação de código
 
1)Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

let array
console.log('a. ', array)
Resposta -> a.  undefined

array = null
console.log('b. ', array)
Resposta -> b.  null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
Resposta -> c.  [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

let i = 0
console.log('d. ', array[i])
Resposta -> d  [3]  

array[i+1] = 19
console.log('e. ', array)
Resposta -> e.  [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log**('f. ', valor)**
Resposta-> f  8


2)Leia o código abaixo com atenção 

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)


Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?
    SUBI NUM ÔNIBUS EM MIRROCOS, 27
*/



/* ------------------------------- TA COMENTADO OS QUE JA FORAM TESTADO -------------------------------
// EXERCÍCIO DE CODIGO

// 1) Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima na tela a
//    seguinte mensagem: 
    
//      O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!
    
    
let nomeDoUsuario = prompt("Digite seu nome!")
let emailDoUsuario = prompt("Digite seu e-mail")
console.log("O e-mail " + emailDoUsuario + " foi cadastrado com suscesso. Seja bem-vinda(o), " + nomeDoUsuario+"!")

   

// 2) Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável.
//    Em seguida, siga os passos:
 let comidas = ["sushi","churrasco","feijoada","sorvete","pizza"]

 // a) Imprima na tela o array completo
 console.log(comidas)

 //b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas,
 //   uma embaixo da outra.
 console.log("Essas são as minhas comidas preferidas: " + comidas)

 //c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela
 //   inserida pelo usuário. Imprima na tela a nova lista
 let novaComida = prompt("Digite uma nova comida")
 comidas.splice(1,1,novaComida)
 console.log("Essas são as minhas comidas preferidas: " + comidas)

 

 // 3) Faça um programa, seguindo os passos:
 // a) Crie um array vazio e guarde-o em uma variável, chamada listaDeTarefas
 let arrayVazio = []
 let listaDeTarefas = arrayVazio
 
 //b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
let tarefa1 = prompt("Digite sua primeira tarefa")
let tarefa2 = prompt("Digite sua segunda tarefa")
let tarefa3 = prompt("Digite sua terceira tarefa")
listaDeTarefas [0] = tarefa1
listaDeTarefas[1] = tarefa2
listaDeTarefas[2] = tarefa3

//c) Imprima o array na tela
console.log("Lista de tarefas: " + listaDeTarefas)

//d) Peça ao usuário que digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2 
let indice = Number(prompt("Digite um indice de uma tarefa já realizada(0,1,2)"))

//e) Remova da lista o item de índice que o usuário escolheu.
listaDeTarefas.splice(indice,1)

//f) Imprima o array na tela
console.log("A lista depois da remoção do indice selecionado: " + listaDeTarefas)



// DESAFIO

// 1)Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços
let frase = prompt("Digite uma frase")
let listaDaFrase = []
listaDaFrase = frase.split(" ")
console.log(listaDaFrase)

.. ------------------------------- TA COMENTADO OS QUE JA FORAM TESTADO -------------------------------*/

//2) Dado o array ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"], faça um programa que acha o índice
//   da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array

let listaFruta = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
let euQueroO = "Abacaxi"
let valorIndiceAbacaxi = 0
for(let i =0; i <= listaFruta.length;i++){
    if(listaFruta[i] == euQueroO){
        valorIndiceAbacaxi = i
    }
}
console.log("O indice do abacaxi: " + valorIndiceAbacaxi + " tamanho do array: "+listaFruta.length)




