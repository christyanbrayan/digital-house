/*
Os engenheiros de uma montadora estão projetando o computador de bordo de um carro. Eles precisam de uma função que possa calcular a autonomia atual do automóvel, em outras palavras, quantos quilômetros ele consegue andar com a quantidade de combustível atual. A autonomia pode ser obtida multiplicando a quantidade de combustível pelo rendimento. Será que você consegue ajudá-los?
Escreva uma função chamada autonomia, que deve receber dois parâmetros:
O primeiro, que represente a quantidade de combustível que está no tanque
O segundo, que represente o rendimento do automóvel
A função deve retornar a autonomia do automóvel, que pode ser obtido multiplicando o rendimento pela quantidade de combustível presente no tanque.
*/

function autonomia(quantidadeDeCombustivel, rendimento){
	return quantidadeDeCombustivel * rendimento
}

autonomia(5,20)