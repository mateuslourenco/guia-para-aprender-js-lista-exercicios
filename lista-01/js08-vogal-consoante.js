/**
 * Faça um Programa que verifique se uma letra 
 * de entrada é vogal ou consoante.
 * 
 * Entrada           Saída
 * a                 vogal
 * I                 vogal
 * z                 consoante
 * J                 consoante
*/

// Entrada
var entrada = 'J'
let vogais = ['a', 'e', 'i', 'o', 'u']
// implemente aqui o condicional para retornar o boolean (true/false) com base na entrada
var resultado = vogais.includes(entrada.toString().toLowerCase()) ? 'vogal' : 'consoante'

console.log(resultado)
