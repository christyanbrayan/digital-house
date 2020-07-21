/*
	Escreva uma função maxmin(a, b, c, d, e) que receba cinco números como parâmetros.
	Sua função deve retornar um array onde o primeiro elemento é o menor dos parâmetros e o segundo elemento é o maior dos parâmetros.
*/

function maxmin(a, b, c, d, e) {
    a = math.min(a, b, c, d, e)
    b = math.max(a, b, c, d, e)
    var nums = [a, b]
    return nums
}