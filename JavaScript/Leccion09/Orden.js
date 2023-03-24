class Orden{
    static contadorOrdenes = 0;
    productos = [];
    contadorProductosAgregados = 0;
    constructor(){
        this.contadorProductosAgregados++;
        contadorOrdenes++;
        this.idOrden = contadorOrdenes;
    }
    Orden(){

    }
    agregarProducto(producto){
        this.productos[this.contadorProductosAgregados] = producto;
    }
    calcularTotal(){
        suma = 0;
        for (let index = 0; index < this.productos.length; index++) {
            suma += this.productos[index]._precio;
        }
        return suma;
    }
    mostrarOrden(){

        for (let index = 0; index < array.length; index++) {
            console.log(this.productos[index]);
        }
        console.log('Total: ' + this.calcularTotal());
    }
}