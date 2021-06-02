/* 
************************ Exercício de interpretação de codigo ************************
1) Leia o código abaixo

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

a) O que vai ser impresso no console?
   R: 10 e 50

b) O que aconteceria se retirasse os dois console.log e simplesmente invocasse a 
   função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?
   R: No console não apareceria nada


2)Leia o código abaixo

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)


a) Explique o que essa função faz e qual é sua utilidade
   R: passa tudo o que o usuário digitou para minusculo em seguida verifica se em alguma parte da frase há cenoura
      ex: batata  -> false
          cenoura -> true
          https://www.youtube.com/watch?v=oavMtUWDBTM cenoura -> true
          abcdecenouraabcd -> true

b) Determine qual será a saída no console para cada uma das 3 entradas do usuário:
   i. Eu gosto de cenoura -> true
   ii. CENOURA é bom pra vista -> true
   iii. Cenouras crescem na terra -> true

************************ Exercício de interpretação de codigo ************************
 */


// Exercício de codigo

//1)

/* 
//a)
function printarInformacoesMarcilio(){
    console.log("Eu sou Marcilio, tenho 30 anos, moro em Recife e sou estudante.")
}
printarInformacoesMarcilio()
  */

/*
 //b)
let nome = prompt("Digite seu nome")
let idade = Number(prompt("Digite sua idade"))
let cidade = prompt("Digite sua cidade")
let profissao = prompt("Digite sua profissão")
function printarInformacoes(nome,idade,cidade,profissao){
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)
}

printarInformacoes(nome,idade,cidade,profissao) 
 */

//2)

/* 
//a)

function somarNumeros(numero1, numero2){
    return numero1 + numero2
}
const numero = 2
const outroNumero = 2

const resultadoSoma = somarNumeros(numero,outroNumero)
console.log(resultadoSoma)
 */

/* 
//b 
function verificarNumerosMaiorIgual(numero1, numero2){
    return numero1 >= numero2
}
const numero1 = Number(prompt("Digite um numero"))
const numero2 = Number(prompt("Digite um numero"))
const booleano = verificarNumerosMaiorIgual(numero1,numero2)

console.log(booleano)
 */

/* 
//c) 
function saberNumeroEPar(numero){
    return numero % 2 == 0
}
const numero = Number (prompt("Digite um numero"))
const booleano = saberNumeroEPar(numero)
console.log(booleano)
 */
/* 
function saberSeNumeroParOuImpar(numero){
    if(numero % 2 == 0){
        return "O numero é par"
    } else if(numero % 2 != 0){
        return "O numero é impar"
    }else{
        return "Algo de errado não está certo"
    }
}
const numeroParOuImpar = Number(prompt("Digite um numero"))
const resultado = saberSeNumeroParOuImpar(numeroParOuImpar)
console.log(resultado)
 */

/* 
//d)
function verificarTamanhoPalavraImprimirCapsLoock(palavra){
    console.log("O total de palavras: " + palavra.length + " frase em capsloock: " + palavra.toUpperCase())
}
const palavra = prompt("Digite alguma coisa")
verificarTamanhoPalavraImprimirCapsLoock(palavra)
 */

/* 
//3)
function somarNumeros(numero1, numero2){
    return numero1 + numero2
}
function subtrairNumeros(numero1, numero2){
    return numero1 - numero2
}

function multiplicarNumeros(numero1, numero2){
    return numero1 * numero2
}

function dividirNumeros(numero1, numero2){
    return numero1 / numero2
}



const numero1 = Number(prompt("Digite um numero"))
const numero2 = Number(prompt("Digite um numero"))

console.log("soma dos numeros: " + somarNumeros(numero1, numero2))
console.log("subtração dos numeros: " + subtrairNumeros(numero1, numero2))
console.log("multiplicação dos numeros: " + multiplicarNumeros(numero1, numero2))
console.log("divisão dos numeros: " + dividirNumeros(numero1, numero2))
 */

//Desafio

/* 
//1)

//a)
const informarParametro = (parametro) =>{
    console.log(parametro)
}


//b)
const informar2Parametros = (valor1, valor2) => {
    const somaNumeros = valor1 + valor2
    informarParametro(informarParametro(somaNumeros))
}
const informarValores = informar2Parametros(2,2) 
*/

/* 
// 2)
function valorHipotenusa(cateto1, cateto2){
    const hipotenusa = Math.sqrt( ( (cateto1 * cateto1) + ( (cateto2 * cateto2) ) ) ) 
    console.log(hipotenusa)
}

valorHipotenusa(4,6)
 */