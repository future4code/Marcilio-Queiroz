/* Exercícios de interpretação de código 
1)
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) //false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) //false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)//true

console.log("d. ", typeof resultado) //boolean


2)consegue perceber algum problema? O que será impresso no console?

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

//O impresso vai ser a concatenação da String recebida nas variaveis "primeiroNumero" e "segundoNumero"


3) Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)

*/




/* //-------------------  Comentario para realizar ...  -------------------//

// Exercícios de escrita de código

// 1)
//a)
let idadeUsuario = Number(prompt("Qual sua idade?"))
//b)
let idadeAmigoUsuario = Number(prompt("Qual a idade do seu melhor amigo?"))
//c)
console.log("Sua idade é maior do que a do seu amigo?", idadeUsuario > idadeAmigoUsuario)
//d)
console.log("Diferença de idade: ", idadeUsuario - idadeAmigoUsuario)



//2)
//a)
let numeroPar = Number(prompt("Digite um numero par"))

//b)
console.log("O resto da divisão por 2: ",numeroPar % 2)

//c)
// O resto da divisão entre um numero par dividido por 2 será sempre = 0

//d)
// Se digitar um numero impar o resto da divisão será diferente de 0




//3)
let idade = Number(prompt("Digite sua idade"))

//a)
console.log("Você viveu o total de", idade * 12, "meses")

//b)
console.log("Você viveu o tatal de", idade * 365, "dias")

//c)
console.log("Você viveu o total de ", idade * 8760, "Horas")

//-------------------  ... testes unitarios dos exercícios  -------------------// */

//4)
let numero1 = Number(prompt("Por favor, digite um número"))
let numero2 = Number(prompt("Por favor, digite um número"))


//O primeiro numero é maior que segundo? true
//O primeiro numero é igual ao segundo? false
//O primeiro numero é divisível pelo segundo? true
//O segundo numero é divisível pelo primeiro? true

//teste que satisfaz as condições acima -> numero1 = 2 e numero2 = -2

console.log("O primeiro numero é maior que segundo?", numero1 > numero2)

console.log("O primeiro numero é igual ao segundo?", numero1 == numero2)

console.log("O primeiro numero é divisível pelo segundo?", numero1 % numero2 == 0)

console.log("O segundo numero é divisível pelo primeiro?", numero2 % numero1 == 0)





