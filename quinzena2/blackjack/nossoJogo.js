/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


console.log("Bem vindo ao jogo de Blackjack!")

function jogoBlackJack(){
   //jogador
   let carta1Jogador = comprarCarta();
   let carta2Jogador = comprarCarta();
   let resultadoJogador = carta1Jogador.valor + carta2Jogador.valor
   //maquina
   let carta1Maquina = comprarCarta();
   let carta2Maquina = comprarCarta();
   let resultadoMaquina = carta1Maquina.valor + carta2Maquina.valor

   let mensagemJogador = `Usuário - cartas: ${carta1Jogador.texto} e ${carta2Jogador.texto} - pontuação: ${resultadoJogador}`
   let mensagemMaquina = `Usuário - cartas: ${carta1Maquina.texto} e ${carta2Maquina.texto} - pontuação ${resultadoMaquina}`

   console.log(mensagemJogador +"\n"+ mensagemMaquina)
   
   if(resultadoJogador > resultadoMaquina){
      console.log("O usuário ganhou!")
   }else if(resultadoJogador === resultadoMaquina){
      console.log("Empate!")
   }else if(resultadoMaquina > resultadoJogador){
      console.log("O computador ganhou!")
   }


}

if(confirm("Gostaria de iniciar o jogo?")) {
	jogoBlackJack()
} else {
	console.log("O jogo acabou")
}