//Esta sera la forma mas comun para definir funciones
let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    nombreCompleto: function () {
        console.log(this.nombre + " " + this.apellido);
    }
}

persona.nombre = 'Deiver';
/*console.log(persona.nombre);
console.log(persona.edad);
console.log(persona);*/
persona.nombreCompleto();

//Ahora vamos a crear un nuevo objeto utilizando la palabra reservada new

let persona2 = new Object();
persona2.nombre = 'Carlos';
persona2.direccion = 'Saturno 15';
persona2.tel = '55443322';

//Otra forma para acceder a las propiedades de nuestro objeto es la siguiente

console.log(persona['apellido']);

//for in

for (const propiedad in persona2) {
    console.log(propiedad);
    console.log(persona2[propiedad]);
}

//nuevo objeto

let persona3 = {
    nombre: 'Deiver',
    apellido: 'Bernal',
    carrera: 'Ciencias de la Computacion'
}

//para agregar una nueva propiedad a nuestro objeto

persona3.telefono = '3242345534';

console.log(persona3);

//ahora vamos a eleminar una propiedad existente

delete persona3.telefono;

console.log(persona3);

//tenemos otras formas para imprimir objetos

let personaArray = Object.values(persona3); //convertimos el objeto persona3 a un arreglo

console.log(personaArray);

let personaString =JSON.stringify(persona3); //convierte nuestro objeto en una cadena

//A continuacion veremos los metodos get y set

let persona4 = {
    nombre: 'Paula',
    apellido: 'Lopez',
    edad: '18',
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
         this.idioma = lang.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}

//A diferencia de java, tenemos que anteponer get a la funcion para indicarle que es un metodo get

console.log(persona4.nombreCompleto)

console.log(persona4.lang);

persona4.lang = 'en';

console.log(persona4.lang);
console.log(persona4.idioma);

//Funcion o metodo constructor
//Se recomienda que los metodos que sean constructores inicien con mayuscula
function Persona(nombre, apellido, email){
    this.nombre = nombre; //justo cuando utilizo this. creo el atributo, luego le asigno el argumento
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }

}

let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
console.log(padre);

let madre = new Persona('Ligia', 'Garzon', 'lgarzon@mail.com');
console.log(madre);

console.log(madre.nombreCompleto());

//Agregar una funcion a todos los objetos del mismo tipo, en este caso de tipo Persona

Persona.prototype.tel = '44332211';

console.log(padre.tel);
console.log(madre.tel);

//otras formas de crear objetos

let miObjeto = new Object(); //opcion mas formal
let miObjeto2 = {}; //opcion mas simplificada

let miCadena1 = new String('Hola'); //este objeto se crea con la clase de tipo String

let miNumero = new Number(1);

let miBoolean = new Boolean(false);

let miArreglo1 = new Array(); //sintaxis mas formal pero no recomendable

//Metodo call: el metodo call nos va a permitir llamar un metodo que esta dentro de un objeto, desde otro objeto
 
let persona5 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo, tel){
        return titulo + ': ' +this.nombre + ' ' + this.apellido + ' ' + tel;
    }
}

let persona6 = {
    nombre: 'Carlos',
    apellido: 'Perez'
}

console.log(persona5.nombreCompleto.call(persona6));

console.log(persona5.nombreCompleto.call(persona6, 'CS', '33445566'));

//Ahora utilizaremos una funcion parecida a call llamada apply

console.log(persona5.nombreCompleto.apply(persona6))
//Como podemos ver, los dos parametros que necesitamos pasar estan indefinidos
//Entonces tenemos que crear un arreglo con los parametros respectivos

let arreglo = ['Ing', '55443322'];

console.log(persona5.nombreCompleto.apply(persona6, arreglo));
//de este modo se utiliza la funicon apply