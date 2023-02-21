let numeros=[1,2,3,4,5,6,7,8,9]

let nombres=Array("juan","sara","alba")

//1. yo quiero recorrer un arreglo
//para filtrar informacion

//buscar si en numeros hay un numero mayor a 5
let filtro=numeros.filter(function(numero){
    return(numero>5)
})

let filtro2=numeros.filter(numero=>numero>5)
console.log(filtro)
console.log(filtro2)

//quiero buscar si en el arreglo de numeros esta el numero 10
let filtro3=numeros.filter(function(numero){
    return numero ===10
})
console.log(filtro3)

let filtro4=numeros.filter(numero=>numero===10)
console.log(filtro4)