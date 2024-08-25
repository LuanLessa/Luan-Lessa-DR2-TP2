/**
 * @file Programa para realizar operações de divisão e módulo (resto) entre dois números inteiros.
 * 
 * @description Este programa solicita ao usuário dois números inteiros e, em seguida, calcula e exibe o resultado da divisão e o resto da divisão entre esses números.
 * 
 * @author Luan Lessa <luan.silva@al.infnet.edu.br>
 */

/**
 * Primeiro número inteiro fornecido pelo usuário.
 * @type {number}
 */
const numeroA = parseInt(prompt("Digite o primeiro número inteiro"));

/**
 * Segundo número inteiro fornecido pelo usuário.
 * @type {number}
 */
const numeroB = parseInt(prompt("Digite o primeiro número inteiro"));

/**
 * Exibe um alerta com o resultado da divisão e o resto da divisão dos dois números.
 * O resultado é mostrado com uma quebra de linha para maior clareza.
 */
alert( `O resultado da divisão é: ${numeroA / numeroB}\n
        O resto da divisão é:     ${numeroA % numeroB}`);