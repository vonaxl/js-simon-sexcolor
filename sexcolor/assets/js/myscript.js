// chiedi il nome 
var nome=prompt("Come ti chiami?");
// chiedi il suo sesso 
var sesso=prompt("di che sesso sei? M/F");

var nameOutput=document.getElementById("nomeOut");
var sessoOutput=document.getElementById("sessoOut");

nameOutput.innerHTML=nome;

if (sesso=="M" || sesso == "m") {
    nameOutput.style.color="lightblue";
}else if (sesso=="F" || sesso == "f") {
    nameOutput.style.color="pink";
}