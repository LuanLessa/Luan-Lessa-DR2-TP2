/**
 * @file Aplicação para determinar o tipo de triângulo com base nos lados fornecidos pelo usuário.
 * 
 * @description Este programa solicita ao usuário os três lados de um triângulo e determina se ele é Equilátero, Isósceles ou Escaleno, mostrando o resultado em um alert.
 * 
 * @author Luan Lessa <luan.silva@al.infnet.edu.br>
 */

/**
 * Solicita ao usuário o primeiro lado do triângulo e o converte para um número.
 * @type {number}
 */
const ladoA = parseFloat(prompt("Digite o valor do primeiro lado do triângulo:"));

/**
 * Solicita ao usuário o segundo lado do triângulo e o converte para um número.
 * @type {number}
 */
const ladoB = parseFloat(prompt("Digite o valor do segundo lado do triângulo:"));

/**
 * Solicita ao usuário o terceiro lado do triângulo e o converte para um número.
 * @type {number}
 */
const ladoC = parseFloat(prompt("Digite o valor do terceiro lado do triângulo:"));

/**
 * Determina o tipo de triângulo com base nos lados fornecidos.
 * Mostra um alert indicando se o triângulo é Equilátero, Isósceles ou Escaleno.
 */
if (ladoA === ladoB && ladoB === ladoC) {
    alert("O triângulo é Equilátero. Todos os lados são iguais.");
} else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC) {
    alert("O triângulo é Isósceles. Dois lados são iguais.");
} else {
    alert("O triângulo é Escaleno. Todos os lados são diferentes.");
}
