// Cambio de precio por dia y cambio de horarios segun la hora actual

// Cambio de valor en range cuartos
function rangeSlide(value) {
    document.getElementById('cuartos').innerHTML = value;
};
// Cambio de valor en range baños
function rangeBath(value) {
    document.getElementById('banos').innerHTML = value;
};


// Parametros de fecha y cambio de precio
var fechado = new Date(); 
var mes = fechado.getMonth()+1; 
var dia = fechado.getDate(); 
var ano = fechado.getFullYear(); 
var ano2= ano + 1;
var dia2 = dia + 1;
var tomorrow = fechado.getDate()+(24 * 60 * 60 * 1000);
var mes0 =  mes;
let mesesA = mes;
var servExp = document.getElementById("fecha");
var horario = document.getElementById("hora");
var today = new Date();
var tomorrows = new Date(today.getTime() + (24 * 0 * 0 * 0));

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


var valorFecha = document.getElementById("fecha");
var hora = fechado.getHours();


window.onload = function (){
 document.getElementById('fecha').min=ano+"-"+mes+"-"+dia;
                       document.getElementById('fecha').max=ano2+"-01-31";
 document.getElementById('fecha').max=ano2+"-01-31";
}



 //   Validamos el dia si el servicio es hoy o mañana


servExp.addEventListener("change", validaExp, false);

function validaExp () {   
  // limitar hora y cambiar precio para hoy
   if (servExp.value == fechaC) {
         if (hora >= 15 ){
               document.getElementById('hora').innerHTML="<option>Hoy ya no hay citas disponibles</option>";
          } else if ( hora >= 14){
            document.getElementById('hora').innerHTML="<option>Horario</option><option>5:00 pm</option>";
          }  else if (hora >= 13){
            document.getElementById('hora').innerHTML =  "<option>Horario</option><option >4:00 pm</option><option>5:00 pm</option>";
         }  else if (hora >= 12 ){
            document.getElementById('hora').innerHTML =  "<option>Horario</option><option >3:00 pm</option><option >4:00 pm</option><option>5:00 pm</option>";
           }
           else if (hora >=11 ){
            document.getElementById('hora').innerHTML =  "<option>Horario</option><option >2:00 pm</option><option >3:00 pm</option><option >4:00 pm</option><option>5:00 pm</option>";
           }
           else if (hora >= 10 ){
            document.getElementById('hora').innerHTML =  "<option>Horario</option><option >1:00 pm</option><option >2:00 pm</option><option >3:00 pm</option><option >4:00 pm</option><option>5:00 pm</option>";
           }
           else if (hora >= 9 ){
            document.getElementById('hora').innerHTML =  "<option>Horario</option><option >12:00 pm</option><option >1:00 pm</option><option >2:00 pm</option><option >3:00 pm</option><option >4:00 pm</option><option>5:00 pm</option>";
           }
           else if (hora >= 8 ){
            document.getElementById('hora').innerHTML =  "<option>Horario</option><option >11:00 am</option><option >12:00 pm</option><option >1:00 pm</option><option >2:00 pm</option><option >3:00 pm</option><option >4:00 pm</option><option>5:00 pm</option>";
           }
           else if (hora >= 7 ){
            document.getElementById('hora').innerHTML =  "<option>Horario</option><option >10:00 am</option><option >11:00 am</option><option >12:00 pm</option><option >1:00 pm</option><option >2:00 pm</option><option >3:00 pm</option><option >4:00 pm</option><option>5:00 pm</option>";
           }
          
           else if  (hora >= 6 ){
            document.getElementById('hora').innerHTML =  "<option>Horario</option><option >9:00 am</option><option >10:00 am</option><option >11:00 am</option><option >12:00 pm</option><option >1:00 pm</option><option >2:00 pm</option><option >3:00 pm</option><option >4:00 pm</option><option>5:00 pm</option>";
           }
           document.getElementById('express').innerHTML = "<option >4hrs $430</option><option >5hrs $525</option><option >6hrs $615</option><option >7hrs $695</option><option >8hrs $785</option>";
       
      //  Precios y horarios para el dia de mañana cambiando precio segun la hora
          } else if ( servExp.value == tomorrows) { 

            document.getElementById('express').innerHTML = "<option >4hrs $430</option><option >5hrs $525</option><option >6hrs $615</option><option >7hrs $695</option><option >8hrs $785</option>";

            }
            else if (servExp.value > manana) {
              document.getElementById('express').innerHTML = "<option >4hrs $390</option><option >5hrs $475</option><option >6hrs $540</option><option >7hrs $630</option><option >8hrs $720</option>"; 

            }
          }
// Cambio de precio por dia y cambio de horarios segun la hora actual


//   Validamos el dia si el servicio es hoy o mañana// horario.addEventListener("change", validaHora, false);

        // function validaHora() {
        //       if ( servExp.value == manana) { 
        //           if (hora >= 16) {
        //               if (horario.value == "17"){
        //                   document.getElementById('express').innerHTML = "<option >4hrs $390</option><option >5hrs $475</option><option >6hrs $540</option><option >7hrs $630</option><option >8hrs $720</option>"; 
        //                   } else if (horario.value < "17") {
        //                     document.getElementById('express').innerHTML = "<option >4hrs $430</option><option >5hrs $525</option><option >6hrs $615</option><option >7hrs $695</option><option >8hrs $785</option>";
        //                   } 
        //             } 
        //       }        //  else if (hora >= 16) {
              //    if (horario.value == "5:00 pm"){
              //     document.getElementById('express').innerHTML = "<option >4hrs $390</option><option >5hrs $475</option><option >6hrs $540</option><option >7hrs $630</option><option >8hrs $720</option>"; 
              //    } 
              // }   // Precio y horarios cualquier otro dia
          // horario.addEventListener("change", validaHora, false);
