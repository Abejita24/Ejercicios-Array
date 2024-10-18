const numeros =[1,2,3,4,5,6,7,8,9,10,5,5];
const validar = 5;
const contar = numeros.reduce((acc, current)=>{
    return current === validar ? acc + 1 : acc;
}, 0);
console.log(contar)