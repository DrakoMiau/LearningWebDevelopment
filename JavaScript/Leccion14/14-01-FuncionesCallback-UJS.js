function miFuncion1(){
    console.log('funcion 1');
}

function miFuncion2(){
    console.log('funcion 2');
}

miFuncion1();
miFuncion2();

//funciones de tipo callback

function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallBack){  //cuando se pasa una funcion como argumento no es necesario ponerle parentesis porque en realidad no la estamos llamando
    let res = op1 + op2;
    funcionCallBack(res);
}

sumar(1, 2, imprimir);

//las funciones callback funcionan para tener procesos asincronos

//llamadas asincornas con uso setTimeout

function miFuncionCallBack(){
    console.log('saludo asincrono despues de 3 seg')
}

setTimeout(miFuncionCallBack, 3000); //despues de 3 seg

let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}: ${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

setInterval(reloj, 1000);//se imprime cada segundo