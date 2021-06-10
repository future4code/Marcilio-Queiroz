/* ----------------------- Exercício de interpretação de codigo -----------------------
 
1)
a) Ele pega o que usuário digita em seguida verifica se é divisivel por 2

b) Numeros pares

c) Numeros impares

2)

a) Especificar o preço de cada fruta e se caso usuário digitar uma ao qual não se encontra listada o seu valor será o padrão 5

b) O valor de Pêra se retirar o break assumirá o valor default(5)

3)
a) A primeira linha faz um casting para numérico da informação que o usuário digitará 

b) se digitar 10 será exibido "Esse número passou no teste", em seguida apresentará erro pois na ultima linha
   a variavel "mensagem" dentro do console.log não foi declarada no escopo global. Se digitar -10 não entrará na
    condição e dará o mesmo erro da ultima linha

c) Sim. A variavel mensagem só existe dentro do escopo if{} para ser exibido a variavel mensagem do console.log
   a mesma deveria ser declarada globalmente.

  ----------------------- Final do exercício de interpretação de codigo ----------------------- */ 

/*----------------------- inicio do exercício  codigo -----------------------

// 1) 
//a) e b)
const idade = Number(prompt("Digite sua idade"))
//c)
if(idade >= 18){
   console.log("Você pode dirigir")
}else{
   console.log("Você não pode dirigir")
}



 // 2)
 const turno = prompt("Olá, aluno! Por favor nos informe seu turno seguindo os seguintes critérios: \n Digite M para Matutino \n Digite V para vespertino \n Digite N para noturno")

if (turno.toUpperCase() === "M"){
   console.log("Bom dia")
} else if (turno.toUpperCase() === "V"){
   console.log("Boa tarde")
} else if (turno.toUpperCase() === "N"){
   console.log("Boa noite")
}else{
   console.log("Verifique se você seguiu os parametros passados")
}

 
 // 3)
 const turno = prompt("Olá, aluno! Por favor nos informe seu turno seguindo os seguintes critérios: \n Digite M para Matutino \n Digite V para vespertino \n Digite N para noturno")

 switch(turno.toUpperCase()){
    case 'M' :
    console.log("Bom dia")
    break
    
    case 'V' :
       console.log("Boa tarde")
       break

   case 'N' :
      console.log("Boa noite")
      break

   default :
      console.log("Verifique se você seguiu os parametros passados")
 }

 

 // 4)
const generoFilme = prompt("Digite o genero do filme")
const ingresso = prompt("Digite o valor do ingresso")

if(generoFilme.toLowerCase() === "fantasia" && ingresso < 15){
   console.log("Bom filme!")
} else {
   console.log("Escolha outro filme :(")
}

----------------------- Exercício de codigo que ja foi testado ----------------------- */




/* ----------------------- Desafio -----------------------


//1)
const generoFilme = prompt("Digite o genero do filme")
const ingresso = prompt("Digite o valor do ingresso")

if(generoFilme.toLowerCase() === "fantasia" && ingresso < 15){
   let lanche = prompt("Qual lanche você vai comprar? \n Pipoca, chocolate, doce, etc")
   console.log(`Bom filme! Aproveite seu ${lanche}`)
} else {
   console.log("Escolha outro filme :(")
}

  ----------------------- Desafio Testado ----------------------- */
  // 2)
const nomeCompleto = prompt("Digite seu nome completo")
const etapaJogo = prompt("Digite o tipo do jogo: \n SF para Semi Final \n DT para Decisão de terceiro lugar \n FI para Final")
const tipoJogo = prompt("IN para: Internacional \n DO para Domestico")
const categoria = Number(prompt("Digite o numero da sua categoria: 1, 2, 3 ou 4"))
const qtdIngresso = Number(prompt("Digite a quantidade de ingresso"))

const valorInt = (valorUnitario(categoria,etapaJogo) * 4.10)

function valorUnitario(categoria, etapa){
   let valor = 0

   // Semi Final - SF
   if(categoria === 1 && etapa === "SF"){
      valor = 1320
   }else if(categoria === 2 && etapa === "SF"){
      valor = 880
   }else if(categoria === 3 && etapa === "SF"){
      valor = 550
   }else if(categoria === 4 && etapa === "SF"){
      valor = 220
   }
   //Decisão de terceiro lugar - DT
   else if(categoria === 1 && etapa === "DT"){
      valor = 660
   }else if(categoria === 2 && etapa === "DT"){
      valor = 440
   }else if(categoria === 3 && etapa === "DT"){
      valor = 330
   }else if(categoria === 4 && etapa === "DT"){
      valor = 170
   }
   // FI para Final
   else if(categoria === 1 && etapa === "FI"){
      valor = 1980
   }else if(categoria === 2 && etapa === "FI"){
      valor = 1320
   }else if(categoria === 3 && etapa === "FI"){
      valor = 880
   }else if(categoria === 4 && etapa === "FI"){
      valor = 330
   }else{
      valor = 0.3
   }
   return valor
}


function nota(){
   let valorU = valorUnitario(categoria,etapaJogo)
   let valorTot = valorU * qtdIngresso
  
    let nota = `--- Dados da compra ---
    Nome do cliente:  ${nomeCompleto} 
Tipo do jogo:  ${tipoJogo} 
Etapa do jogo:  ${etapaJogo}
Categoria:  ${categoria} 
Quantidade de Ingressos:  ${qtdIngresso} 
---Valores--- 
Valor do ingresso:  ${valorU}
Valor total: ${tipoJogo === 'IN' ? valorInt : valorTot} `

console.log(nota)
} 

nota()