const slider = document.getElementsByClassName("slider_caneca");
const canceca_mostruario = document.getElementById("canceca_mostruario");
const cep = document.getElementById("cep");
const frete = document.querySelector(".calcular-frete");

const params = new URLSearchParams(window.location.search);

var canecaSrc = params.get('data')



console.log(slider);

let currentImg = 0;
const MAX_IMG = 8;
slider[0].style.opacity = "1"; 

function changeImg(){
    slider[currentImg].style.opacity = "0"; 
    currentImg++;
    if(currentImg > MAX_IMG - 1){
        currentImg = 0;
    }
    slider[currentImg].style.transition = "1.5s"; 
    slider[currentImg].style.opacity = "1"; 
    
    
    console.log("img: " + currentImg);  
}





function mostrarImg(){
    canceca_mostruario.src = canecaSrc;
}

function calcularFrete(){
    frete.querySelector("p").style.display = "flex";
    
}



setInterval(changeImg, 7000);