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