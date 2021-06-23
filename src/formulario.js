var cuartos = document.getElementById("cuartos");
var boton = document.getElementById("boton");
boton.addEventListener("click",numeroDeCuartos);

function numeroDeCuartos() {
    var numerohab = parseInt (cuartos.value);
    alert(numerohab);   
}

var checkbox = document.getElementById('checkbox1');
checkbox.addEventListener("change", validaCheckbox, false);
 function validaCheckbox()
{
 
  var checked = checkbox.checked;
  if(checked){
    document.getElementById('hora').innerHTML =  "<option selected>Horario</option><option >8:30 am</option><option >9:30 am</option><option >10:30 am</option><option >11:30 am</option><option >12:30 pm</option><option >1:30 pm</option><option >2:30 pm</option><option >3:30 pm</option><option >4:30 pm</option><option>5:30 pm</option>";
                   
  }
  else 
    document.getElementById('hora').innerHTML = "<option selected>Horario</option><option >8:00 am</option><option >9:00 am</option><option >10:00 am</option><option >11:00 am</option><option >12:00 pm</option><option >1:00 pm</option><option >2:00 pm</option><option >3:00 pm</option><option >4:00 pm</option><option>5:00 pm</option>";

  
};