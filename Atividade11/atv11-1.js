function calc_area(){
    var a, b, c;
    a = Number.parseInt(document.getElementById('n1').value);
    b = Number.parseInt(document.getElementById('n2').value);
    var res = new area(a, b);
    c = res.altura * res.base;
    document.getElementById('area').innerText = `Área do retângulo: ${c}`
}

function area(a, b){
    this.altura = a;
    this.base = b;
}