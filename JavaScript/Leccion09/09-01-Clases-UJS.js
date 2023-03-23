class Persona {

    static contadorPersonas = 0; //este es un atributo de nuestra clase

    email = 'valor default email'; //atributo de nuestros objetos

    static get MAX_OBJ(){  //esto va a funcionar como una constante estatica dado que no podemos utilizar la palabra const
        return 5;
    }

    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
        if(Persona.contadorPersonas < Persona.MAX_OBJ){
            this.idPersona = Persona.contadorPersonas++;
        } else{
            console.log('Se han superado el maximo de objetos permitidos')
        }
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
        return  this.idPersona + ' ' + this.nombre + ' ' + this.apellido;
    }
    toString(){
        //en esta llamada se aplica polimorfismo
        return this.nombreCompleto();
    }
    //Vamos a aplicar la palabra static para refernirnos a metodos que sean  exclusivos de nuestra clase
    static saludar(){
        console.log('Saludos desde metodo static');
    }
    static saludar2(persona){
        console.log(persona.nombre);
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

let empleado1 = new Empleado('Cientifico commputacional', 'Jair', 'Bernal');

console.log(empleado1)
console.log(empleado1.nombreCompleto());
console.log(empleado1.nombre);
console.log(empleado1.toString());
//persona1.saludar(); no es posible llamar un metodo estatico desde un objeto
Persona.saludar(); //sin embargo, si lo podemos llamar desde una clase
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);
//Imprimimos un atributo estatico
console.log(Persona.contadorObjetosPersona);

console.log(persona1.email);
console.log(empleado1.email);
//console.log(Persona.email); no se puede dado que email es un atributo de objeto

console.log(Persona.MAX_OBJ);

let persona3 = new Persona('Jair', 'Garzon');
console.log(Persona.contadorPersonas);
let persona4 = new Persona('Andrea', 'Pabon');
console.log(Persona.contadorPersonas);
let persona5 = new Persona('Ligia', 'Garzon');
console.log(Persona.contadorPersonas);

