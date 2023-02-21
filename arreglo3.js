let equipos=[
    {nombre:"atletico nacionl",titulos:32},
    {nombre:"independiente medellin",titulos:15},
    {nombre:"junior de barranquilla",titulos:7}
]
let sumaDeTitulos=0
equipos.forEach(function(equipo){
    sumaDeTitulos=sumaDeTitulos+equipo.titulos
})
console.log(sumaDeTitulos)