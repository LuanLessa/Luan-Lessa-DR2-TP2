/**
 * @file Aplicação para verificar se um ano é bissexto.
 * 
 * @description Este programa solicita ao usuário um ano com 4 dígitos e informa se o ano é bissexto ou não.
 * 
 * @author Luan Lessa <luan.silva@al.infnet.edu.br>
 */

/**
 * Solicita ao usuário que insira um ano com 4 dígitos.
 * Converte a entrada para um número inteiro.
 * @type {number}
 */
const ano = parseInt(prompt("Digite um ano com 4 dígitos:"));

/**
 * Verifica se o ano fornecido é bissexto ou não.
 * Um ano é bissexto se for divisível por 4, mas não por 100, exceto se for divisível por 400.
 */
if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
    alert(`O ano ${ano} é bissexto.`);

} else {
    alert(`O ano ${ano} não é bissexto.`);
    
}
