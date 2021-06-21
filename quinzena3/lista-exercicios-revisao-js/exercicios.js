// EXERCÍCIO 01
function inverteArray(array) {
  let nvLista = [];
  for (let i = array.length - 1; i >= 0; i--) {
    nvLista.push(array[i]);
  }
  return nvLista;
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  let listaPares = array.filter((index)=>{
    return index % 2 === 0
  })
  let listaParesElevado2 = listaPares.map((index)=>{
    return index * index
  })

  return listaParesElevado2

}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let listaPares = array.filter((index)=>{
    return index % 2 === 0
  })
  return listaPares
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maiorNumero = 0
  for(let i = 0; i < array.length; i++){
    if(maiorNumero <= array[i]){
      maiorNumero = array[i]
    }
  }
  return maiorNumero
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2 
  const booleano4 = !booleano3 

  let listaBooleano = []
  listaBooleano.push(booleano1 && booleano2 && !booleano4)
  listaBooleano.push((booleano1 && booleano2) || !booleano3)
  listaBooleano.push((booleano2 || booleano3) && (booleano4 || booleano1))
  listaBooleano.push(!(booleano2 && booleano3) || !(booleano1 && booleano3))
  listaBooleano.push(!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3))
  return listaBooleano
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  let listaPares = []
  let flag = (2 * n) -2
  for(let i = 0; i<=flag; i++) {
    if(i % 2 === 0){
      listaPares.push(i)
    }
  }
  return listaPares
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'
  if(a === b && a === c){
    return 'Equilátero'
  }else if(a === b && a !==c || b === c && b !== a || a === c && a !==b){
    return 'Isósceles'
  }else if(a !== b && a !== c && b !== c){
    return 'Escaleno'
  }
  return
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
  let maiorNum = 0
  let maiorNumDivMenor = false
  let diferenca = 0

  if(num1 >= num2){
    maiorNum = num1
    maiorNumDivMenor = num1 % num2 === 0
    diferenca = num1 - num2
  }else if(num2 > num1){
    maiorNum = num2
    maiorNumDivMenor = num2 % num1 === 0
    diferenca = num2 - num1
  }
  const maiorNumero = {
    maiorNumero: maiorNum,
    maiorDivisivelPorMenor: maiorNumDivMenor,
    diferenca: diferenca,
  }

  return maiorNumero
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {}

// EXERCÍCIO 11
function ordenaArray(array) {
  let length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
  }
  return array;
}

// EXERCÍCIO 12
function filmeFavorito() {
  let filme = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"],
  };
  return filme;
}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  let retangulo = {
    largura: lado1,
    altura: lado2,
    perimetro: 2 * (lado1 + lado2),
    area: lado1 * lado2,
  };
  return retangulo;
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  const novaPessoa = {
    ...pessoa,
    nome: "ANÔNIMO",
  };
  return novaPessoa;
}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
  let maiorIdade = arrayDePessoas.filter(arrayDePessoas =>{
    return arrayDePessoas.idade >= 18
  })
  return maiorIdade
}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  let menorIdade = arrayDePessoas.filter(arrayDePessoas =>{
    return arrayDePessoas.idade <= 17
  })  
  return menorIdade
}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
  let novaLista = array.map((index) =>{
    return index * 2
  })
  return novaLista
}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  let novaLista = array.map((index) =>{
    return index * 2
  })
  let novaListaString = novaLista.map((index)=>{
    return `${index}`
  })
  return novaListaString
}

// EXERCÍCIO 17C
function verificaParidade(array) {
  let listaMensagem = []
  let listVerificarImparOuPar = array.filter((index)=>{
    if(index % 2 !== 0){
      listaMensagem.push(`${index} é ímpar`)
    }else{
      listaMensagem.push(`${index} é par`)
    }
  })
  return listaMensagem
}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {
  let listaEntrarMontanhaRussa = pessoas.filter(pessoas =>{
    return pessoas.altura >= 1.5 && pessoas.idade >= 15 && pessoas.idade <= 59
  })
  return listaEntrarMontanhaRussa
}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {
  let listaNaoEntrarMontanhaRussa = pessoas.filter(pessoas =>{
    return pessoas.altura < 1.5 || pessoas.idade < 15 || pessoas.idade >= 60
  })
  return listaNaoEntrarMontanhaRussa
}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {
  


  /*   let alfabeto = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  let ordenarNomes = consultasNome.filter((index)=>{
    return index.nome.charAt(0).tolowercase() === "j"
  })
  return ordenarNomes */
}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {}

// EXERCÍCIO 20
function calculaSaldo(contas) {}
