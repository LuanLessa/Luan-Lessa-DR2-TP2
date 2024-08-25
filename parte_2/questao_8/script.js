/**
 * @file Explicação sobre a diferença entre os valores "null" e "undefined" em JavaScript.
 * 
 * @description Este script explica a diferença entre os valores "null" e "undefined", fornecendo exemplos de cada um.
 * 
 * @example
 * // Exemplo de undefined
 * let x;
 * console.log(x); // Saída: undefined
 * 
 * // Exemplo de uso prático de null
 * let pessoa = {
 *   nome: 'Carlos',
 *   idade: null
 * };
 * 
 * @author Luan Lessa <luan.silva@al.infnet.edu.br>
 */

/**
 * Diferença entre "null" e "undefined":
 * 
 * - "undefined": Este é o valor padrão de uma variável que foi declarada, mas não foi inicializada. Em outras palavras, uma variável tem o valor "undefined" quando não foi atribuído nenhum valor a ela. 
 *   Além disso, "undefined" também é o valor de retorno padrão de funções que não têm uma instrução de retorno explícita.
 * 
 *   Exemplo:
 *   """javascript
 *   let exemploUndefined;
 *   console.log(exemploUndefined); // Saída: undefined
 *   """
 *   No exemplo acima, a variável "exemploUndefined" foi declarada, mas não recebeu nenhum valor, então seu valor é "undefined".
 * 
 * - "null": Este é um valor que é explicitamente atribuído a uma variável para indicar a ausência intencional de qualquer objeto ou valor. Em outras palavras, "null" é usado quando queremos dizer que "não há valor" ou "o valor é intencionalmente vazio".
 * 
 *   Exemplo prático:
 *   """javascript
 *   let exemploNull = null;
 *   console.log(exemploNull); // Saída: null
 *   """
 *   No exemplo acima, a variável "exemploNull" é explicitamente definida como "null", indicando que ela não possui nenhum valor ou objeto associado.
 */

/**
 * Exemplo de "undefined":
 * @example
 * let exemploUndefined;
 * console.log(exemploUndefined); // Saída: undefined
 * 
 * Nesse exemplo, a variável "exemploUndefined" foi declarada, mas não inicializada com nenhum valor, portanto, ela é "undefined".
 */

/**
 * Exemplo prático de "null":
 * @example
 * let usuario = {
 *   nome: 'Ana',
 *   idade: null
 * };
 * 
 * console.log(usuario.idade); // Saída: null
 * 
 * Nesse exemplo, a propriedade "idade" do objeto "usuario" é explicitamente definida como "null" para indicar que a idade é desconhecida ou não aplicável.
 */
