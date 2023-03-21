//Tipos primitivos no tienen atributos ni metodos asociados al valor
let x = 10;

function cambiarValor(a){
    a = 20;
}
//Paso por valor: no se altera el valor de la variable x ingresada
cambiarValor(x);//10
console.log(x);

//Ahora vamos a evaluar el paso por referencia

const persona = {
    nombre: 'Juan',
    apellido: 'Perez'
}

function cambiarValorObjeto(p1){
    p1.nombre = 'Deiver',
    p1.apellido = 'Bernal'
    return p1;
}

//El punto aqui es que estamos imprimiendo persona, mas no p1
console.log(cambiarValorObjeto(persona));
console.log(persona)