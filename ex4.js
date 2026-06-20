function contadorExercicio() {

    let contador = 10;

    //linha A
    contador++;
    console.log("Linha A:", contador);

    //linha B
    ++contador;
    console.log("Linha B:", contador);

    //linha C
    contador--;
    console.log("Linha C:", contador);

    let resultado = contador++ + --contador;

    console.log("Resultado:", resultado);

    console.log("Contador final:", contador);

    //comentários 

    console.log("Linha A: contador++ aumenta 1 depois de usar o valor.");

    console.log("Linha B: ++contador aumenta 1 antes de usar o valor.");

    console.log("Linha C: contador-- diminui 1.");

    console.log("A expressão foi feita passo a passo para facilitar a compreensão.");

}

contadorExercicio();