// class Rectangulo{
//     private base: number;
//     private altura: number;

//     constructor(base: number, altura: number){
//         this.base = base;
//         this.altura = altura;
//     }

//     calcularArea(): number{
//         return this.base * this.altura;
//     }

//     perimetro(): number{
//         return 2 * (this.base + this.altura);
//     }
// }

class Vehiculo{
    protected fabricante: string

    constructor(fabricante:string) {
        this.fabricante = fabricante
    }

    moverse(){
        console.log(`El vehiculo ${this.fabricante} se mueve`)
    }
}

class VehiculoTerrestre extends Vehiculo{
    private ruedas: number

    constructor(fabricante:string, ruedas:number){
        super(fabricante)
        this.ruedas = ruedas
    }

    moverse(){
        console.log("laksdjflaksdjf")
        super.moverse()//llama al metodo de la clase padre
    }

    reparar(){
        console.log(`El vehiculo ${this.fabricante} se esta reparando dentro de sus ${this.ruedas} ruedas`)
    }
}

class VehiculoAereo extends Vehiculo{
    moverse(){
        console.log("El vehiculo aereo se mueve")
        super.moverse()//llama al metodo de la clase padre
    }
}

let vehiculo = new VehiculoTerrestre("Honda", 2)
vehiculo.moverse()
vehiculo.reparar()