/**
 * Faça um programa que faça o inverso do programa anterior, ou seja,
 * dado uma entrada criptografada, gere o texto decriptografado
 *
 * ENTRADA          SAÍDA
 * bcbdbuf          abacate
 * @fcsb            zebra
 * $fcsb            Zebra
 *
 * DICAS:
 * ao invés incrementar, vamos precisar decrementar...
 */

// Entrada
var texto = "$fcsb";
var textoDecripto = "";
// implemente aqui uma lógica para descriptografar o texto
for (letra of texto) {
    if (letra == '@') {
        textoDecripto += 'z'
    } else if (letra == '$') {
        textoDecripto += 'Z'
    } else {
        textoDecripto += String.fromCharCode(letra.charCodeAt(0) - 1)
    }
}

console.log(textoDecripto);
