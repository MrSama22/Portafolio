class Producto{
    static contadorProductos = 0

    constructor(nombre,precio){
        this._idProducto = ++Producto.contadorProductos
        this._nombre = nombre
        this._precio = precio
    }
    get idProducto(){
        return this._idProducto
    }
    get nombre(){
        return this._nombre
    }
    set nombre(nombre){
        this._nombre = nombre
    }
    get precio(){
        return this._precio
    }
    set precio(precio){
        this._precio = this.precio
    }
    toString(){
        return `
        id producto: ${this._idProducto} ,nombre: ${this.nombre}  ,precio: $${this.precio}`
    }
}




class Orden{

    static contadorOrdenes = 0

    static get MAX_PRODUCTOS(){
        return 5
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes
        this._productos = []
    }
    get idOrden(){
        return this._idOrden
    }
    agregarProducto(producto){
        if (this._productos.length < Orden.MAX_PRODUCTOS){
            
            this._productos.push(producto)
        }
        else{
            console.log("no se pueden agregar mas productos")
        }
    }
    calcularTotal(){
        let totalVenta = 0

        for(let producto of this._productos){
            totalVenta += producto.precio;
        }
        return totalVenta
    }
    mostarOrden(){
        let productosOrden = " "
        for(let producto of this._productos){
            productosOrden += producto.toString() + " "
        }
        return `
        Orden : ${this._idOrden} / Total: $${this.calcularTotal()}, / Productos: ${productosOrden}`
    }
}

let producto1 = new Producto("jabon",100)
let producto2 = new Producto("camisa",400)

let orden1 = new Orden()

orden1.agregarProducto(producto1)
orden1.agregarProducto(producto2)

console.log(orden1.mostarOrden())
