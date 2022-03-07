/*
console.log('-----------------------------------------');

//////////  .1.

console.log(`Escreva 5 nº`);

let numero = 3;
let vezes = 0;
let numerosMaiores = 0;


if (vezes <=5){

    console.log(`Digite o ${vezes}º numero`);

    let numero; //PEGA O NUMERO AKI
    if (numero >=10){
        numerosMaiores+1;
    }
    vezes+1;
    console.log(`${vezes}º numero: ${numero}`);
}

console.log(`Dos numeros digitados, ${numerosMaiores} deles são maiores que 10`);


console.log('-----------------------------------------');

//////////  .2.

let n1 = 3;
let n2 = 5;
let n3 = 9;
let n4 = 8;
let n5 = 1;
let maiores = 0;

console.log('Escreva 5 valores inteiros');


let media;
media = n1 + n2 + n3 + n4 + n5 / 4;

if (n1 >= media){numero+1};
if (n2 >= media){numero+1};
if (n3 >= media){numero+1};
if (n4 >= media){numero+1};
if (n5 >= media){numero+1};

console.log('A média entre os números é: ');


*/





////////////////////     .1.

let primeiroNumero = Math.round(Math.random()*20);
let segundoNumero = Math.round(Math.random()*20);
let terceiroNumero = Math.round(Math.random()*20);
let quartoNumero = Math.round(Math.random()*20);
let quintoNumero = Math.round(Math.random()*20);
let total = 0;

console.log(primeiroNumero, segundoNumero, terceiroNumero, quartoNumero, quintoNumero);


if (primeiroNumero > 10){
    total++;
}
if (segundoNumero > 10){
    total++;
}
if (terceiroNumero > 10){
    total++;
}
if (quartoNumero > 10){
    total++;
}
if (quintoNumero > 10){
    total++;
}


console.log(`Total de nºs maiores que 10: ${total}`)



console.log(`_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-`);
////////////////////     .2.


let nota1 = Math.round(Math.random()*100);
let nota2 = Math.round(Math.random()*100);
let nota3 = Math.round(Math.random()*100);
let nota4 = Math.round(Math.random()*100);
let nota5 = Math.round(Math.random()*100);

let media = (nota1 + nota2+ nota3+ nota4+ nota5 / 4)
console.log(`media obtida: ${media}`);

if(nota1>media){
    console.log(nota1);
}
if(nota2>media){
    console.log(nota2);
}
if(nota3>media){
    console.log(nota3);
}
if(nota4>media){
    console.log(nota4);
}
if(nota5>media){
    console.log(nota5);
}





console.log(`_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-`);
////////////////////     .3.



let numero = Math.round(Math.random()*500);
console.log(numero);

if(numero >= 100 && numero <= 200){
    console.log(`o número está no intervalo desejado`);
} else {
    console.log(`o número n esta no intervalo desejado`);
}


console.log(`_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-`);
////////////////////     .4.


let pesoTerra = Math.round(Math.random()*200);
let numeroPlaneta = (Math.round(Math.random()*5))+1;
let pesoPlaneta = 0;

console.log(pesoTerra);
console.log(numeroPlaneta)

if (numeroPlaneta === 1){
    pesoPlaneta = (pesoTerra/100) * 0.37;
} else if(numeroPlaneta === 2){
    pesoPlaneta = (pesoTerra/100) * 0.88;
} else if(numeroPlaneta === 3){
    pesoPlaneta = (pesoTerra/100) * 0.38;
} else if(numeroPlaneta === 4){
    pesoPlaneta = (pesoTerra/100) * 2.64;
} else if(numeroPlaneta === 5){
    pesoPlaneta = (pesoTerra/100) * 1.15;
} else{
    pesoPlaneta = (pesoTerra/100) * 1.17;
}

console.log(pesoPlaneta);



console.log(`_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-`);
////////////////////     .5.


let saldoMedio = Math.round(Math.random()*50000);
let creditoEspecial = 0;

console.log(`Saldo Médio = ${saldoMedio}`);

if(saldoMedio <= 2000){
    console.log(`Crédito especial = ${creditoEspecial}`);
}

if(saldoMedio <= 10000){
    creditoEspecial = saldoMedio * 0.20;
}
else if(saldoMedio <=20000){
    creditoEspecial = saldoMedio * 0.30;
}
else {
    creditoEspecial = saldoMedio * 0.40;
    
}
    console.log(`Crédito especial = ${creditoEspecial.toFixed(2)}`);
    
   


console.log(`_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-`);
////////////////////     .6.


let peso = Math.round(Math.random()*200);
let altura = ((Math.random()*2)+1).toFixed(2);
let imc = peso / (altura * altura);
let resultado;


console.log(`Peso = ${peso}`);
console.log(`Altura ${altura}`);
console.log(`IMC = ${imc.toFixed(2)}`);

if(imc <= 18.5) {
    resultado = 'abaixo do normal'
}
else if (imc <= 25) {
    resultado = 'normal'
}
else if (imc <= 30) {
    resultado = 'sobrepeso'
}
else if (imc <= 35) {
    resultado = 'obeso leve'
}
else if (imc <= 40){
    resultado = 'obeso moderado'
}
else {
    resultado = 'obesidade morbida'
}

console.log(resultado);














