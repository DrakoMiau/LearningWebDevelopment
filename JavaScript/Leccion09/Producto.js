class Producto{
    static _contadorProductos = 0;
    constructor(nombre, precio){
        this._idProducto = ++Producto._contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }
    //getters y setters
    get idProducto(){
        return this._idProducto;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get precio(){
        return this._precio;
    }
    set precio(precio){
        this._precio = precio;
    }
    //toString
    toString(){
        return  'id del producto: ' + this.idProducto + ', nombre: ' + this._nombre + ', precio: ' + this._precio;
    }

}