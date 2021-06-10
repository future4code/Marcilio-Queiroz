/*
------------------------- Exercícios de interpretação de código ------------------------- 

1)
a)
Matheus Nachtergaele
Virginia Cavendish
canal: "Globo", horario: "14h"

2)
a)
nome: "Juca", 
	idade: 3, 
	raca: "SRD"

    nome: "Juba", 
	idade: 3, 
	raca: "SRD"

    nome: "Jubo", 
	idade: 3, 
	raca: "SRD"

b) spread: atribui as mesmas variaveis e seus valores do primeiro objeto para o segundo objeto


3)

a) false                        -> pessoa[backender] : false
   undefined                    -> pessoa[altura] : propriedade não existe


b) o primeiro deu false por que o valor da propriedade backender do objeto pessoa é false e o impresso
   undefined ocorre porque essa propriedade não existe.

*/


// ------------------------- Exercícios de escrita de codigo ------------------------- 

/*
1)
a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá
   exatamente **três apelidos**). Depois, escreva uma função que recebe como entrada um objeto e imprime
   uma mensagem no modelo abaixo:

   // Exemplo de entrada
const pessoa = {
   nome: "Amanda", 
   apelidos: ["Amandinha", "Mandinha", "Mandi"]
}

// Exemplo de saída
"Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"


 const luisa = {
    nome: "Luisa", 
    apelidos: ["Lu", "isa", "Lui"]
 }

 function apresentarPessoa(pessoa){
     const msg = `Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`
     console.log(msg)
 }

 apresentarPessoa(luisa)
 


//b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome,
 //mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando
 // como argumento o novo objeto 

const NovoObjLuisa = {
   ...luisa,
   apelidos : ["lu1","isa2","lui3"]
}
apresentarPessoa(NovoObjLuisa)
*/



/* //2)
//a)
const lucas = {
   nome : "Lucas",
   idade : 25,
   profissao : "Medico"
}

//b)
const maria = {
   nome : "Maria",
   idade : 22,
   profissao : "Advogada"
}

function seperarAtributosPessoa(pessoa1, pessoa2){
   let listaAtributos = []
   
   listaAtributos.push(pessoa1.nome)
   listaAtributos.push(pessoa1.nome.length)
   listaAtributos.push(pessoa1.idade)
   listaAtributos.push(pessoa1.profissao)
   listaAtributos.push(pessoa1.profissao.length)
   
   
   listaAtributos.push(pessoa2.nome) 
   listaAtributos.push(pessoa2.nome.length) 
   listaAtributos.push(pessoa2.idade) 
   listaAtributos.push(pessoa2.profissao)
   listaAtributos.push(pessoa2.profissao.length)

   return listaAtributos
}

const listaResultado = seperarAtributosPessoa(lucas, maria)
console.log(listaResultado) */


/* 
//3)
//a)
let carrinho = []

//b)
const laranja = {
   nome : "Laranja",
   disponibilidade : true
}

const melao = {
   nome : "Melao",
   disponibilidade : true
}

const uva = {
   nome : "Uva",
   disponibilidade : true
}

//c)
function comprarFruta(fruta){
   carrinho.push(fruta)
}

comprarFruta(laranja)
comprarFruta(melao)
comprarFruta(uva)

//d)
console.log(carrinho)
 */


// DESAFIO

//1)
/* 
function objetoDaGUI(){
   
   const nome = prompt("Digite seu nome")
   const idade = Number(prompt("Digite sua idade"))
   const profissao = prompt("Digite sua profissão")

   const pessoa = {
      nome : "ll",
      idade : 0,
      profissao : "pp"
   }

   pessoa.nome = nome
   pessoa.idade = idade
   pessoa.profissao = profissao

   console.log(`nome: ${pessoa.nome}, profissao: ${pessoa.profissao}, idade: ${pessoa.idade}`)
} 

objetoDaGUI()
*/


//2)

/* 
const filmeA = {
   nome : "Primeiro Filme algo",
   anoLancamento: 1990
}

const filmeB = {
   nome : "Segundo Filme algo",
   anoLancamento : 1990
}

function compararLancamento(filme1, filme2){

   const condicao1 = filme1.anoLancamento < filme2.anoLancamento
   const condicao2 = filme1.anoLancamento == filme2.anoLancamento
   
   console.log(`${filme1.nome} foi lançado antes de ${filme2.nome}? ${condicao1}`)
   console.log(`${filme1.nome} foi lançado no mesmo ano do  ${filme2.nome}? ${condicao2}`)
}

compararLancamento(filmeA, filmeB)
 */

/* 
//3)


let carrinho = []

const laranja = {
   nome : "Laranja",
   disponibilidade : true
}

const melao = {
   nome : "Melao",
   disponibilidade : true
}

const uva = {
   nome : "Uva",
   disponibilidade : true
}

function comprarFruta(fruta){
   carrinho.push(fruta)
}

comprarFruta(laranja)
comprarFruta(melao)
comprarFruta(uva)

function controlarStock(fruta){
   let indice = 0
   
   indice = carrinho.indexOf(fruta,0)
   fruta = carrinho[indice]
   fruta.disponibilidade = false

   console.log(`o parametro passado: ${fruta.nome}, ${fruta.disponibilidade}`)
   
}

controlarStock(uva)
controlarStock(laranja)
controlarStock(melao)

console.log(carrinho)
 */