const persona = [
    {nombre: "Meryl", edad: 18},
    {nombre: "Kevin", edad: 22},
    {nombre: "Mary", edad: 24}
];
const agru=persona.reduce((per, personas) => {
    const decada = Math.floor(personas.edad / 10) *10 + "s";
    if (!per[decada]){
        per[decada]=[];
    }
    per[decada].push(personas);
    return per;
}, {});
console.log(agru);