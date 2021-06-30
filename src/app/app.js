


// Cambio de valor en range cuartos
function rangeSlide(value) {
    document.getElementById('cuartos').innerHTML = value;
}

// Cambio de valor en range baños
function rangeBath(value) {
    document.getElementById('banos').innerHTML = value;
}


// Parametros de fecha y cambio de precio
var fechado = new Date(); 
var mes = fechado.getMonth()+1; 
var dia = fechado.getDate(); 
var ano = fechado.getFullYear(); 
var ano2= ano + 1;
var dia2 = dia + 1;

var tomorrow = fechado.getDate()+1;
const mesCero = function suma() {
  if (mes < 10 )
      mes = '0' + mes  ;
}
  

        //    Fijamos fechas 
window.onload = function (){
    //  if (mes < 10)
    //     mes = '0' + mes;
    //  if(dia<10)
    //     dia='0'+dia;  
                             
                        document.getElementById('fecha').min=ano+"-"+mes+"-"+dia;
                        document.getElementById('fecha').max=ano2+"-01-31";
                  return mes;
                  return dia;
                      }
                      
                      var mes0 =  mes;
let mesesA = mes;
var servExp = document.getElementById("fecha");
servExp.addEventListener("change", validaExp, false);
function fechaDias() {
 
    if(dia<10)
       dia='0'+dia; 
  
};
dias = fechaDias();
function fechaMeses() {
  if (mes < 10)
  mes = '0' + mes;
  
}
meses = fechaMeses();

let fechaC = ano+"-"+mes+"-"+dia;
var manana = ano+"-"+mes+"-"+tomorrow;

        //   Validamos el dia si el servicio es hoy o mañana
function validaExp () {   

     if (servExp.value == fechaC) {
           document.getElementById('express').innerHTML = "<option >4hrs $430</option><option >5hrs $525</option><option >6hrs $615</option><option >7hrs $695</option><option >8hrs $785</option>";
          } 
     else if (servExp.value ==  manana )
           document.getElementById('express').innerHTML = "<option >4hrs $430</option><option >5hrs $525</option><option >6hrs $615</option><option >7hrs $695</option><option >8hrs $785</option>";
     
     else 
           document.getElementById("express").innerHTML = "<option >4hrs $390</option><option >5hrs $475</option><option >6hrs $540</option><option >7hrs $630</option><option >8hrs $720</option>";
 };




//  Cambio de hora
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

  
}