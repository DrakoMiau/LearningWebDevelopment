/*Principalmente tenemos la clase dispositivo entrada, la cual sera la clase padre en la cual
agregaremos los metodos get y set de cada atributo, ademas tendremos dos clases hijas, la clase 
raton y la clase teclado. En la clase raton debemos tener el metodo get para el idRaton.
Luego tenemos la clase monitor, la cual es una clase independiente, es decir, no tiene clase
padre, posteriormente tendremos una clase computadora en la cual vamos pasar una referencia de
los demas componentes*/
class DispositivoEntrada {

    constructor(tipoEntrada, marca) {
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada() {
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada) {
        this._tipoEntrada = tipoEntrada;
    }
    get marca() {
        return this._marca;
    }
    set marca(marca) {
        this._marca = marca;
    }
}

class Raton extends DispositivoEntrada {
    static contadorRatones = 0;
    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    get idRaton() {
        return this._idRaton;
    }
    toString() {
        return 'idRaton: ' + this._idRaton + ', tipoEntrada: ' + this._tipoEntrada + ', marca: ' + this._marca;
    }

}

class Teclado extends DispositivoEntrada {
    static contadorTeclados = 0;
    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    get idTeclado() {
        return this._idTeclado;
    }

    toString() {
        return 'idTeclado: ' + this._idTeclado + ', tipoEntrada: ' + this._tipoEntrada + ', marca: ' + this._marca;
    }
}

class Monitor {
    static contadorMonitores = 0;
    constructor(marca, tamanio) {
        this._marca = marca;
        this._tamanio = tamanio;
        this._idMonitor = ++Monitor.contadorMonitores;
    }

    get marca() {
        return this._marca;
    }
    set marca(marca) {
        this._marca = marca;
    }
    get tamanio() {
        return this._tamanio;
    }
    set tamanio(tamanio) {
        this._tamanio = tamanio;
    }
    get idMonitor() {
        return this._idMonitor;
    }

    toString() {
        return 'idMonitor: ' + this._idMonitor + ', marca: ' + this._marca + ', tamaño: ' + this._tamanio;
    }
}

class Computadora {
    static contadorComputadoras = 0;
    constructor(nombre, monitor, teclado, raton) {
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
        this._idComputadora = ++Computadora.contadorComputadoras;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get monitor() {
        return this._monitor;
    }
    set monitor(monitor) {
        this._monitor = monitor;
    }
    get teclado() {
        return this._teclado;
    }
    set teclado(teclado) {
        this._teclado = teclado;
    }
    get raton() {
        return this._raton;
    }
    set raton(raton) {
        this._raton = raton;
    }
    get idComputadora(){
        return this._idComputadora;
    }

    toString() {
        return 'Computadora ' + this._idComputadora + ': ' + this._nombre + '\n'
        + 'Monitor: [' + this.monitor.toString() + ']\n'
        + 'Raton: [' + this.raton.toString() + ']\n'
        + 'Teclado: [' + this.teclado.toString() + ']\n'
    }
}

class Orden {
    static contadorOrdenes = 0;
    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    agregarComputadora(computadora){
        this._computadoras[computadora.idComputadora - 1] = computadora;
    }
    toString() {
        return 'Orden: ' + this._idOrden + ', Computadoras:';
    }
    mostrarOrden() {
        console.log(this.toString());
        for (let index = 0; index < this._computadoras.length; index++) {
            console.log(this._computadoras[index].toString());
        }
    }
    
}

//creamos los componentes

let raton1 = new Raton('USB', 'SteelSeries');
let raton2 = new Raton('Bluetooth', 'Razer');
let teclado1 = new Teclado('USB', 'Keychron');
let teclado2 = new Teclado('Bluetooth', 'EpoMaker');
let monitor1 = new Monitor('Nvidia', '27');
let monitor2 = new Monitor('LG', '27');

//creamos nuestros computadores

let computadora1 = new Computadora('NG1', monitor1, teclado1, raton1);
let computadora2 = new Computadora('AlienWare', monitor2, teclado2, raton2);

//creamos la orden

let orden1 = new Orden();

orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);

//imprimimos en consola la orden

orden1.mostrarOrden();


