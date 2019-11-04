var pc=[];
var player=[];
var numeroPlayer;


// i made a var tempo just to make it easier to change each time  
var tempo = 5;

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
var score=0,numScore=[],notValid=false;
function count(){

    // ask player 5 times to put a number with verification wether it is already inside the array
    while (player.length<5){
        numeroPlayer = parseInt(prompt("Inserisci un numero"));
        for (let p = -1; p < player.length; p++) {
            if (numeroPlayer===player[p]) {
                notValid = true;
                alert("Hai gia inserito questo valore")
            }
        }
        for (let j = 0; j < pc.length; j++) {
            if (numeroPlayer == pc[j] && notValid===false) {
                numScore.push(pc[j]);
                 score++;
                }            
            }
            player.push(numeroPlayer);  
        }    
    console.log("=================================================");
    console.log("I numeri da ricordare erano : "+pc);
    console.log("Il player ha inserito i seguenti numeri :"+player);
    console.log("=================================================");
    
    
    console.log("Il punteggio del player :"+score+" ha beccato questi numeri :"+numScore);
}

//        
// function winLose() {
    
    
//     perso = false;
//     for (let i = 0; i < pcSort.length; i++) {
//         if (pcSort[i]!=playerSort[i]) {
//             perso = true;
//         }
//     }
//     if (perso == false) {
//         console.log("Hai vinto!");
//     }else {
//         console.log("Hai perso");
//     }
// }