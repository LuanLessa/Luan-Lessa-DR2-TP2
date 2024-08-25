/**
 * @file Programa para gerar um número inteiro aleatório entre dois números.
 * 
 * @description Este programa solicita ao usuário dois números inteiros. Se o usuário digitar números com parte decimal, eles serão convertidos para inteiros pelo parseInt. O programa então gera um número inteiro aleatório entre os dois números (incluindo ambos os limites) e o exibe no console.
 * 
 * @author Luan Lessa <luan.silva@al.infnet.edu.br>
 */

/**
 * Solicita ao usuário o número de início do intervalo e converte para um número inteiro.
 * @type {number}
 */
const numeroInicio = parseInt(prompt("Digite o número de início do intervalo:"));

/**
 * Solicita ao usuário o número de fim do intervalo e converte para um número inteiro.
 * @type {number}
 */
const numeroFim = parseInt(prompt("Digite o número de fim do intervalo:"));

/**
 * Gera um número inteiro aleatório entre numeroInicio e numeroFim (inclusive).
 * @type {number}
 */
let numeroAleatorio = Math.floor(Math.random() * (numeroFim - numeroInicio + 1)) + numeroInicio;

/**
 * Exibe o número aleatório gerado no console do navegador.
 */
console.log(`O número aleatório gerado entre ${numeroInicio} e ${numeroFim} é: ${numeroAleatorio}`);