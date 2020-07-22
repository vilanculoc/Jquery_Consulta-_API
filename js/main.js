
function consultaCep(){
    $(".barra-progresso").show();
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/"+cep+"/json/";
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
        console.log(response);
        //alert(response.bairro);
        $("#logradouro").html(response.logradouro);
        $("#uf").html(response.uf);
        $("#localidade").html(response.localidade);
        $("#bairro").html(response.bairro);
        $("#titulo_cep").html("CEP " + response.cep);
        $(".cep").show();
        $(".barra-progresso").hide();
        //document.getElementById("logradouro").innerHTML = response.logradouro
        }
    })
}
$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
});
