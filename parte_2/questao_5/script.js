/**
 * @file Declaração de variáveis utilizando diferentes tipos e explicação sobre boas práticas.
 * 
 * @description Este programa cria variáveis utilizando "const" e "let", explicando suas diferenças e o porquê de evitar o uso de "var" ou variáveis não declaradas.
 * 
 * @author Luan Lessa <luan.silva@al.infnet.edu.br>
 */

/**
 * Cria uma constante chamada "melhorGuitarrista" e atribui o valor "Jimi Hendrix".
 * Constantes são valores que não podem ser alterados após a atribuição inicial.
 * @type {string}
 */
const melhorGuitarrista = "Jimi Hendrix";

/**
 * Declara múltiplas variáveis "a", "b" e "c" com valores iniciais 1, 2 e 3, respectivamente.
 * Utiliza a palavra-chave "let", que permite que o valor das variáveis seja alterado posteriormente.
 * @type {number}
 */
let a = 1, b = 2, c = 3;

/**
 * Cria uma variável chamada "salarioMinimo" e atribui o valor do salário mínimo atual no Brasil.
 * Pode ser atualizado posteriormente se o salário mínimo mudar.
 * @type {number}
 */
let salarioMinimo = 1320.00;  // Valor fictício, atualize conforme necessário.

/**
 * Explicação sobre "let" e "const".
 * 
 * "let" e "const" são palavras-chave introduzidas no ES6 (ECMAScript 2015) para declarar variáveis em JavaScript.
 * 
 * - "let": Declara variáveis que podem ter seu valor reatribuído. São variáveis de escopo de bloco, ou seja, só existem dentro do bloco onde foram declaradas.
 *   Exemplo:
 *   ```javascript
 *   let idade = 25;
 *   idade = 26;  // Isso é permitido, pois "idade" foi declarada com "let".
 *   ```
 * 
 * - "const": Declara constantes cujo valor não pode ser alterado após a atribuição inicial. Também são de escopo de bloco.
 *   Exemplo:
 *   ```javascript
 *   const pi = 3.14;
 *   pi = 3.1415;  // Isso gera um erro, pois "pi" foi declarada com "const" e seu valor não pode ser alterado.
 *   ```
 */

/**
 * Porque usar "var" ou variáveis não declaradas é uma má prática:
 * 
 * - "var": Declara variáveis que são de escopo de função e não de bloco. Isso pode levar a comportamentos inesperados e bugs difíceis de rastrear.
 *   Além disso, "var" permite a reatribuição e redefinição da variável dentro do mesmo escopo, o que pode causar conflitos e confusão.
 *   Exemplo:
 *   ```javascript
 *   var nome = "Alice";
 *   var nome = "Bob";  // Isso é permitido com "var", mas pode ser confuso.
 *   ```
 * 
 * - Variáveis não declaradas: Se você atribuir um valor a uma variável que não foi declarada com "let", "const", ou "var", ela é automaticamente criada no escopo global.
 *   Isso pode levar a efeitos colaterais indesejados e à poluição do escopo global, o que é considerado uma má prática.
 *   Exemplo:
 *   ```javascript
 *   nome = "Charlie";  // Cria uma variável global, o que é indesejado na maioria dos casos.
 *   ```
 * 
 * Em resumo, "let" e "const" são preferidos porque oferecem controle mais previsível sobre o escopo e o comportamento das variáveis, ajudando a evitar erros comuns de programação.
 */
