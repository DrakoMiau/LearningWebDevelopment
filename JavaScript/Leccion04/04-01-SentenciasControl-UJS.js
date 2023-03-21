let condicion = false;

if (condicion) {
    console.log("Condicion verdadera");
}
else{
    console.log("Condicion falsa");
}

//estructura switch en JavaScript

let numero = 13;

switch (numero){
    case 1:
        numeroTexto = "Numero uno";
        break;
    case 2:
        numeroTexto = "Numero dos";
        break;
    case 3:
        numeroTexto = "Numero tres";
        break;
    case 4:
        numeroTexto = "Numero cuatro";
        break;
    case 5:
        numeroTexto = "Numero cincco";
        break;
    case 6:
        numeroTexto = "Numero seis";
        break;
    case 7:
        numeroTexto = "Numero siete";
        break;
    case 8:
        numeroTexto = "Numero ocho";
        break;
    case 9:
        numeroTexto = "Numero nueve";
    default:
        numeroTexto = "Caso no encontrado"
}

console.log(numeroTexto)