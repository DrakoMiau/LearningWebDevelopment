let miPromesa = new Promise((resolved,rejected) =>{ //una promeda recibe dos parametros, los cuales son dos funciones callback
    let expresion = true;
    if(expresion){
        resolved('Resuelto de forma correcta');
    }
    else
        rejected('Se produjo un error');
});

miPromesa.then(
    valor => console.log(valor),
    error => console.log(error) 
);