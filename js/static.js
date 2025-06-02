// no es posible ya que todavia no se ha definido la clase
// no se aplica el hoisting
//let persona2 = new Persona("matias", "jose");

class Persona{

    static contadorPersonas = 0;

    static get MAX_OBJ(){
        return 5
    }

    constructor(nombre,apellido){

        this._nombre = nombre;
        this._apellido = apellido
        if (Persona.contadorPersonas < Persona.MAX_OBJ){

            this.idPersona= ++Persona.contadorPersonas

        }
        else{
            console.log("bye bye")
        }

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
    nombreCompleto(){
        return this.idPersona + ", "+ this._nombre + " " + this._apellido;
    }
    // sobreescribiendo el codigo del Object de la clase padre
    toString(){
        // se aplica polimorfismo
        // el metodo que se ejecuta depende si es una referencia de tipo padre o de tipo hijo
        return this.nombreCompleto(); // 
    }
    static saludar(){
        console.log("saludos desde metodo static")
    }
    static saludar2(persona){
        console.log(`hola ${persona.nombre} ${persona.apellido}`)
    }
}

class Empleado extends Persona{
     constructor(nombre,apellido,departamento){
        super(nombre,apellido)
        this._departamento = departamento
     }
     get departamento(){
        return this._departamento
     }
     set departamento(departamento){
        this._departamento = departamento
     }
     //sobreescritura
     nombreCompleto(){
        return super.nombreCompleto() + ", " + this._departamento
     }
}

let persona1 = new Persona("jose", "maria")

console.log(persona1.nombreCompleto())

let empleado1 = new Empleado("maria","cardenas","ingeniero")

console.log(empleado1.nombreCompleto())

let persona2 = new Persona ("bye bye","se acabo para mi ")

console.log(persona2.toString())

console.log(Persona.MAX_OBJ)