document.getElementById('corrente').addEventListener("click", displayF1);
document.getElementById('poupança').addEventListener("click", displayF2);

function displayF1(){
    if(document.getElementById("form_poupança").style.display === 'block')
    document.getElementById("form_poupança").style.display = 'none';

    if(document.getElementById("form_corrente").style.display === 'block')
    document.getElementById("form_corrente").style.display = 'none';
    else
    document.getElementById("form_corrente").style.display = 'block';
}

function displayF2(){
    if(document.getElementById("form_corrente").style.display === 'block')
    document.getElementById("form_corrente").style.display = 'none';

    if(document.getElementById("form_poupança").style.display === 'block')
    document.getElementById("form_poupança").style.display = 'none';
    else
    document.getElementById("form_poupança").style.display = 'block';
}

function pessoa(){
    var nome, banco, nconta, saldo;

    this.setNome = function (value){
        nome = value;
    }
    this.setBanco = function(value){
        banco = value
    }
    this.setNconta = function(value){
        nconta = value
    }
    this.setSaldo = function(value){
        saldo = value
    }
    this.getNome = function () {
        return nome;
    }
    this.getBanco = function(){
        return banco;
    }
    this.getNconta = function(){
        return nconta;
    }
    this.getSaldo = function(){
        return saldo;
    }
}

function pessoaCorrente(){
    var sespecial;
    this.getSespecial = function(){
        return sespecial;
    };
    this.setSespecial = function(value){
        sespecial = value;
    };
}

function pessoaPoupança(){
    var juros, vencimento;
    this.getJuros = function(){
        return juros;
    };
    this.getVencimento = function(){
        return vencimento;
    };
    this.setJuros = function(value){
        juros = value;
    };
    this.setVencimento = function(value){
        vencimento = value;
    };
}

pessoaCorrente.prototype = new pessoa();
pessoaPoupança.prototype = new pessoa();

function validac(){    
    p1 = new pessoaCorrente();
    p1.setNome(String(document.getElementById('n1').value));
    p1.setBanco(Number.parseInt(document.getElementById('n2').value));
    p1.setNconta(Number.parseInt(document.getElementById('n3').value));
    p1.setSaldo(Number.parseInt(document.getElementById('n4').value));
    p1.setSespecial(Number.parseInt(document.getElementById('n5').value));
    document.getElementById('area').innerText = `Nome: ${p1.getNome()}\n
                                             Banco: ${p1.getBanco()}\n
                                             Número da conta: ${p1.getNconta()}\n
                                             Saldo: ${p1.getSaldo()}\n
                                             Saldo Especial: ${p1.getSespecial()}`
}

function validap(){    
    p1 = new pessoaPoupança();
    p1.setNome(String(document.getElementById('n1').value));
    p1.setBanco(Number.parseInt(document.getElementById('n2').value));
    p1.setNconta(Number.parseInt(document.getElementById('n3').value));
    p1.setSaldo(Number.parseInt(document.getElementById('n4').value));
    p1.setJuros(Number.parseInt(document.getElementById('n6').value));
    p1.setVencimento(String(document.getElementById('n7').value));
    document.getElementById('area').innerText = `Nome: ${p1.getNome()}\n
                                             Banco: ${p1.getBanco()}\n
                                             Número da conta: ${p1.getNconta()}\n
                                             Saldo: ${p1.getSaldo()}\n
                                             Juros: ${p1.getJuros()}\n
                                             Data de Vencimento: ${p1.getVencimento()}\n`
}