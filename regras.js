function finalizaCadastro() {
    alert("Cadastro realizado com sucesso !");
}

function buscarCEP() {
    var cep = document.getElementById('cep').value;
    var url = "https://viacep.com.br/ws/"+cep+"/json/";

    var endereco = document.getElementById('endereco');
    var bairro = document.getElementById('bairro');
    var cidade = document.getElementById('cidade');
    var estado = document.getElementById('estado');

    fetch(url, {method:"get"})
        .then(response => {
            response.json()
                .then(data => {
                    endereco.value = data.logradouro;
                    bairro.value = data.bairro;
                    cidade.value = data.localidade;
                    estado.value = data.uf;
                })

        })
}