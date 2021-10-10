
var res = 0;
var contador = 0;
var person = [];
var a, n, s, o, input;
var media_idade = 0;
var velho = 0;
var novo = 10000;
var pessimo = 0;
var o_b = 0;
var conthomem = 0, contmulher = 0;
function valida_form(){
    
    if(analisa() == 0){
        if(contador < 45){
            n = String(document.getElementById('name').value);
            a = Number.parseInt(document.getElementById('age').value);
            media_idade = media_idade + a;
            if(a > velho)
            velho = a;
            if(a < novo)
            novo = a;
            if(document.getElementById('homen').checked == true){
            s = "Homem";
            conthomem = conthomem + 1;
            }
            else{
            s = "Mulher";
            contmulher = contmulher + 1;
            }
            if(document.getElementById('a1').checked){
            o = 1;
            pessimo = pessimo + 1;
            }
            else if(document.getElementById('a2').checked)
            o = 2;
            else if(document.getElementById('a3').checked){
            o = 3;
            o_b = o_b + 1;
            }
            else if(document.getElementById('a4').checked){
            o = 4;
            o_b = o_b + 1;
            }
            pessoa[contador] = new pessoa(n, a, s, o);
            contador = contador + 1;
        }
        else
        window.alert("Formulário cheio");
        
    }
    }

function analisa_dados(){

    
   document.getElementById('resultado').innerText = "Resultado da Pesquisa"
   document.getElementById('valores').innerText = `Média das idades: ${media_idade/contador}\n
                                             Idade do mais velho: ${velho}\n
                                             Idade do mais novo: ${novo}\n
                                             Quantidade de avaliações "Péssimo": ${pessimo}\n
                                             Percentual de opiniões "Bom ou Otimo": ${(100*o_b/contador)}%\n
                                             Quantidade de mulheres: ${contmulher}\n
                                             Quantidade de homens: ${conthomem}`
    
}

function analisa(){
    
     if(document.getElementById("name").value == ""){
     alert('Por favor, preencha o campo Nome');
     res = 1;
     }
     if(document.getElementById("age").value == ""){
     alert('Por favor, preencha o campo Idade');
     res = 1;
     }
     if(document.getElementById('homen').checked == false && document.getElementById('mulher').checked == false) {
         alert('Por favor, preencha o campo Sexo');
         res = 1;
      }
     if(document.getElementById('a1').checked == false && document.getElementById('a2').checked == false && document.getElementById('a3').checked == false && document.getElementById('a4').checked == false) {
         alert('Por favor, preencha o campo Opinião');
         res = 1;
    }
    if(res == 1){
    res = 0;
    return 1;
    }
    else
    return 0;
    }
function pessoa(nome, idade, sexo, op){
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
    this.op = op;
}


        