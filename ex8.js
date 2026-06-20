function conversaoImplicita() {

    console.log("10" - 3);
    console.log("10" + 3);
    console.log(true + true);
    console.log(false - 1);
    console.log("5" * "2");

    //expressões que vão gerar NaN
    console.log("abc" - 2);
    console.log("teste" * 5);

    //comentários
    console.log('"10" - 3 = 7, porque a string vira número.');

    console.log('"10" + 3 = 103, porque o + junta os valores em uma string.');

    console.log('true + true = 2, porque true vale 1.');

    console.log('false - 1 = -1, porque false vale 0.');

    console.log('"5" * "2" = 10, porque as strings viram números.');

    console.log('"abc" - 2 gera NaN porque "abc" não pode virar número.');

    console.log('"teste" * 5 também gera NaN pelo mesmo motivo.');
}

conversaoImplicita();