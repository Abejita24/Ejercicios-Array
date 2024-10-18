const valores = [10,5,6];
const valorMasAlto= Math.max(...valores);
const valorMasAltoIndex = valores.findIndex((v) => v === valorMasAlto);
console.log("El valor mas alto es",valorMasAlto);