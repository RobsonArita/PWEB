function maior(){
    var a1, a2, a3, maior;
    a1 = Number.parseInt(document.getElementById('n1').value);
    a2 = Number.parseInt(document.getElementById('n2').value);
    a3 = Number.parseInt(document.getElementById('n3').value);
    if(a1 >= a2 && a1 >= a3)
    maior = a1;
    else if(a2 >= a1 && a2 >= a3)
    maior = a2;
    else if(a3 >= a1 && a3 >= a2)
    maior = a3;
    document.getElementById('maior').innerText = `Maior dos valores: ${maior}`
}
function organizar(){
    var a1, a2, a3, hp;
    a1 = Number.parseInt(document.getElementById('n1').value);
    a2 = Number.parseInt(document.getElementById('n2').value);
    a3 = Number.parseInt(document.getElementById('n3').value);

    if(a2 > a1){
        hp = a1;
        a1 = a2;
        a2 = hp;
    }

    if(a3 > a1){
        hp = a1;
        a1 = a3;
        a3 = hp;
    }

    if(a3 > a2){
        hp = a2;
        a2 = a3;
        a3 = hp;
    }

    document.getElementById('crescente').innerText = `Ordem crescente: ${a3} ${a2} ${a1}`
}