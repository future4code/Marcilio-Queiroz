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

    /*
    A = 11 
    Q = 10
    J = 10
    K = 10
    */


      /*     if(validarCartasAA(carta1Jogador,carta2Jogador)){
         carta1Jogador = comprarCarta();
         carta2Jogador = comprarCarta();
         
      } */

    console.log("Bem vindo ao jogo de Blackjack!")
    let iniciarJogo = confirm("Quer iniciar uma nova rodada?")

    function jogoBlackJack(){
       //jogador
       let carta1Jogador = comprarCarta(); 
       let carta2Jogador = comprarCarta();
      
       //testar cenarios jogador
/*        carta1Jogador.valor = 4
       carta1Jogador.texto = "4"

       carta2Jogador.valor = 2
       carta2Jogador.texto = "2" */
       let listaNipeJogador = [carta1Jogador.texto, carta2Jogador.texto] 
       
       // testando cenario AA
/*     carta1Jogador.texto = "A"
       carta1Jogador.valor = 11
       carta2Jogador.texto = "A"
       carta2Jogador.valor = 11 */
       
       //maquina
       let carta1Maquina = comprarCarta(); 
       let carta2Maquina = comprarCarta(); 
       let listaNipeMaquina = [carta1Maquina.texto, carta2Maquina.texto]

       //testar cenarios Maquina
/*        carta1Maquina.valor = 8
       carta1Maquina.texto = "8"

       carta2Maquina.valor = 4
       carta2Maquina.texto = "4" */

      

      // Regra do A - A 
      while( (carta1Jogador.texto === "A" && carta1Jogador.valor === 11) && (carta2Jogador.texto === "A" && carta2Jogador.valor === 11) || (carta1Maquina.texto === "A" && carta1Maquina.valor === 11) && (carta2Maquina.texto === "A" && carta2Maquina.valor === 11) ){
        // console.log("Houve a regra do A - A")
         carta1Jogador = comprarCarta();
         carta2Jogador = comprarCarta();

         carta1Maquina = comprarCarta();
         carta2Maquina = comprarCarta();
      }
      
      let resultadoJogador = carta1Jogador.valor + carta2Jogador.valor
      let resultadoMaquina = carta1Maquina.valor + carta2Maquina.valor

      // condicão <= porque se usuário quiser perder tendo 21 pontos ele perde! -> Cenario Jogador carta1 = A | carta2 = Q  | pontos = 21 -> sistema pergunta se quer comprar carta
      while(resultadoJogador <= 21){
         let mensagemComprarNVCarta = `Suas cartas são ${listaNipeJogador}. A carta revelada do computador é ${carta1Maquina.texto}.`
         let comprarNovaCarta = confirm(
             mensagemComprarNVCarta +
            "\n"+  
            "Deseja comprar mais uma carta?"
         )
         
         if(comprarNovaCarta === true){
            let novaCarta = comprarCarta() 
            resultadoJogador += novaCarta.valor 
            listaNipeJogador.push(novaCarta.texto)
         }else{
            break
         }
      }

      //Maquina <= Jogador
      while(resultadoMaquina <= resultadoJogador){
         //console.log(`lista nipes maquina ${listaNipeMaquina}`)
         let novaCarta = comprarCarta()
         resultadoMaquina += novaCarta.valor
         listaNipeMaquina.push(novaCarta.texto)
      }
         
      let mensagemJogador = `Usuário - cartas: ${listaNipeJogador} - pontuação: ${resultadoJogador}`
      let mensagemMaquina = `Maquina - cartas: ${listaNipeMaquina} - pontuação ${resultadoMaquina}`
    
       console.log(mensagemJogador +"\n"+ mensagemMaquina)

       let mensagemFinal = ""
    
      if(resultadoMaquina > 21 && resultadoJogador > 21){
         mensagemFinal ="Empate!"
      }else if(resultadoJogador === resultadoMaquina){
         mensagemFinal ="Empate!"
      }else if(resultadoMaquina > 21){
         mensagemFinal ="O usuário ganhou!"
      }else if(resultadoJogador > 21){
         mensagemFinal ="O computador ganhou!"
      }else if(resultadoJogador > resultadoMaquina){
         mensagemFinal ="O usuário ganhou!"
      }else if(resultadoMaquina > resultadoJogador){
         mensagemFinal ="O computador ganhou!"
      }else{
         mensagemFinal = "Alguma coisa deu errado"
      }

      alert("Suas cartas são" + listaNipeJogador + ". Sua pontuação é " + resultadoJogador + ".\n" +
      "As cartas do computador são " + listaNipeMaquina + "." + "A pontuação do computador é " + resultadoMaquina + ".\n" +
      mensagemFinal)
   }

    while(iniciarJogo === true){
      jogoBlackJack()
      iniciarJogo = confirm("Quer iniciar uma nova rodada?")
    }
    
/*     if(iniciarJogo === true) {
       jogoBlackJack()
    } else {
       console.log("O jogo acabou")
    } */