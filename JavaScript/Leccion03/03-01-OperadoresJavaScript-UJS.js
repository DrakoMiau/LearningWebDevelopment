let a = 3, b = 2;
let z = a + b;
console.log("Resultado de la suma: " + z);

z = a - b;

console.log("Resultado de la resta: " + z);

z = a * b;

console.log("Resultado de la multiplicación: " + z);


z = a / b;

console.log("Resultado de la división: " + z);

z = a ** b;

console.log("Resultado de la exponenciación: " + z);

z = a % b;

console.log("Resultado del módulo: " + z);

//Incremento
//Pre-incremento(el operador ++ antes de la variable)

z = ++a;

console.log(a);
console.log(z);

//Post-incremento (el operador += despues de la variable)

let x = a++;

console.log(a);
console.log(x);

//Tambien tenemos operadores de comparacion
//Los usuales que ya conoces deiver
let m = 3, n = 2, q = "3";
let y =  a == b;

console.log(y);

//Este operador es nuevo, compara los valores pero tambien los tipos de variable

y = a === q;

console.log(y);

//Operador distinto de
y = 3 != 3;

console.log(y)

//A continuacion el operador ternario, este es importante

let resultado = (3>2) ? "verdadero" : "falso";

//Conversion de String a Number

let miNumero = "10";

//console.log(typeof miNumero)

let edad = Number(miNumero);

if (edad >= 18) {
    console.log("Puede votar");
} else{
    console.log("Muy joven para votar");
}

//precendecia de operaciones

