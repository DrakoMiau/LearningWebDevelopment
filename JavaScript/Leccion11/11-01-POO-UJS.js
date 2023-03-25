class Empleado {
    constructor(nombre, sueldo) {
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado: nombre: ${this.nombre}, sueldo: ${this.sueldo}`;
    }
}

class Gerente extends Empleado {
    constructor(nombre, sueldo, departamento) {
        super(nombre, sueldo);
        this.departamento = departamento;
    }

    obtenerDetalles() {
        return `Gerente: ${super.obtenerDetalles()} depto ${this.departamento}`;
    }
}

function determinarTipo(tipo) {
    console.log(tipo.obtenerDetalles());
    if(tipo instanceof Gerente){  //para el uso de la palabra preguntar por el tipo de instancia, lo mas recomendables es preguntar primero por la clase de menor jerarquia
        console.log('Es un objeto de tipo gerente');
    } else if (tipo instanceof Empleado) {
        console.log('Es un objeto de tipo empleado');
    }
}

let empleado1 = new Empleado('Deiver', 100000000000);
let gerente1 = new Gerente('Paula', 999999999999, 'Español');

determinarTipo(empleado1);
determinarTipo(gerente1);
