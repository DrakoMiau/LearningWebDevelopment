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

class Orden{
    static contadorOrdenes = 0;
    productos = [];
    contadorProductosAgregados = 0;
    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        Orden.contadorOrdenes++;
        this.idOrden = Orden.contadorOrdenes;
    }
    //metodos
    agregarProducto(producto){
        if(this.contadorProductosAgregados < Orden.MAX_PRODUCTOS){
            this.productos[this.contadorProductosAgregados] = producto;
            this.contadorProductosAgregados++;
        } else{
            console.log('No se pueden agregar mas productos');
        }
        
    }
    calcularTotal(){
        let suma = 0;
        for (let index = 0; index < this.productos.length; index++) {
            suma += this.productos[index]._precio;
        }
        return suma;
    }
    mostrarOrden(){

        for (let index = 0; index < this.productos.length; index++) {
            console.log(this.productos[index].toString());
        }
        console.log('Total:' + this.calcularTotal());
    }
}

//creamos nuestros productos
let producto1 = new Producto('Arroz', 100);
let producto2 = new Producto('Lentejas', 200);
let producto3 = new Producto('Cebolla', 300);
let producto4 = new Producto('Papaya', 400);
let producto5 = new Producto('Calabaza', 500);
let producto6 = new Producto('Yuca', 600);
let producto7 = new Producto('Papa', 700);
let orden1 = new Orden();
//insertamos los productos que tenemos
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto3);
orden1.agregarProducto(producto4);
orden1.agregarProducto(producto5);
orden1.agregarProducto(producto6);
orden1.agregarProducto(producto7);

orden1.mostrarOrden();
