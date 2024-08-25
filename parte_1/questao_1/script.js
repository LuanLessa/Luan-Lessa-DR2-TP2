/**
 * @file Cálculo de troco com base na quantidade de dinheiro recebida e no valor do produto.
 * 
 * @author Luan Lessa <luan.silva@al.infnet.edu.br>
 */

/**
 * Quantidade de dinheiro recebida para pagar o produto.
 * @type {number}
 */
const dinheiroQueRecebi = parseFloat(prompt("Quantidade de dinheiro para pagar o produto?"));

/**
 * Valor do produto.
 * @type {number}
 */
const valorDoProduto = parseFloat(prompt("Valor do produto?"));

/**
 * Troco resultante da subtração do dinheiro recebido menos o valor do produto.
 * @type {number}
 */
const troco = dinheiroQueRecebi - valorDoProduto;

// Imprime os valores do troco, troco arredondado para baixo e para cima.
console.log("a) O troco é de: ", troco);
console.log("b) O troco arredondado para cima é de: ", Math.ceil(troco));
console.log("c) O troco arredondado para baixo é de: ", Math.floor(troco));
