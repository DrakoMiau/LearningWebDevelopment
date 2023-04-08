let miPromesa = new Promise((resolved,rejected) =>{ //una promeda recibe dos parametros, los cuales son dos funciones callback
    let expresion = true;
    if(expresion){
        resolved('Resuelto de forma correcta');
    }
    else
        rejected('Se produjo un error');
});

/*miPromesa.then(  //aclaracion es un metodo de la clase Promise que recibe dos parametros de tipo flecha en 2 lineas
    valor => console.log(valor),
    error => console.log(error) 
);*/

let promesa = new Promise((resolver) => {
    setTimeout(() => resolver('saludos con promesa y timeout'), 3000)
});

//promesa.then(valor => console.log(valor));

//async indica que una funcion regresa una promesa

async function miFuncionConPromesa(){
    return 'saludos con promesa y async';  //cualquier valor devuelto dentro de una funcion sera automaticamente envuelto dentro de una promesa
}

//miFuncionConPromesa().then(valor => console.log(valor));

//async / await
async function funcionConPromesaYAwait(){
    let miPromesa = new Promise( resolver => {
        resolver('Promesa con await');
    })

    console.log(await miPromesa);
}

//funcionConPromesaYAwait();

//orinesas, await, async y setTimeout
async function funcionConPromesaAwaitTimeout(){
    let miPromesa = new Promise(resolver => {
        setTimeout(() => resolver('promesa con await y timeout'), 3000)
    })
    console.log(await miPromesa);
}

funcionConPromesaAwaitTimeout();