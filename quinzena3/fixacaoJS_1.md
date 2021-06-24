function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
 let salariofixo = 2000
 let comissao = (100 * qtdeCarrosVendidos) + (valorTotalVendas * 0.05)
return salariofixo + comissao
}