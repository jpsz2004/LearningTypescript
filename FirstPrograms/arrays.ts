//arrays
let meses2 = ["Enero", "Febrero", "Marzo", 1, 2, true, null]//Se puede tipar con tipo any
let meses: string[] = ["Enero", "Febrero", "Marzo"]

//tuplas
let db : [nombre: string, edad: number, sexo:string] = ["Juan", 34, "hombre"]

let persona:{
    nombre: string,
    edad: number,
    pais: string,
    fecha_nacimiento: Date,
    sexo: string,
    profesional:{
        carrera: string,
        nivel: number
    }
} = {
    nombre: 'Fulanito Detal',
    edad: 30,
    pais: 'Argentina',
    fecha_nacimiento: new Date(1997, 5, 13),
    sexo: 'Masculino',
    profesional:{
        carrera: 'Ingenieria de Sistemas',
        nivel: 5
    }
}

