



// fazer uma contagem de 0 até 20

for(let i=0; i <= 20; i++){  // inicio; até ser igual menor que; passo(add cada vez)

    console.log(i);

}


console.log('------------------------------------------');


// sorteio de 10 numeros        


let total = 0;  // somar os valores sorteados

for(let i=0; i <=9; i++){


    let numeroSorteado = Math.round(Math.random() * 100);

    total += numeroSorteado;

    console.log(`Número sorteado = ${numeroSorteado}`);
    
    
}

console.log(`Soma dos numeros sorteados: ${total}`);

console.log('------------------------------------------');


/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////  WHILE

// Sortear o numero 37

let novoSorteio = Math.round(Math.random() * 100);
let numSorteio = 1;

    while(novoSorteio !== 37){
        novoSorteio = Math.round(Math.random() * 100);
        numSorteio++
    }
console.log(novoSorteio);
console.log(`Numero de sorteios realizados: ${numSorteio}`);


console.log('------------------------------------------');

//////////////////////////  sortear pares



total = 0;  // somar os valores sorteados

for(let i=0; i <=9; i++){


    let numeroSorteado = Math.round(Math.random() * 100);
    while(numeroSorteado % 2 !== 0){
        numeroSorteado = Math.round(Math.random() * 100);
    }

    total += numeroSorteado;

    console.log(`Número sorteado = ${numeroSorteado}`);
    
}

console.log('------------------------------------------');


//////////////////////////  DO WHILE

// Esse i é uma variavel com escopo global

let i = 0;

do{
    console.log(`valor de i ${i}`);
    i++

} 
while (i <= 10);


























