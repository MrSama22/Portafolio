class DispositivoEntrada{
    constructor(tipoEntrada,marca){
        this._tipoEntrada = tipoEntrada
        this._marca = marca
    }
    get tipoEntrada(){
        return this._tipoEntrada
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = this.tipoEntrada
    }
    get marca(){
        return this._marca
    }
    set marca(marca){
        this._marca = this.marca
    }
}
class Raton extends DispositivoEntrada{

    static contadorRatones = 0;

    constructor(marca,tipoEntrada){
        super(marca,tipoEntrada)
        this._idRaton = ++Raton.contadorRatones
    }
    toString(){
        return `[idRaton: ${this._idRaton}, marca: ${this._marca}, tipoEntrada: ${this._tipoEntrada}]`
    }
}

class Teclado extends DispositivoEntrada{

    static contadorTeclados = 0;

    constructor(marca,tipoEntrada){

        super(marca,tipoEntrada)
        this._idTeclado = ++Teclado.contadorTeclados
    }
    toString(){
        return `[idTeclado: ${this._idTeclado}, marca: ${this._marca}, tipoEntrada: ${this._tipoEntrada}]`
    }
}
class Monitor{

    static contadorMonitores = 0;

    constructor(marca,tamaño){

        this._marca = marca
        this._tamaño = tamaño
        this._idMonitor = ++Monitor.contadorMonitores
    }
    get tamaño(){
        return this._tamaño
    }
    set tamaño (tamaño){
        this._tamaño = this.tamaño
    }
    toString(){
        return `[idMonitor: ${this._idMonitor}, marca: ${this._marca} tamaño ${this._tamaño}]`
    }
}


class Computadora{

    static contadorComputadoras = 0;

    constructor(nombre,monitor,teclado,raton){
        
        this._nombre = nombre
        this.idComputadora = ++Computadora.contadorComputadoras
        this._monitor = monitor
        this._teclado = teclado
        this._raton = raton
    }
    toString(){
        return `\nComputadora ${this.idComputadora} : ${this._nombre} \n\n ${this._monitor} \n ${this._raton} \n ${this._teclado}`
    }
}
class Orden{

    static contadorOrdenes = 0

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes
        this._computadoras = []
    }
    get idOrden(){
        return this._idOrden
    }
    agregarComputadora(computadora){        

        this._computadoras.push(computadora)
    }            

    mostarOrden(){
        let computadorasOrden = ""
        for(let computadora of this._computadoras){
            computadorasOrden += `\n${computadora}`
        }
        console.log(`Orden : ${this._idOrden} , Computadoras: ${computadorasOrden}`)
    }
}


monitor1 = new Monitor("Hp",13)
raton1= new Raton("Razen", "USB")
teclado1= new Teclado ("Sansung","UBS")

console.log(monitor1.toString())
console.log(teclado1.toString())
console.log(raton1.toString())

computadora1 = new Computadora("hp",monitor1,raton1,teclado1)
computadora2 = new Computadora("Rizen",monitor1,raton1,teclado1)


console.log(computadora1.toString())

let orden1 = new Orden()

orden1.agregarComputadora(computadora1)
orden1.agregarComputadora(computadora2)

orden1.mostarOrden()



