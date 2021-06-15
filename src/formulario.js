var cuartos = document.getElementById("cuartos");
var boton = document.getElementById("boton");
boton.addEventListener("click",numeroDeCuartos);

function numeroDeCuartos() {
    var numerohab = parseInt (cuartos.value);
    alert(numerohab);   
}

