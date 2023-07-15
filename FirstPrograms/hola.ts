// function saludar (nombre: string): string{
//     return `Hola, encantado de verte, ${nombre.toUpperCase()}!`
// }
// console.log(saludar("Juan"))

//Cree un objeto con los datos de una persona nombre, edad y ciudad de nacimiento
function datosPersona(nombre:string, edad:number, ciudad:string):object{
    return {
        nombre: nombre,
        edad: edad,
        ciudad: ciudad
    }
}
console.log(datosPersona("Juan", 34, "Bogota"))