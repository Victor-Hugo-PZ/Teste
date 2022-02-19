



/////////////////////// CONSTANTES

const dataNascimento = '03/02/2005'; //NÃO PD DXR INDEFINIDO
console.log(dataNascimento);


let numero = 5;
console.log(numero);
numero = 500;
console.log(numero);

/////////////////////// GERA ERRO POIS É CONSTANTE    
/////////////////////// dataNascimento = '01/01/2000'
console.log('-----------------------------------------');


/////////////////////// OPERADORES ARITIMÉTICOS 
let primeiroNumero = 10;
let segundoNumero = 2;
let resultado = 0;

resultado = primeiroNumero + segundoNumero;/////// SOMA
console.log(`${primeiroNumero} + ${segundoNumero} = ${resultado}`);/////// o sinal é CRASE


resultado = primeiroNumero - segundoNumero;/////// SUBTRAÇÃO
console.log(`${primeiroNumero} - ${segundoNumero} = ${resultado}`);/////// o sinal é CRASE


resultado = primeiroNumero * segundoNumero;/////// MULTIPLICAÇÃO
console.log(`${primeiroNumero} * ${segundoNumero} = ${resultado}`);/////// o sinal é CRASE


resultado = primeiroNumero / segundoNumero;/////// DIVISÃO
console.log(`${primeiroNumero} / ${segundoNumero} = ${resultado}`);/////// o sinal é CRASE


resultado = primeiroNumero % segundoNumero;/////// MÓDULO
console.log(`${primeiroNumero} % ${segundoNumero} = ${resultado}`);/////// o sinal é CRASE


resultado = primeiroNumero ** segundoNumero;/////// POTENCIA
console.log(`${primeiroNumero} ** ${segundoNumero} = ${resultado}`);/////// o sinal é CRASE


console.log('-----------------------------------------');


/////////////////////// RELACIONAIS
/////// RETORNA APENAS  TRUE/FALSE

resultado = primeiroNumero > segundoNumero; /////// MAIOR
console.log(`${primeiroNumero} > ${segundoNumero} = ${resultado}`);


resultado = primeiroNumero < segundoNumero; /////// MENOR
console.log(`${primeiroNumero} < ${segundoNumero} = ${resultado}`);


resultado = primeiroNumero >= segundoNumero; /////// MAIOR OU IGUAL
console.log(`${primeiroNumero} >= ${segundoNumero} = ${resultado}`);


resultado = primeiroNumero <= segundoNumero; /////// MENOR OU IGUAL
console.log(`${primeiroNumero} <= ${segundoNumero} = ${resultado}`);


resultado = primeiroNumero == segundoNumero; /////// IGUAL / IGUALDADE
console.log(`${primeiroNumero} == ${segundoNumero} = ${resultado}`);


resultado = primeiroNumero != segundoNumero; /////// DESIGUALDADE / NÃO IGUALDADE
console.log(`${primeiroNumero} != ${segundoNumero} = ${resultado}`);


console.log('-----------------------------------------');


console.log(primeiroNumero, segundoNumero);
primeiroNumero = 100; /////// NÃO STRING
segundoNumero = '100'; /////// STRING


resultado = primeiroNumero === segundoNumero; /////// IGUAL / IGUALDADE , DO MESMO TIPO
console.log(`${primeiroNumero} === ${segundoNumero} = ${resultado}`);


resultado = primeiroNumero !== segundoNumero; /////// DESIGUALDADE / NÃO IGUALDADE , DO MESMO TIPO
console.log(`${primeiroNumero} !== ${segundoNumero} = ${resultado}`);


console.log('-----------------------------------------');


/////////////////////// OPERADORES LÓGICOS
/////// E(&&) - OU(||) - NÃO(!) - retorno apenas de TRUE/FALSE  - LIGAR EXPRESSÕES

primeiroNumero = 2;
segundoNumero = 10;


/////// operador OU(||) = Para ser TRUE, basta 1 dos termos ser TRUE
///////            FALSE        OU         TRUE      ==     TRUE
resultado = (primeiroNumero > 5) || (segundoNumero < 8);
console.log(resultado);


/////// operador E(&&) = para ser TRUE, basta que todos os termos sejam TRUE
///////            FALSE         E         TRUE      ==     FALSE
resultado = (primeiroNumero > 5) && (segundoNumero < 8);
console.log(resultado);


/////// operador NÃO(!) = ele inverte a resposta, para ser TRUE, basta ser FALSE
///////     ! (     FALSE          E        TRUE         )     ==     TRUE
resultado = !((primeiroNumero > 5) && (segundoNumero < 8));
console.log(resultado);


console.log('-----------------------------------------');


/////////////////////// OPERADORES UNITÁRIOS
/////// ADICIONA OU SUBTRAI 1 RAPIDAMENTE

primeiroNumero = 20;
segundoNumero = 10;
console.log(primeiroNumero, segundoNumero);

primeiroNumero++; /////// ADICIONA 1 AO VALOR
segundoNumero--;  /////// SUBTRAI 1 AO VALOR
console.log(primeiroNumero, segundoNumero);


/////////////////////// OPERADORES REDUZIDOS
/////// ADICIONA OU SUBTRAI RAPIDAMENTE GRANDES QUANTIDADES

primeiroNumero = 20;
segundoNumero = 10;
console.log(primeiroNumero, segundoNumero);

primeiroNumero+=60; /////// ADICIONA 60 AO VALOR
segundoNumero-=90; /////// SUBTRAI 90 AO VALOR
console.log(primeiroNumero, segundoNumero);


console.log('-----------------------------------------');









