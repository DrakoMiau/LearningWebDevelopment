let contador = 0;

while (contador < 3) {
    console.log(contador);
    contador++;
}

//Todos los ciclos son igual que en Java, cosa que conozco
//Lo nuevo son las etiquetas

inicio:
for (let index = 0; index <= 10; index++) {
    if (index % 2 != 0) {
        continue inicio;  //el continue le indica que tiene que continuar al lugar donde esta ubicada la etiqueta
    }
}