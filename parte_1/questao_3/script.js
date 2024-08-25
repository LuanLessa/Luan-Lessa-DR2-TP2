/**
 * @file Programa para calcular a raiz quadrada da soma das potências de dois números.
 * 
 * @description Este programa solicita ao usuário dois números inteiros. Se o usuário digitar números com parte decimal, eles serão arredondados para cima. O programa então eleva o primeiro número ao quadrado e o segundo número ao cubo, calcula a raiz quadrada da soma dessas potências e exibe o resultado em um alerta.
 * 
 * @author Luan Lessa <luan.silva@al.infnet.edu.br>
 */

/**
 * Solicita ao usuário o primeiro número inteiro.
 * Se o número fornecido tiver parte decimal, ele será arredondado para cima.
 * @type {number}
 */
const numeroA = Math.ceil(parseFloat(prompt("Digite o primeiro número inteiro:")));

/**
 * Solicita ao usuário o segundo número inteiro.
 * Se o número fornecido tiver parte decimal, ele será arredondado para cima.
 * @type {number}
 */
const numeroB = Math.ceil(parseFloat(prompt("Digite o segundo número inteiro:")));

/**
 * Calcula a segunda potência do primeiro número arredondado.
 * @type {number}
 */
const potenciaA = Math.pow(numeroA, 2);

/**
 * Calcula a terceira potência do segundo número arredondado.
 * @type {number}
 */
const potenciaB = Math.pow(numeroB, 3);

/**
 * Calcula a raiz quadrada da soma das potências calculadas.
 * @type {number}
 */
const resultado = Math.sqrt(potenciaA + potenciaB);

/**
 * Exibe o resultado da raiz quadrada da soma das potências em um alerta.
 */
alert(`O resultado da raiz quadrada da soma das potências é: ${resultado}`);
