// declaração de função

function minhaFuncao(param) {
    // bloco de código
}

minhaFuncao("param");

// expressão de função

//const soma = function(num1, num2) {return num1 + num2;}
//console.log(soma(3,3));

// diferença principal: HOISTING
// funções e var são "listadas" no topo

console.log(apresentar());

function apresentar() {
    return "Hey!";
}

console.log(soma(5, 9));
const soma = function(num1, num2) {return num1 + num2;}