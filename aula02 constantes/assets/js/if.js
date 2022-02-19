


/////////////////////// SORTEIA NUMERO E OLHA C É PAR OU IMPAR


/////// SORTEIA
let numero = Math.round(Math.random() * 100);

console.log(`Número sorteado = ${numero}`);


/////// VERIFICA SE É IMPAR
if (numero % 2 === 0){
    console.log(`${numero} é par :)`);

} 
else {
    console.log(`${numero} é impar :)`);

}

/////// FAZENDO O IF EM MENOS LINHA

let resultado = numero % 2 === 0 ? 'par' : 'impar'; /////// IFTERNARIO
console.log(`${numero} é ${resultado}`);


/////////////////////// VERIFICA SE OS NÚMEROS SÃO IGUAIS - MAIOR - MENOR
// COMING SOON...


















