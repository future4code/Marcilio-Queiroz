/* --------------------- Exercício de interpretação de código ---------------------
1)

const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" }
]

const novoArrayA = usuarios.map((item, index, array) => {
   console.log(item, index, array)
})

a) O objeto, o valor do index desse objeto no array e o array completo
-----------------------------------------------------------------------------------
2)

const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayB = usuarios.map((item, index, array) => {
   return item.nome
})

console.log(novoArrayB)

a) Um novo array com apenas os nomes do objeto usuário
-----------------------------------------------------------------------------------
3)

const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayC = usuarios.filter((item, index, array) => {
   return item.apelido !== "Chijo"
})

console.log(novoArrayC)

a) Um novo array de objeto onde o apelido não seja "Chijo"

--------------------- Final do exercício de interpretação de código --------------------- */

// ---------------------  Exercícios de escrita de código --------------------- 



//1)

/* const pets = [
  { nome: "Lupin", raca: "Salsicha"},
  { nome: "Polly", raca: "Lhasa Apso"},
  { nome: "Madame", raca: "Poodle"},
  { nome: "Quentinho", raca: "Salsicha"},
  { nome: "Fluffy", raca: "Poodle"},
  { nome: "Caramelo", raca: "Vira-lata"},
] */

//a)
/*  const listNomeDog = pets.map((nomeDog) => {
  return nomeDog.nome
})

console.log(listNomeDog)  
 */

//b)
/*  const listaDogSalsicha = pets.filter((cachorroSalsicha) =>{
  return cachorroSalsicha.raca === "Salsicha"
})

console.log(listaDogSalsicha) 
 */

//c)
/* const listaDogPoodle = pets.filter((cachorroPoodle) =>{
  return cachorroPoodle.raca === "Poodle"
} )

const listaPromocaoParaPoodles = listaDogPoodle.map((poodle) => {
  return `Você ganhou um cupom de desconto de 10% para tosar o/a ${poodle.nome}`
})

console.log(listaPromocaoParaPoodles)
 */


//2)
/*  const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]  */

//a)
/* const listaNomeProdutos = produtos.map((nomeProduto)=>{
  return nomeProduto.nome
})
console.log(listaNomeProdutos) */


//b)
/* const nomePrecoMaisDesconto5 = produtos.map((item) =>{

  let novaFormaProduto = {
    nome : item.nome,
    preco : (item.preco - (item.preco * 0.05)).toFixed(2)
  }

  let listaNovaFormaProduto = []
  listaNovaFormaProduto.push(novaFormaProduto)
  return listaNovaFormaProduto
})
console.log(nomePrecoMaisDesconto5)
 */

//c)
/* let listaBebidas = produtos.filter((item)=> {
  return item.categoria === "Bebidas"
})

console.log(listaBebidas) */

//d)
/* let listaPalavraYpe = produtos.filter((item)=>{
  return item.nome.includes("Ypê")
})
console.log(listaPalavraYpe) */

//e)
/* let listaPalavraYpe = produtos.filter((item)=>{
  return item.nome.includes("Ypê")
})

let novaFrase = listaPalavraYpe.map((item)=>{
  return `Compre ${item.nome} por R$${item.preco}`
})

console.log(novaFrase) */