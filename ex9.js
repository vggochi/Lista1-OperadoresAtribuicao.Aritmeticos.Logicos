function jogoPontos() {

    let pontos = 0;

    //fase 1
    pontos += 10;
    pontos++;

    console.log("Fase 1:", pontos);

    //fase 2
    pontos -= 3;
    --pontos;

    console.log("Fase 2:", pontos);

    //fase 3
    pontos *= 2;
    pontos = pontos / 2 + 5;

    console.log("Fase 3:", pontos);

    //fase 4 bonus
    let bonusAtivo = true;

    bonusAtivo && (pontos += 20);

    console.log("Fase 4:", pontos);

    console.log("pontos++ e ++pontos aumentam 1 ponto");
    console.log("o resultado é igual porque foram usados sozinhos");
    console.log("&& retorna um número porque, quando a primeira condição é verdadeira, ele executa a segunda");
}

jogoPontos();