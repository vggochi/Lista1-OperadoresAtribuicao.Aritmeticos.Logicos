

function calcularMediaPonderada() {

    let notaProva = 7.5;
    let notaTrabalho = 8.0;
    let notaProjeto = 6.5;

    let media = ((notaProva * 4) + (notaTrabalho * 3) + (notaProjeto * 3)) / 10;

    console.log("A média final do aluno é: " + media);

    let aprovado = media >= 7;

    console.log("Aprovado? " + aprovado);

    if (aprovado) {
        console.log("O aluno foi aprovado porque a média é maior ou igual a 7.");
    } else {
        console.log("O aluno foi reprovado porque a média é menor que 7.");
    }
}

calcularMediaPonderada();