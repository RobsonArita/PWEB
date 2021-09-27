document.getElementById("btnSubmit").onclick = function() {
    var res = document.querySelector('div#res')
    var sistema = document.querySelector('div#sistema');
    var final = document.querySelector('div#final');
    var radios = document.getElementsByName("imagem");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            res.innerHTML= "escolheu: " + radios[i].value;
            var ret = radios[i].value;
        }

    }

    var numero = (Math.random() * 100);
    if(numero < 33){
        var pc = "PEDRA";
    }
    else if(numero < 66)
    {
        var pc = "PAPEL";
    }
    else{
        var pc = "TESOURA";
    }
    sistema.innerHTML= "O SCRIPT escolheu " + pc;
    if(ret == "pedra"){
        if(pc == "PEDRA")
        final.innerHTML = "Você EMPATOU";
        else if(pc == "PAPEL")
        final.innerHTML = "Você PERDEU";
        else
        final.innerHTML = "Você GANHOU"
    }
    else if(ret == "papel"){
        if(pc == "PEDRA")
        final.innerHTML = "Você GANHOU";
        else if(pc == "PAPEL")
        final.innerHTML = "Você EMPATOU";
        else
        final.innerHTML = "Você PERDEU"
    }
    else if(ret == "tesoura"){
        if(pc == "PEDRA")
        final.innerHTML = "Você PERDEU";
        else if(pc == "PAPEL")
        final.innerHTML = "Você GANHOU";
        else
        final.innerHTML = "Você EMPATOU"
    }


};

