//let autos = new Array('BMW','Mercedes Bez','Volvo');
const autos = ['BMW', 'Mercedes Bez', 'Volvo']
console.log(autos)

//Para modificar los elementos de un arreglo, tenemos la forma usual

autos[0] = 'Lamborgini';

//Aqui podemos ver el cambio de valor
console.log(autos)

//A diferencia de Java, los arreglos en JavaScript son dinamicos, eso quieres decir que cuando realizamos un pushback y el arreglo esta lleno, no se crea un nuevo arreglo con la nueva cantidad de elementos, sino que el mismo arreglo actualiza el tamanio y agrega el nuevo elemento.
//La siguiente funcion es un pushback
autos.push('Audi');

console.log(autos);

//Tenemos otras formas para agregar elementos a nuestro arreglo ademas del pushback

console.log(autos.length);
autos[autos.length] = 'Cadillac';

console.log(autos)

//Notemos que se actualiza el lenght de neuestro arreglo

console.log(autos.length);


//Para preguntar si es un arreglo
//Dado que array es un tipo object, entonces tenemos lo siguiente
console.log(typeof autos);

//Aqui ya determinamos si es un array o no con un booleano

console.log(Array.isArray(autos));

//A continuacion otra forma para preguntar si es un array

console.log(autos instanceof Array);

//Finalmente para poder recorrer un arreglo es lo mismo que en Java, cosa que no tengo problema
