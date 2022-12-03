/**
 * Faça um programa que retorne true ou false conforme a entrada Y,y,yes,S,sim
 *
 * ENTRADA                   SAÍDA
 * Y                         true
 * Yes, YES, yes             true
 * y                         true
 * S, SIM                    true
 * s, sim, Sim               true
 * 1                         true
 * 👍                        true
 * n,N,J,0, espaço           false
 * qualquer outra coisa, $   false
 */

// Entrada
var entrada = "a";
let respostas_validas = ['Y','YES','S','SIM', '👍', '1']
// implemente aqui o condicional para retornar o boolean (true/false) com base na entrada
var resultado = respostas_validas.includes(entrada.toUpperCase())

console.log(resultado);
