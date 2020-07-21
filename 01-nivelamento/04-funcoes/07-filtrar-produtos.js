/*
Uma loja virtual permite a seus visitantes filtrar produtos pelo preço. Existe um array com os preços dos produtos. Um programador já criou uma função maisBaratosQue(valor, precos) que retorna um array com os preços dos produtos mais baratos que o valor passado como parâmetro. Outro programador já criou uma função maisCarosQue(valor, precos) que retorna um array com os preços mais caros que o valor passado como parâmetro. Chegou sua vez!
Crie uma função precosEntre(valorMenor, valorMaior, precos) que deve utilizar as funções maisBaratosQue e maisCarosQue para retornar os preços que estão entre o valorMenor e o valorMaior. Sua função deve receber então dois parâmetros:
valorMenor para representar o valor mínimo dos preços a serem listados
valorMaior para representar o valor máximo dos preços a serem listados
precos para representar um array com os preços dos produtos
Ela deve retornar um array com todos os preços entre valorMenor e valorMaior
*/

function maisBaratosQue(valor, precos) {
   return precos.filter(p => p <= valor);
}
 
function maisCarosQue(valor, precos){
   return precos.filter(p => p >= valor);
}

function precosEntre(valorMenor, valorMaior, precos) {
   var maisBaratos = maisBaratosQue(valorMaior, precos)
   return maisCarosQue(valorMenor, maisBaratos)
}

// Ao testar sua função com os valores: precosEntre(5, 10, [ 1,2,3,4,5,6,7,8,9,10] o resultado é 5,6,7,8,9,10