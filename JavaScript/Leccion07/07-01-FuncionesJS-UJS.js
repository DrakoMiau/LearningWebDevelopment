function suma(a ,b){ //Como podemos ver en JavaScript no tenemos la necesidad de indicar el tipo de dato que va a recibir nuestra funcion
    //La propiedad argument solo se puede utilizar dentro del cuerpo de la funcion
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a + b;
}

//Como podemos ver la funcion se llama exactamente igual a como se hace en Java

suma(1, 2);

//Declaracion fundion de tipo expresion

let sumar = function (a, b){return a + b};

resultado = sumar(1,2);
console.log(resultado);

//Funcion de tipo self invoking, nuevo

(function (a, b){
    console.log("Ejecutando la funcion " + (a + b));
})(3, 4);

console.log(suma.toString());

//A continuacion vamos a definir una funcion tipo flecha

const sumarFuncionTipoFlecha = (a, b) => a + b;

resultado = sumarFuncionTipoFlecha(3, 5);

console.log(resultado);

//Una funcion en JavaScript es tambien un objeto

let restar = function (a, b){ return a - b}


restar(1, 3);

resultado = sumarTodo(5, 4, 13, 10, 9);

function sumarTodo(){
    let element = 0;
    for (let index = 0; index < arguments.length; index++) {
        element += arguments[index]; //element = element + arguments[index];
    }

    return element;
}

console.log(resultado);