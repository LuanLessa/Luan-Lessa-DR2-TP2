/**
 * @file Aplicação de jogo Pedra, Papel ou Tesoura.
 * 
 * @description Este programa solicita ao usuário que escolha entre Pedra, Papel ou Tesoura, gera uma escolha aleatória para o programa e informa se o usuário ganhou ou perdeu com base nas escolhas.
 * 
 * @author Luan Lessa <luan.silva@al.infnet.edu.br>
 */

/**
 * Solicita ao usuário que escolha entre Pedra, Papel ou Tesoura.
 * Converte a entrada para letras minúsculas para facilitar a comparação.
 * @type {string}
 */
const escolhaUsuario = prompt("Escolha entre Pedra, Papel ou Tesoura:").toLowerCase();

/**
 * Gera um número aleatório entre 1 e 3 e atribui uma escolha correspondente ao programa.
 * 1 representa "pedra", 2 representa "papel", e 3 representa "tesoura".
 * @type {number}
 */
const numeroAleatorio = Math.floor(Math.random() * 3) + 1;

/**
 * Define a escolha do programa com base no número aleatório gerado.
 * @type {string}
 */
let escolhaPrograma;

if (numeroAleatorio === 1) {
    escolhaPrograma = "pedra";

} else if (numeroAleatorio === 2) {
    escolhaPrograma = "papel";

} else {
    escolhaPrograma = "tesoura";

}

/**
 * Informa ao usuário qual foi a escolha sorteada pelo programa.
 */
alert(`O programa escolheu: ${escolhaPrograma}`);

/**
 * Determina o resultado do jogo com base nas escolhas do usuário e do programa.
 * Mostra um alert indicando se o usuário ganhou, perdeu ou empatou.
 */
if (escolhaUsuario === escolhaPrograma) {
    alert("Empate!");

} else if (
    (escolhaUsuario === "pedra" && escolhaPrograma === "tesoura") ||
    (escolhaUsuario === "papel" && escolhaPrograma === "pedra") ||
    (escolhaUsuario === "tesoura" && escolhaPrograma === "papel")
) {
    alert("Você ganhou!");

} else if (
    (escolhaUsuario === "pedra" && escolhaPrograma === "papel") ||
    (escolhaUsuario === "papel" && escolhaPrograma === "tesoura") ||
    (escolhaUsuario === "tesoura" && escolhaPrograma === "pedra")
) {
    alert("Você perdeu!");

} else {
    alert("Escolha inválida. Por favor, escolha entre Pedra, Papel ou Tesoura.");
    
}
