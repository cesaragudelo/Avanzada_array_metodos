let inmuebles=[
    {id:1,nombre:"el VIP", direccion:"cll 100"},
    {id:1,nombre:"PROVENZA", direccion:"crr 80"},
    {id:3,nombre:"EL RAUDAL", direccion:"cll 10"}
]

let buscador= inmuebles.find(function(inmueble){
    return(inmueble.id==1)
})

let buscador2= inmuebles.filter(inmueble=>inmueble.id==1)

let buscador3= inmuebles.some(function(inmueble){
    return(inmueble.id==1)
})
console.log(buscador)
console.log(buscador2)
console.log(buscador3)