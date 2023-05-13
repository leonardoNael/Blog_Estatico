var imgAtual = -1;
var imgs = ["img/violao.jpg", "img/bike.jpeg", "img/carro.jpg", "img/mae.jpg", "img/pai.jpg"];

function topo(){
    window.scrollTo(0, 0);
}

function imganterior(){
    if(imgAtual == 0){
        imgAtual = 4;
        document.getElementById("imgopc").src = imgs[imgAtual];
    }
    else{
        imgAtual--;
        document.getElementById("imgopc").src = imgs[imgAtual];
    }
}

function proximg(){
    if(imgAtual == 4){
        imgAtual = -1;
    }
    imgAtual++;
    document.getElementById("imgopc").src = imgs[imgAtual];
    document.getElementById("setaesquerda").style.visibility = "visible";
}