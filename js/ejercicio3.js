function calcularPromedio(numeros) {
    if (numeros.length === 0) {
      return 0;
    }
    let suma = numeros.reduce((a,b) => a + b, 0);
    return suma / numeros.length;
}
let numeros = [10, 10, 9, 8, 10];
let promedio = calcularPromedio(numeros);
console.log("El promedio es:", promedio);