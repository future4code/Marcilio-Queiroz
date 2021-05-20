/*
Exercício de interpretação de código

------------------------------
1)
let a = 10
let b = 10

console.log(b) -> 10

b = 5
console.log(a, b) -> 10, 5
------------------------------
2)

let a = 10
let b = 20
let c
c = a -> c = 10
b = c -> b = 10
a = b -> a = 10

console.log(a, b, c) -> 10, 10, 10

------------------------------
3)

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

-->

let horasTrabalhadasPorDia = prompt("Quantas horas você trabalha por dia?")
let salarioPorDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${salarioPorDia/horasTrabalhadasPorDia} por hora`)

------------------------------
*/

/*
*************************************************
Exercícios de escrita de código
*************************************************
*/

// 1) Construa um programa, seguindo os seguintes passos:

// a)
let nome

// b)
let idade

// c)
console.log(typeof(nome)) //undefined
console.log(typeof(idade)) //undefined

/*
   d)
   
   Isso ocorre porque as variáveis foram declaradas sem nenhum valor atribuido
*/

// e)
nome = prompt("Qual o seu nome?")
idade = Number (prompt("Qual sua idade?")) 

// f)
console.log(typeof(nome))  //String
console.log(typeof(idade)) //Number

// g)
console.log("Olá", nome,"você tem:", idade, "anos")

// 2)
let cabeloRosa = "Seu cabelo é rosa?"
let maiorDeIdade = "Você tem mais de 18 anos?"
let careca = "Você é careca?"

// a)
let respostaCabeloRosa = "- nao \n"
let respostaMaiorDeIdade = "- Sim \n"
let respostaCareca = "- nao"

// b)
console.log(cabeloRosa, respostaCabeloRosa, maiorDeIdade, respostaMaiorDeIdade, careca, respostaCareca)

// 3)
let a = 10
let b = 25

b = a // b = 10 
a += b + 5 // a = 25

console.log("O novo valor de A = ", a) // 25
console.log("O novo valor de B = ", b) // 10

// 3) parte 2

let aa = 10
let bb = 25
let valorAuxiliar = bb;

bb = aa // bb = 10
aa = valorAuxiliar // aa = 25

console.log("O novo valor de AA = ", aa) // 25
console.log("O novo valor de BB = ", bb) // 10

// Desafio
let primeiroNumero = prompt("Digite o primeiro numero")
let segundoNumero = prompt("Digite o segundo numero")

let resultado1 = Number(primeiroNumero) + Number(segundoNumero) 
let resultado2 = primeiroNumero * segundoNumero

console.log("Primeiro numero somado ao segundo numero resulta em:", resultado1)
console.log("Primeiro numero multiplicado pelo segundo numero resulta em:", resultado2)