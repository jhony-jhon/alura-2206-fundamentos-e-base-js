// tipo de dado
// booleanos

// conversão implícita

const number = 550;
const numberString = "550";

// Number()
// String()


console.log(number === numberString);
console.log(number == numberString);
console.log(number + numberString);

// conversão explícita

console.log(number + Number(numberString));
console.log(String(number) + numberString);

// para realizar essa conversão explic. cuidado 
// para não misturar pois vai dar erro

const numberError = Number("5599i");
console.log(numberError);




