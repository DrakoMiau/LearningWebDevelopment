//forma clasica de trabajar con funciones
function miFuncion(){
    console.log('Llamada desde mi funcion');
}

miFuncion();

//ahora si la funciones flecha, estas tienen una caracteristica y es que no usamos un nombre para ellas, sino que son funciones anonimas
//pero para referirnos a ella no hacemos desde una variable

// let miFuncionFlecha = () => {
//     console.log('saludos desde mi funcion flecha');
// }

//veamos que tambien se puede definir la funcion flecha en una sola linea

const miFuncionFlecha = () => console.log('saludos desde mi funcion flecha');

miFuncionFlecha();

// const saludar = () => {
//     return 'Saludos desde funcion flecha';
// }

const saludar = () => 'Saludos desde funcion flecha'; //cuando lo queremos hacer en una sola linea, no hace falta poner el return

console.log(saludar());

const regresarObjeto = () => ({nombre: 'Deiver'}); //aqui estamos retornando un objeto, para ello hay que poner parentesis

console.log(regresarObjeto());

const funcionConParametros = (mensaje) => console.log(mensaje); // si tenemos solo un parametro no es necesario los parentesis, en vez de (mensaje), se puede poner solamente mensaje
funcionConParametros('Saludos a Paula');