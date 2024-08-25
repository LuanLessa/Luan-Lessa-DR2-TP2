/**
 * @file Aplicação para calcular o valor total de uma compra com descontos ou acréscimos, dependendo da forma de pagamento escolhida.
 * 
 * @description Este programa solicita ao usuário o valor total de uma compra e a forma de pagamento, aplicando descontos ou acréscimos conforme a escolha, e informa o valor final ao usuário.
 * 
 * @author Luan Lessa <luan.silva@al.infnet.edu.br>
 */

/**
 * Solicita ao usuário o valor total da compra e o converte para um número.
 * @type {number}
 */
const valorTotal = parseFloat(prompt("Digite o valor total da compra:"));

/**
 * Solicita ao usuário a forma de pagamento.
 * @type {string}
 */
const formaPagamento = prompt(`Digite a forma de pagamento de 1 a 5:\n
    1) à vista dinheiro.\n
    2) à vista débito.\n
    3) à vista crédito.\n
    4) a prazo débito até 3x.\n
    5) a prazo débito acima de 3x.`);

/**
 * Calcula o valor final da compra com base na forma de pagamento.
 * Aplica descontos ou acréscimos conforme a escolha do usuário.
 */
if (formaPagamento === "1") {
    const valorComDesconto = valorTotal * 0.9; // Desconto de 10%
    alert(`O valor com desconto de 10% é: R$ ${valorComDesconto.toFixed(2)}`);

} else if (formaPagamento === "2") {
    const valorComDesconto = valorTotal * 0.92; // Desconto de 8%
    alert(`O valor com desconto de 8% é: R$ ${valorComDesconto.toFixed(2)}`);

} else if (formaPagamento === "3") {
    const valorComDesconto = valorTotal * 0.95; // Desconto de 5%
    alert(`O valor com desconto de 5% é: R$ ${valorComDesconto.toFixed(2)}`);

} else if (formaPagamento === "4") {
    const valorParcela = valorTotal / 3; // Sem desconto
    alert(`O valor das parcelas (3x) é: R$ ${valorParcela.toFixed(2)}`);

} else if (formaPagamento === "5") {
    /**
     * Solicita ao usuário a quantidade de parcelas e o converte para um número.
     * @type {number}
     */
    const quantidadeParcelas = parseInt(prompt("Digite o número de parcelas (acima de 3x):"));

    if (quantidadeParcelas > 3) {
        const valorComAcrescimo = valorTotal * 1.04; // Acréscimo de 4%
        const valorParcela = valorComAcrescimo / quantidadeParcelas; // Dividido pelo número de parcelas
        alert(`O valor com acréscimo de 4% é: R$ ${valorComAcrescimo.toFixed(2)}\nO valor das parcelas (${quantidadeParcelas}x) é: R$ ${valorParcela.toFixed(2)}`);

    } else {
        alert("Número de parcelas inválido para essa opção de pagamento.");

    }

} else {
    alert("Forma de pagamento inválida. Por favor, tente novamente.");
}
