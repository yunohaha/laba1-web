function button() {
    document.getElementById('square1').style.display = 'flex';
    document.getElementById('square2').style.display = 'flex';
    document.getElementById('square3').style.display = 'flex';

    document.getElementById('square1').style.backgroundColor = '#917d88';
    document.getElementById('square2').style.backgroundColor = '#917d88';
    document.getElementById('square3').style.backgroundColor = '#917d88';

    document.getElementById('square1').style.cursor = 'pointer';
    document.getElementById('square2').style.cursor = 'pointer';
    document.getElementById('square3').style.cursor = 'pointer';

    document.getElementById('square1').onclick = function() { square(1); };
    document.getElementById('square2').onclick = function() { square(2); };
    document.getElementById('square3').onclick = function() { square(3); };

    document.getElementById('square1').classList.remove('selected');
    document.getElementById('square2').classList.remove('selected');
    document.getElementById('square3').classList.remove('selected');

    var d = document.getElementById('dejgi').innerHTML;
    if (isPlay === false) {
        d = Number(d);
        d += 1;
        isPlay = true;
    }
    document.getElementById('dejgi').innerHTML = d;
    startNewGame()
}

var isPlay = false;
var choise = false;
var numUserChoise;
var position; 
var gamestatus; 
var vic_pos;

function startNewGame(){ 
    choise = true;
    numUserChoise = null;
    vic_pos = Math.floor(Math.random()*3) + 1; 
    gamestatus = 'choise';
    document.getElementById('button').innerHTML = '<h1>Now playing...</h1>'
}

function square(number){
    var square = 'square' + number;
    var s1 = document.getElementById('s1').innerHTML;
    var s2 = document.getElementById('s2').innerHTML;
    var c1 = document.getElementById('c1').innerHTML;
    var c2 = document.getElementById('c2').innerHTML;
    s1 = Number(s1);
    s2 = Number(s2);
    c1 = Number(c1);
    c2 = Number(c2);

    
    if (gamestatus === 'choise'){
        
        numUserChoise = number;
        document.getElementById('square' + numUserChoise).classList.add('selected');

        var opensquare = openSquare();
        var goatSquare = document.getElementById('square' + opensquare);
        goatSquare.style.backgroundColor = '#eb6262';
        goatSquare.onclick = null; 
        gamestatus = 'offer';
        document.getElementById('button').innerHTML = '<h1>Replace?</h1>'
    }


    else if (gamestatus === 'offer'){
        if (number === numUserChoise){
            choise =  false;
            position = numUserChoise;
        } else {
            choise = true;
            position = number;
        }

        if (choise){
            document.getElementById('square' + numUserChoise).classList.remove('selected');
            document.getElementById('square' + position).classList.add('selected');
        }

        var isWin = (position === vic_pos)

        if (isWin){
            if (choise){
                s1++;
                document.getElementById('s1').innerHTML = s1;
            }else{
                c1++;
                document.getElementById('c1').innerHTML = c1;
            }
        } else {
            if (choise){
                s2++;
                document.getElementById('s2').innerHTML = s2;
            }else{
                c2++;
                document.getElementById('c2').innerHTML = c2;
            }
        }
        endGame()
    }
}
function openSquare(){

    var possibleGoats = [];

    for (var i = 1; i <=3; i++){
        if (i !== numUserChoise && i !== vic_pos) possibleGoats.push(i);
    }

    if (possibleGoats.length === 1) return possibleGoats[0];
    else{
        var randomidx = Math.floor(Math.random() * possibleGoats.length);
        return possibleGoats[randomidx];
    }
}
function endGame(){
    for (var i = 1; i <= 3; i++){
        var sq = document.getElementById('square' + i);
        if (vic_pos === i){
            sq.style.backgroundColor = '#72eea6';
        }
        else {
            sq.style.backgroundColor = '#eb6262';
        }
    }
    square1.onclick = null;
    square2.onclick = null;
    square3.onclick = null;
    isPlay = false;
    document.getElementById('button').innerHTML = '<h1>Сlick to start!</h1>'
}