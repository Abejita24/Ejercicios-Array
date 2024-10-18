const persona = [
    {nombre: "Meryl", edad: 18},
    {nombre: "Kevin", edad: 22}
];
const ciudades = [
    {ciudad: "pachuca"},
    {ciudad: "toluca"}
];
const convinar = persona.map((obj1, index) =>{
    return {...obj1, ...ciudades[index]};
})
console.log(convinar)