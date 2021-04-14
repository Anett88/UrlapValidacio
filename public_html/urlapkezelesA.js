window.addEventListener("load",init);

//Segeédfüggvény

function ID(nev){
    return document.getElementById(nev);
}

function $(nev){
    return document.querySelectorAll(nev);
}

function init(){
    console.log("Hahó");//consolra írás
    ID("kuld").addEventListener("click",validalas);
    
}

function validalas(){
//    console.log("validáció");
var uzenet="";
var megadottAdatok="";
if(ID("nev").value.length<3){
    uzenet="A név legalább 3 karkter hosszú legyen!";
    ID("nev").style.border="2px solid red";
}else{
ID("nev").style.border="none";
}

var reg=/[A-Z]+[a-z]{2,}/;
//regurális kifejezés,ha egy false érték akkor kell az üzenet módósítani
if(!reg.test(ID("nev").value)){
    uzenet+="A név legalább 3 karakter hosszú legyen!"+"A név nagybeűvel kell kezdődjön";
       ID("nev").style.border="2px solid red";
}else{
ID("nev").style.border="none";
megadottAdatok+="Név: "+ID("nev").value+"<br>";
}



//ide írjuk ki a megadott helyre
//console.log(uzenet);
$("aside section:nth-child(1) p")[0].innerHTML=uzenet;
$("aside section:nth-child(2) p")[0].innerHTML=megadottAdatok;
}

