//console.log('-----------------------------------------');




let numero = 789.456123;
console.log(numero);


/////////////////////// ARREDONDAMENTO PARA O PROXIMO INTEIRO
/////// Arredonda o Numero para o proximo inteiro

console.log(Math.ceil(numero));


/////////////////////// ARREDONDAMENTO PARA O MESMO INTEIRO
/////// Arredonda o Numero as casas decimais

console.log(Math.floor(numero));


/////////////////////// ARREDONDAMENTO INTELIGENTE
/////// se o valor decimal for entre 1 e 49 - mesmo inteiro
/////// se o valor decimal for entre 50 e 99 - proximo inteiro

console.log(Math.round(numero));


/////////////////////// RAIZ 
/////// faz raizes


/////// RAIZ QUADRADA
console.log(Math.sqrt(25));


/////// RAIZ CUBICA
console.log(Math.cbrt(8));


/////// DEFINIR NUMERO DE CASAS DECIMAIS
/////// .toFixed(3) - numero de casas decimais q vc deseja
console.log(Math.cbrt(80).toFixed(3));


/////////////////////// SORTEIO DE NUMEROS 
/////// sorteia numeros (0 - 1), bem quebrado

let numeroSorteado = Math.random();
console.log(numeroSorteado);


/////// Sorteio do número entre 0 e 100

numeroSorteado = Math.random() * 101;
console.log(numeroSorteado);


/////// Sorteio do número entre 0 e 100 INTEIRO

numeroSorteado = Math.round(Math.random() * 101);
console.log(numeroSorteado);













