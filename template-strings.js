const nome = "Jhony";
const idade = 2023 - 1989;
const cidadeOndeNasceu = "São Paulo - SP";

// const apresentacao = "Meu nome é " + nome + ", minha idade é " + idade +
// " e nasci na cidade de " + cidadeOndeNasceu; 

// acima ^ , esse é o modelo sem o uso das template strings.


// abaixo, estamos usando as template strings
// fazemos seu uso com o acento grave ` ` 

const apresentacao = `Meu nome é ${nome}, minha idade é ${idade} e nasci
na cidade de ${cidadeOndeNasceu}`;

console.log(apresentacao);

const c = []
const d = ''
if (d) {
    console.log("Verdade")
} else { 
    console.log("Falso")
}


