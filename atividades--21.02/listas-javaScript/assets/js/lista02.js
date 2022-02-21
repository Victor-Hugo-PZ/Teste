


console.log('-----------------------------------------');

////////////////// .1.
let numeroInt = 5;  

console.log(`Digite um número inteiro qualquer`);
// console.log(`(numeroInt = xxxx)`);

console.log(numeroInt);
console.log(numeroInt + 1);
console.log(numeroInt - 1);
console.log(numeroInt * 2);
console.log(numeroInt / 2);


console.log('-----------------------------------------');

////////////////// .2.

let grausC = 27;
let grausF;

console.log(`Digite o valor de graus C°`);

grausF =  9 / 5 * grausC + 32;

console.log(`O valor dado em C° transformado em F° é: ${grausF}`);


console.log('-----------------------------------------');

////////////////// .3.

let valor = 300;
let valor10;
let valorTotal;

console.log(`Digite o valor da conta`);

valor10 = valor / 10;
valorTotal = valor + valor10;

console.log(`A conta deu:
  valor: R$${valor}
  10% do valor: R$${valor10}
  valor total: R$${valorTotal}`);


console.log('-----------------------------------------');

////////////////// .4.

let valor1 = 1;
let valor2 = 2;
let resultado;

console.log(`Digite os 2 valores desejados`);

resultado = valor1 > valor2; /////// MAIOR
console.log(`   ${valor1} > ${valor2} = ${resultado}`);

resultado = valor1 < valor2; /////// MENOR
console.log(`   ${valor1} < ${valor2} = ${resultado}`);

resultado = valor1 == valor2; /////// IGUAL / IGUALDADE
console.log(`   ${valor1} == ${valor2} = ${resultado}`);

resultado = valor1 != valor2; /////// DESIGUALDADE / NÃO IGUALDADE
console.log(`   ${valor1} != ${valor2} = ${resultado}`);


console.log('-----------------------------------------');

////////////////// .5.

let funNome = 'Fabiano Zartanhã';
let funHoras = 190;
let funDependentes = 3;
let valorBruto;
let valorFinal;
let valorInss;
let valorIr;


console.log(`Digite o nome do funcionario`)
console.log(`Digite as horas trabalhadas`)
console.log(`Digite quantos dependentes o funcionario tem`)


valorBruto = (funHoras * 154) + (funDependentes * 280);

// EU NÃO SEI FAZER %, EU SOU BURRO D++
valorIr = 'valorBruto - 8.5';

valorInss = 'valorBruto - 11';

valorFinal = 'valorBruto - valorIr - valorInss'


console.log(`Nome do funcionario: ${funNome}
   Horas trabalhadas: ${funHoras}
   Dependentes: ${funDependentes}
   Horas trabalhadas: ${funHoras}
   Salário bruto: ${valorBruto}
   Desconto de IR: ${valorIr}
   Desconto de INSS: ${valorInss}
   Salário final: ${valorFinal}`)




