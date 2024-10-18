let palabras = ["casa", "perro", "gato", "mesa", "silla"];
let conS = palabras.filter(function(palabra) {
  return palabra.includes("p");
});
console.log(conS); 