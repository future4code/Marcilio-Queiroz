/* -------------------------- Exercício de interpretação de codigo --------------------------
1) Soma todos os valores que o I vai recebendo. Resultado: 10

2)
a)  19, 21, 23, 25, 27, 30

b) Nao. Pra poder acessar o numero do indice é necessário criar uma nova variavel.

3)*
  **
  ***
  ****

  -------------------------- Final do exercício de interpretação de codigo -------------------------- */


// ---------------------------- Exercício de codigo ----------------------------




/* 
//1)
let nomesBixos = []
let qtdBixosEstimacao = Number(prompt("Quantos bixos de estimação vc tem?"))
//a)
if(qtdBixosEstimacao === 0){
  console.log("Que pena! Você pode adotar um pet!")
}else{
  for(let i = 1 ; i <= qtdBixosEstimacao; i++){
    let bixoNaInteracaoI = prompt(`Por favor digite o nome do seu ${i} bixo`)
    nomesBixos.push(bixoNaInteracaoI)
  }
  //c
  console.log(nomesBixos)
}
 */

//2)

//let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

  //a)
/*    for(let numero of arrayOriginal){
    console.log(numero)
  } 
 */

  //b) 
/*   for(let indice = 0; indice < arrayOriginal.length; indice++){
    let valorIndiceArrayDivPor10 = arrayOriginal[indice] / 10
    console.log(valorIndiceArrayDivPor10) 
  }
 */

  //c)
/*   let listaNumerosPares = []
  for(let numero of arrayOriginal){
     if(numero % 2 === 0){
      listaNumerosPares.push(numero)
    }
  } 
  console.log(listaNumerosPares) */
  
  // d)
/*   let listaString = []
  for(let index = 0; index < arrayOriginal.length; index++){
    let frasePorIndice = `O elemento do índex ${index} é: ${arrayOriginal[index]}`
    listaString.push(frasePorIndice)
  } 
  console.log(listaString)
 */

  //e)
/* let maiorNumero = 0
let menorNumero = 999999999999999999999999
for(let numero of arrayOriginal){
  if(numero > maiorNumero){
    maiorNumero = numero
  }

  if(numero < menorNumero){
    menorNumero = numero
  }
}
console.log(`O maior numero: ${maiorNumero} e o menor numero: ${menorNumero}`)
 */


