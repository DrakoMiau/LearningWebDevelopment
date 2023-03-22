class Persona {
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre() {
        return this._nombre;
    }
    get apellido() {
        return this._apellido;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    set apellido(apellido) {
        this._apellido = apellido;
    }
    nombreCompleto() { //dentro de una clase no es necesario especificar la palabra function
        return this.nombre + ' ' + this.apellido;
    }
}

class Empleado extends Persona {
    constructor(departamento, nombre, apellido) {
        super(nombre, apellido);//llamar al constructor de la clase padre
        this._departamento = departamento;
    }
    get departamento() {
        return this._departamento;
    }
    set departamento(departamento) {
        this._departamento = departamento;
    }
    //sobreescritura\
    nombreCompleto() { //Para sobreescrir no hay que agregar ni quitar ningun parametro y la funcion debe tener el mismo nombre
        return super.nombreCompleto() + ', ' + this.departamento;
    }
}

let persona1 = new Persona('Deiver', 'Bernal');
let persona2 = new Persona('Paula', 'Lopez');

let empleado1 = new Empleado('Cientifico commputacional', 'Deiver', 'Bernal');

console.log(empleado1)
console.log(empleado1.nombreCompleto());
console.log(empleado1.nombre);