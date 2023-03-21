//Tipo de dato String
var nombre = "Carlos";
console.log(nombre);
//Tipo de dato numerico
var numero = 1000;
console.log(numero);

//Tipo de dato object
var objeto = {
    nombre : "Juan",
    apellido : "Perez",
    telefono : "2341234"
}
console.log(objeto)

//Tipo de dato boolean (true, false)

var bandera = true;
console.log(typeof bandera);

//Tipo de dato function

function miFuncion(){

}
console.log(typeof miFuncion)

//Tipo de dato Sybol

var simbolo = Symbol("mi simbolo");
console.log(typeof simbolo)

//Tipo de clase es una function

class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

console.log(typeof Persona);

//Tipo undefined

var x;
console.log(typeof x);

//null = ausencia de valor

var y = null;
console.log(typeof y);

var autos = ['BMW', 'Audi', 'Volvo'];
console.log(typeof autos)

var z = '';
console.log(z);
console.log(typeof z);
