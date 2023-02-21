let estudiantes=Array(
    {nombre:"juan",edad:33,cedula:"123456"},
    {nombre:"cesar",edad:31,cedula:"654321"}
)

//mapeando el arreglo
let mapa=estudiantes.map(function(estudiante){
    estudiante.nota=1
    estudiante.edad=estudiante.edad-1
    return(estudiante)
})
console.log(mapa)