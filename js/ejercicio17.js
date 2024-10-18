const mayor = (array, n) => array.every(num=>num>n);
const numeros = [5,6,7,8,9,10];
const resultado=mayor(numeros, 4);
console.log(resultado)