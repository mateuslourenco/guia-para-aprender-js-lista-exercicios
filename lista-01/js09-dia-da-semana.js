/**
 * Faça um Programa que dado um número de entrada,
 * exiba o dia correspondente da semana.
 * 
 * ENTRADA      SAÍDA
 * 1            Domingo
 * 2            Segunda
 * 3            Terça
 * ...
 * 7            Sábado
 * Se digitar outro valor deve aparecer: 'Entrada inválida.'
 */

// Entrada
var entrada = 7
var resultado
// implemente aqui o condicional para retornar o boolean (true/false) com base na entrada
switch (entrada) {
    case 1:
        resultado = 'Domingo'
        break
    case 2:
        resultado = 'Segunda'
        break
    case 3:
        resultado = 'Terça'
        break
    case 4:
        resultado = 'Quarta'
        break
    case 5:
        resultado = 'Quinta'
        break
    case 6:
        resultado = 'Sexta'
        break
    case 7:
        resultado = 'Sabado'
        break
    default:
        resultado = 'Entrada inválida.'
}



console.log(resultado)
