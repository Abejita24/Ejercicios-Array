function par(array) {
    return array.some(function (numeros) {
        return numeros % 2 ===0;        
    });   
}
const numeros = [1,3,5];
const resultado=par(numeros);
console.log(resultado);