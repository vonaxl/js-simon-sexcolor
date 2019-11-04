var pc=[];
var player=[];


// i made a var tempo just to make it easier to change each time  
var tempo = 10;

// random pc number
function pcRandom() {
    x=1+Math.floor(Math.random() * 100);
}        

// check if the x value is already on the list
function verifica() {
    var y=false;
    for (var i = 0 -1; i < pc.length; i++) {
        if (x==pc[i]) {
        y=true;    
        }
    }    
    if (y==false) {
        pc.push(x);
    }
}    

// push number 5 times
function check5() {
    var i = 0;
    while (i<5) {
        pcRandom();
        verifica();
        i++
    }    
}    

// redo the function:check5 till we don't get 5 different numbers
while (pc.length<5) {
    pc=[];
    check5();
}    


// show result as alert then timer starts
alert("I NUMERI DA METTERE ENTRO "+tempo+" SECONDI SONO: "+pc);

// timer of the game to be seen each seconds on console log 
var timer = setInterval (seconds, 1000);
function seconds(){
    if (tempo>0) {
        tempo--;
        console.log(tempo);
    }else {
        clearInterval(timer);
    }
}


// timer starts after the alert 
setTimeout(count, tempo*1000);
function count(){
    // ask player 5 times to put a number 
    while (player.length<5){
        var numeroPl = prompt("Inserisci un numero");
        player.push(numeroPl);
    }    
    winLose();
}


// funtion to sort and check if the players got any correct numbers 
function winLose() {
    var playerSort=player.sort();
    var pcSort=pc.sort();
    console.log("Numeri inseriti dal player = "+playerSort);
    console.log("Numeri del pc = "+pcSort);
    
    
    perso = false;
    for (let i = 0; i < pcSort.length; i++) {
        if (pcSort[i]!=playerSort[i]) {
            perso = true;
        }
    }
    if (perso == false) {
        console.log("Hai vinto!");
    }else {
        console.log("Hai perso");
    }
}