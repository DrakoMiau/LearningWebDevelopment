class Persona {
    static contadorPersonas = 0;
    //constructor con incremento de id
    constructor(nombre, apellido, edad) {
        this._nombre = nombre;
        this.apellido = apellido;
        this._edad = edad;
        ++Persona.contadorPersonas;
        this._idPersona = Persona.contadorPersonas;
    }

    //getters y setters
    get idPersona(){
        return this._idPersona;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad = edad;
    }
    
    //metodo toString
    toString(){
        return this.idPersona + ': ' + this.nombre + ' ' + this._apellido + ' ' + this.edad + ' años';
    }
    
}

class Empleado extends Persona{
    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._sueldo = sueldo;
        this._idEmpleado = Persona.contadorPersonas;
    }
    //getters y setters
    get idEmpleado(){
        return this._idEmpleado;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this.sueldo = sueldo;
    }
    toString(){
        return  super.toString() + ', sueldo: ' + this.sueldo; 
    }
}

class Cliente extends Persona{
    constructor(nombre, apellido, edad){
        super(nombre, apellido, edad);
        let fecha = new Date();
        this._fechaRegistro = fecha;
        this._idCliente = Persona.contadorPersonas;
    }
    //getters y setters
    get idCliente(){
        return this._idCliente;
    }
    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
        this.fechaRegistro = fechaRegistro;
    }
    toString(){
        return super.toString() + ', fecha de registro: ' + this._fechaRegistro;
    }
}

let empleado1 = new Empleado('Deiver', 'Jair', 19, 9999999);
let persona1 = new Persona('Paula', 'Lopez', 18);
let cliente1 = new Cliente('Jair', 'Garzon', 19);
console.log(empleado1)
console.log(Persona.contadorPersonas);
console.log(empleado1.toString());
console.log(persona1);
console.log(cliente1.toString())

