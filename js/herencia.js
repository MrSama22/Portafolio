class Persona{

    static contadorObjetosPersona = 0

    constructor(nombre,apellido,edad){

        this._idPersona = ++Persona.contadorObjetosPersona
        this.edad = edad;
        this._nombre = nombre;
        this._apellido = apellido
    }
    get idPersona(){
        return this._idPersona
    }

    set idPersona(idPersona){
        this._idPersona = idPersona
    }

    get edad(){
        return this._edad
    }

    set edad(edad){
        this._edad = edad
    }

    get nombre(){
        return this._nombre
    }

    set nombre(nombre){
        this._nombre = nombre
    }

    get apellido(){
        return this._apellido
    }
    set apellido ( apellido){
        this._apellido = apellido;
    }
    toString(){
        // se aplica polimorfismo
        // el metodo que se ejecuta depende si es una referencia de tipo padre o de tipo hijo
        return `
        ${this._idPersona}.
        nombre :${this._nombre} 
        apellido :${this.apellido} 
        edad :${this.edad} `
    }
}

class Empleado extends Persona{
    
    static contadorEmpleados = 0

     constructor(nombre,apellido,edad,sueldo){
        super(nombre,apellido,edad)
        this._idEmpleado = ++ Empleado.contadorEmpleados
        this._sueldo = sueldo
     }
     get idEmpleado(){
        return this._idEmpleado
     }
     set idEmpleado(idEmpleado){
        this._idEmpleado = idEmpleado
     }
     get sueldo(){
        return this._sueldo
     }
     set sueldo(sueldo){
        this._sueldo = sueldo
     }
     toString(){
        return `${super.toString()} 
        id empleado :${this._idEmpleado} 
        sueldo :$${this.sueldo}`
     }
}
class Cliente extends Persona{

    static contadorCliente = 0

    constructor(nombre,apellido,edad,FechaRegistro){
       super(nombre,apellido,edad)
       this._idCliente = ++Cliente.contadorCliente
       this._FechaRegistro = FechaRegistro
    }
    get idCliente(){
        return this._idCliente
     }
    get FechaRegistro(){
       return this._FechaRegistro
    }
    set FechaRegistro(_FechaRegistro){
       this.FechaRegistro = _FechaRegistro
    }
    toString(){
        return `
        ${super.toString()}
        fecha de registro : ${this.FechaRegistro} 
        id cliente : ${this.idCliente}`
     }
}
let persona1 = new Persona("maria", "aldana", "13") // persona parametros
let persona2 = new Persona("carlos", "chacon", "15") // persona parametros

let cliente1 = new Cliente("jose","camilo",12,new Date())// cliente parametros
let cliente2 = new Cliente("carla","sofia",20,new Date())// cliente parametros


let empleado1 = new Empleado("andres", "maria", "12", 100000)// empleado parametros
let empleado2 = new Empleado("juan", "bosco", "25", 700000)// empleado parametros


console.log(persona1.toString())
console.log(persona2.toString())

console.log(empleado1.toString())
console.log(empleado2.toString())


console.log(cliente1.toString())
console.log(cliente2.toString())


console.log(Persona.contadorObjetosPersona)