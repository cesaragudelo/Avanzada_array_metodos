let numeros=[10,20,30,40,50,60,70,80,90,100]

//filtrar los numeros mayores o iguales de 50
let filtro=numeros.filter(function(numero){
    return(numero>=50)
})
console.log(filtro)
//mapear el filtro y restarle a cada elemento del arreglo 10 unidades
let mapa=filtro.map(function(filtra){
    filtra=filtra-10
    return(filtra)
})
console.log(mapa)
//encontrar si esta el numero 10

let buscarnumero10= mapa.some(function(numero){
    return(numero==10) 
})
console.log(buscarnumero10)