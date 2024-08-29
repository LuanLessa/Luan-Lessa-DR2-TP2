let a;
let b;
let c;
let d;
let e;

// Comentar SOMENTE as linhas abaixo
a = 3;
//a = 2;
//a = 7;
//a = 0;

b = undefined;
//b = null;
//b = 1;
//b = 'null';

c = /*'2000' + '20';
c = '20' +*/ 20;
//c = null;
//c = undefined;

//d = null;
d = undefined;
//d = 0;
//d = 'undefined';

// Não há resposta correta dada as restrições de apenas comentar ou descomentar o arquivo pois:
//e = null; // object
//e = 0; // number
//e = NaN; // number
//e = 'null'; // object
// Comentar SOMENTE as linhas acima

const verificacaoA = a > 2 && a < 4;
const verificacaoB = b === undefined;
const verificacaoC = typeof c === 'number';
const verificacaoD = d == undefined;
const verificacaoE = e === d;

console.log("a=" + verificacaoA);
console.log("b=" + verificacaoB);
console.log("c=" + verificacaoC);
console.log("d=" + verificacaoD);
console.log("e=" + verificacaoE);