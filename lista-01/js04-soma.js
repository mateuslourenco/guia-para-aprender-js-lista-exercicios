/**
 * Faça um Programa que imprima a soma de dois numeros (inteiros ou com casas decimais).
 * Se os valores de entrada não forem números válidos, imprima uma mensagem de aviso.
 * 
 * ENTRADA                           SAÍDA
 *    10 e 20                        30
 *    40.5 e 1.5                     42
 *    40,5 e 1,5                     42
 *    A e 40                         'A' não é um número
 *    40 e A                         'A' não é um número
 *
 * DICA:
 * Para verificar se A não número use o console o node e debug isto...
 * qual é o typeof 'A'? qual o typeof 42?
 * qual é o typeof(typeof A)
 */

// Entrada
var n1 = 40
var n2 = 'A'

var resultado = '?'
if (isNaN(parseFloat(n1))) {
    resultado = `${n1} não é um número`
} else if (isNaN(parseFloat(n2))) {
    resultado = `${n2} não é um número`
} else {
    resultado = n1 + n2
}
// Saída

console.log(resultado)
