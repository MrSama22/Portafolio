class Persona{
    constructor(nombre , apellido , edad ){
        this._nombre = nombre ; 
        this._apellido = apellido; 
        this._edad = edad; 

    }
    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad = edad;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre ; 
    
    }
    get apellido (){
         return this._apellido;
    }
    set apellido (apellido){
        this._apellido = apellido;
    }
}

persona1 = new Persona("Jose" , "Ramirez" , "43")

console.log(persona1.nombre)

class Hijo extends Persona{
    constructor(nombre,apellido ,edad , colegio){
        super(nombre,apellido,edad)
        this._colegio = colegio;
    }
    get colegio(){
        return this._colegio
    }
    set colegio(colegio){
        this._colegio = colegio;
    }
    toString(){
        return super.nombre + " ,"+ this.colegio
    }
}

hijo1 = new Hijo ( "juan" , "jose", "14", "santa maria bilingue")

console.log(hijo1.toString())
