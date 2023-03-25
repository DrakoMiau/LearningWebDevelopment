"use strict"

try {
    x = 10;    
} catch (error) {
    console.log(error);
} finally {
    console.log('termina la revision de errores');
}

console.log('continuamos...');

//Ahora vamos a utilizar la clausula throws para que podamos establecer nuestros propios tipos de errores
let resultado = -4;

try{
    if(isNaN(resultado)) throw 'No es un numero'
    else if(resultado === '') throw 'Es cadena vacia'
    else if(resultado >= 0) throw 'Valor positivo';
    else if(resultado < 0) throw 'Valor negativo';

} catch(error){
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}
finally{
    console.log('termina revision de errores');
}