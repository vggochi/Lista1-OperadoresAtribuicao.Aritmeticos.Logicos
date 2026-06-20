function login() {

    let usuario = "leandro";
    let senha = "1234";

    let usuarioDigitado = "leandro";
    let senhaDigitada = "";

    let bloqueado = false;

    let loginValido = usuarioDigitado === usuario && senhaDigitada !== "";

    let podeAcessar = !bloqueado && loginValido;

    let mensagemErro = senhaDigitada || "Senha não informada.";

    console.log("Login válido:", loginValido);

    console.log("Pode acessar:", podeAcessar);

    console.log(mensagemErro);

    console.log('"" é falsy porque a senha está vazia.');

    console.log('O operador || usa a mensagem padrão quando não existe senha.');

    console.log('A mensagem exibida é "Senha não informada."');
}

login();