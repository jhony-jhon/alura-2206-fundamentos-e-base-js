// let x = "";
// console.log(x);
// x = "olá!";

// 1) Declaração de função 

function imprimeTexto(texto) {
    console.log(texto);
}

// 2) Executando a função (1 ou + vezes)

imprimeTexto("Olá!");
imprimeTexto(soma());
//imprimeTexto("qualquer outro texto.");


// três formas de escrever funções

function soma() {
    const resultado = 2 + 2;
}

//console.log(soma()); // aqui vai gerar undefined, pois não pedimos para função RETORNAR algo.

function soma() {
    return  2 + 2;
}


