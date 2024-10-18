const palabra = (arr, n) => arr.filter(palabra => palabra.length > n);
const palabras = [ "Pera" , "Mandarina" , "Manzana", "uba"];
const resultado=palabra (palabras, 3);
console.log(resultado);