function buttom() {
    document.getElementById('square1').style.display = 'flex';
    document.getElementById('square2').style.display = 'flex';
    document.getElementById('square3').style.display = 'flex';

    document.getElementById('square1').style.backgroundColor = '#332a2f';
    document.getElementById('square2').style.backgroundColor = '#332a2f';
    document.getElementById('square3').style.backgroundColor = '#332a2f';

    document.getElementById('square1').style.cursor = 'pointer';
    document.getElementById('square2').style.cursor = 'pointer';
    document.getElementById('square3').style.cursor = 'pointer';
    
    var d = document.getElementById('dejgi').innerHTML;
    d = Number(d);
    d += 1;
    document.getElementById('dejgi').innerHTML = d;
}

function square(number){
    var square = 'square' + number;
    var s1 = document.getElementById('s1').innerHTML;
    var s2 = document.getElementById('s2').innerHTML;

    s1 = Number(s1);
    s2 = Number(s2);
}
