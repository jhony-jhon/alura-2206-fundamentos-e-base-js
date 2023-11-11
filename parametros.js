// parâmetros de função
              
             //parâmetros
function soma(num1, num2) {
    return num1 + num2;
}

console.log(soma()); //retorna NaN, pois não passamos os números como parâmetros dentro de soma
console.log(soma(5, 60)); // funciona como esperado, pois passamos números como parâmetros.
console.log(soma(5, 50)); //posso ir mudando os parâmetros e a função continuará sendo executada
console.log(soma(5, 160));
console.log(soma(5, 5));
console.log(soma(5, 606));
console.log(soma(-555, 60));

// parâmetros X argumentos

// os parâmetros possuem ordem

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade(34, "Jhony"));
// a função nomeIdade roda, mas como não se respeitou a ordem dos parâmetros,
// ele exibe conforme foi passado, ainda que esteja errada e confusa.

function multiplica(num1, num2) {
    return num1 * num2;
}

console.log(multiplica(soma(4,4), soma(5, 15)));
// estamos chamando uma função dentro de outra. Ele soma os número e depois multiplica
// exibindo o resultado.

console.log(multiplica(soma(4,4)));
// como não passamos o segundo parâmetro, ele multiplica undefined pelo
// resultado da soma e o retorno no console é NaN.

function multiplicaAlterada(num1 = 1, num2 = 1) {
    return num1 * num2;
}

console.log(multiplicaAlterada(soma(4,4)));
// agora não teremos o retorno NaN no console,
// pois ele multiplica o parâmetro passado pelo default que demos 
// nessa função multiplica alterada.





