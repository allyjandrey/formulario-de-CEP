//recurso: viacep.com.br/ws/01001000/json/
let cep = document.querySelector('#cep');
let rua = document.querySelector('#rua');
let bairro = document.querySelector('#bairro');
let cidade = document.querySelector('#cidade');
let uf = document.querySelector('#uf'); 
let ibge = document.querySelector('#ibge');
let ddd = document.querySelector('#ddd');

cep.addEventListener('blur', async function(e) {
    let cep = e.target.value;
    let script  = document.createElement('script');
    const small = document.getElementById('small');
    const CEP = document.getElementById('cep');
    const inputt = document.querySelectorAll('input');

    script.src = 'https://viacep.com.br/ws/'+cep+'/json/?callback=informacoesFormulario';
    document.body.appendChild(script);

    if(CEP.value === '') {
        CEP.style.borderColor = "#C02F1F"
        small.innerHTML = "Essa informação é obrigatória"
    }
});

async function informacoesFormulario(resultado) {
    const small = document.querySelector('small');
    const inputt = document.querySelectorAll('input')
    small.innerHTML = ""
    
    if("erro" in resultado){
        cep.style.borderColor = ""
        small.innerHTML = "O CEP inserido é inválido"
        inputt.value = ""
    } else {
        cep.style.borderColor = "#2ECC71"
        await delay(1);

    rua.value = resultado.logradouro;
    bairro.value = resultado.bairro;
    cidade.value = resultado.localidade;
    uf.value = resultado.uf;
    ibge.value = resultado.ibge;
    ddd.value = resultado.ddd;
    }
}

function delay(i){

    return new Promise(function(resolve){

        cep.value = 'Viajando...'
        rua.value = 'Viajando...'
        bairro.value = 'Viajando...'
        cidade.value = 'Viajando...'
        uf.value = 'Viajando...'
        ibge.value = 'Viajando...'
        ddd.value = 'Viajando...'

        setTimeout(resolve,i*1000);
    });
}