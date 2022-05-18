//recurso: viacep.com.br/ws/01001000/json/
let cep = document.querySelector('#cep');
let rua = document.querySelector('#rua');
let bairro = document.querySelector('#bairro');
let cidade = document.querySelector('#cidade');
let uf = document.querySelector('#uf'); 
let ibge = document.querySelector('#ibge');
let ddd = document.querySelector('#ddd');

cep.addEventListener('blur', function(e) {
    let cep = e.target.value;
    let script  = document.createElement('script');
    script.src = 'https://viacep.com.br/ws/'+cep+'/json/?callback=informacoesFormulario';
    document.body.appendChild(script);
});

function informacoesFormulario(resultado) {
    

    console.log(resultado);
    rua.value = resultado.logradouro;
    bairro.value = resultado.bairro;
    cidade.value = resultado.localidade;
    uf.value = resultado.uf;
    ibge.value = resultado.ibge;
    ddd.value = resultado.ddd;
}

function checarInput() {
    const cepValor = cep.value;

    if (cepValor == "") {
        setarErro(username, "Insira um cep válido");
    } else if (cepValor.length > 9) {
        setarErro(username, "Um CEP não tem mais que 9 dígitos")
    } else {
        setarSucesso(username);
    }
}

function setarErro(input, mensagem) {
    const conteudoFormulario = input.parentElement;
    const small = conteudoFormulario.querySelector('small');
    

    small.innerText = mensagem;

    conteudoFormulario.className = "conteudo-formulario erro";
}

function setarSucesso(input) {
    const conteudoFormulario = input.parentElement;

    conteudoFormulario.className = "conteudo-formulario sucesso";
}