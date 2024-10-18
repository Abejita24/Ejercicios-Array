let arreglo=[10,10,1];
function SumarArreglo(arreglo) {
    let SumaElementos=0;
    arreglo.forEach(elementosArreglo=> {
        SumaElementos=SumaElementos+elementosArreglo;
    });
    return SumaElementos;
}
console.log("Tu suma es de: " + SumarArreglo(arreglo))