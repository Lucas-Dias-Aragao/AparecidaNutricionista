var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest(); //objeto que faz requisições http

    //open: abre a conexão com o endereço http
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");
        if(xhr.status == 200){
            erroAjax.classList.add("#invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta); //traduz o JSON para JS
            

            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });

        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            var erroAjax = document.querySelector("#erro-ajax");
            erroAjax.classList.remove("invisivel");
        }

    

    });

    //send: envia a requisição
    xhr.send();
});