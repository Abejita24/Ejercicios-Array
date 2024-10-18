const array1=[1,2,3];
const array2=[5,4,6];
const array3=[7,8,9];
const combinar = array1.concat(array2, array3);
const ordenar=combinar.sort((a,b)=> a-b);
console.log(ordenar);