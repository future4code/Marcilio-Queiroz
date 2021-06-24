// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui

  let altura = Number(prompt("Digite o valor da altura do retangulo"))
  let largura = Number(prompt("Digite o valor da largura do retangulo"))
  let resultado = largura * altura

  console.log(resultado)
  

}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
  let anoAtual = Number(prompt("Digite o ano atual"))
  let anoNascimento = Number(prompt("Digite o ano de nascimento"))
 
  let idade = anoAtual - anoNascimento

  
  console.log(idade)
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
  let peso = Number(prompt("Digite seu peso em KG"))
  let altura = Number(prompt("Digite sua altura em metros"))
  let resultado = peso / (altura * altura)

  console.log(resultado)
}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  let nome = prompt("Digite seu nome")
  let idade = Number(prompt("Digite sua idade"))
  let email = prompt("Digite seu email")

  let mensagem = "Meu nome é "+nome+", tenho "+idade+" anos, "+"e o meu email é "+email+"."

  console.log(mensagem)
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  let cor1 = prompt("Digite sua primeira cor favorira")
  let cor2 = prompt("Digite sua segunda cor favorita")
  let cor3 = prompt("Digite sua terceira cor favorita")

  let cores = [cor1,cor2,cor3]

  console.log(cores)
  
}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
  // gg easy
  let userMensagem = prompt("Digite sua mensagem")
  let mensagemCapsLoock = userMensagem.toUpperCase()

  console.log(mensagemCapsLoock)
}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
  let custoEspetaculoTeatro = Number(prompt("Digite o valor do espetaculo"))
  let valorIngresso = Number(prompt("Digite o valor de 1 ingresso"))
  let quantidadeIngressoPraLucro = custoEspetaculoTeatro / valorIngresso

  console.log(quantidadeIngressoPraLucro)

}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui

  let primeiraString = prompt("Digite um texto")
  let segundaString = prompt("Digite um texto")
  let mesmoTamanho = new Boolean()

  if(primeiraString.length == segundaString.length ){
    mesmoTamanho = true
  }else{
    mesmoTamanho = false
  }
  console.log(mesmoTamanho)

}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
  let primeiraString = prompt("Digite seu primeiro texto")
  let segundaString = prompt("Digite seu segundo texto")
  let eIgual = new Boolean()
  
  console.log(primeiraString)
  console.log(segundaString)

  if(primeiraString.toLowerCase() == segundaString.toLowerCase()){
    eIgual = true
  }else{
    eIgual = false
  }
  console.log(eIgual)
}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
  let anoAtual = Number(prompt("Digite o ano atual"))
  let anoNascimento = Number(prompt("Digite o ano de nascimento"))
  let anoRgEmitida = Number(prompt("Digite o ano que sua carteira foi emitida"))
  
  let idadeUser = anoAtual - anoNascimento 
  let idadeCarteira = anoAtual - anoRgEmitida

  let precisaRenovar = new Boolean()
  precisaRenovar = false

  if(idadeUser <= 20){
    
    if(idadeCarteira >= 5){
      precisaRenovar = true
      
    }
    
  }else if(idadeUser >= 20 && idadeUser <= 50){
    
    if(idadeCarteira >= 10){
      precisaRenovar = true
      
    }
    
  }else if(idadeUser > 50){
    
    if(idadeCarteira >= 15){
      precisaRenovar = true
      
    }
      
  }

  console.log(precisaRenovar)

}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
  let userAnoDigitado = Number(prompt("Digite ano para verificar se é Bissexto"))
  let bissexto = new Boolean()
  bissexto = false
  
  if(userAnoDigitado % 400 == 0){
    bissexto = true
  }else if(userAnoDigitado % 4 == 0 && !(userAnoDigitado % 100 == 0)){
    bissexto = true
  }

  console.log(bissexto)

}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
  let maiorIdade = prompt("Você tem mais de 18 anos?")
  let ensinoMedioCompleto = prompt("Você possui ensino médio completo?")
  let disponivelHorarioCurso = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

  let resultado = new Boolean()
  

  if(maiorIdade.toLowerCase() == "sim" && ensinoMedioCompleto.toLowerCase() == "sim" && disponivelHorarioCurso.toLowerCase() == "sim"){
    resultado = true
  }else{
    resultado = false
  }
  console.log("Maior de idade: "+maiorIdade+" ensino medio completo: "+ensinoMedioCompleto+" disponivel horario curso: "+ disponivelHorarioCurso)
  console.log(resultado)
}