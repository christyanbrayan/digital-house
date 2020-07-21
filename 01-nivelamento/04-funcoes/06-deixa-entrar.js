/*
Uma rede de cinemas quer implementar um sistema para controlar a entrada nas suas salas. Os clientes, antes de entrar na sala, devem apresentar o RG em uma câmera. A câmera seria capaz de ler a data de nascimento do cliente e, caso ele não tenha idade suficiente para assistir a sessão, o acesso dele não seria autorizado.
Um dos programadores já fez uma função que calcula a idade com base na data de nascimento. Ela recebe como parâmetro uma data de nascimento no formato dd/mm/aaaa (dia com dois dígitos, mês com dois dígitos e ano com quatro dígitos) e retorna idade da pessoa hoje.
Precisamos agora que você escreva a função deixaEntrar, que deve receber dois parâmetros:
O primeiro deve representar a data de nascimento do cliente no formato dd/mm/aaaa 
O segundo deve representar a censura da sessão, ou seja, a idade mínima do cliente para que ele possa acessar a sala.
A função deve retornar true caso o cliente tenha idade maior ou igual a censura e false caso contrário.
*/

function calcularIdade(dataDeNascimento) {
   var [dia, mes, ano] = dataDeNascimento.split('/');
   var d = new Date();
   var anoAtual = d.getFullYear();
   var mesAtual = d.getMonth() + 1;
   var diaAtual = d.getDate();
   ano = +ano; mes = +mes; dia = +dia;
   var quantosAnos = anoAtual - ano;
   if (mesAtual < mes || mesAtual == mes && diaAtual < dia) {
       quantosAnos--;
   }
   return quantosAnos < 0 ? 0 : quantosAnos;
}
 
function deixaEntrar(dataDeNascimento, censura) {
    dataDeNascimento = calcularIdade("24/03/2002")
    censura = 16
    return dataDeNascimento > censura ? true : false
}