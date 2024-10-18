const suma = array => array.reduce((acumulador, numeros)=>acumulador + numeros,0);
const numeros=[1,3,5,7,9,11];
const resultado = suma(numeros);
console.log(resultado)