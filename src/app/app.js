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
var tomorrow = fechado.getDate()+(1);
function tomorrowmañana (){
  if (tomorrow<10)
          tomorrow = '0' + tomorrow;
}
  magnana = tomorrowmañana();
  


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


servExp.addEventListener("change", diacita, false);


function diacita () {
  if (servExp.value == fechaC ){
    document.getElementById('express').innerHTML = "<option >4hrs $430</option><option >5hrs $525</option><option >6hrs $615</option><option >7hrs $695</option><option >8hrs $785</option>";
    
          if (hora >= 15)  {
            document.getElementById('hora').innerHTML="<option>Hoy ya no hay citas disponibles</option>";
          }
          else  if (hora >= 14)  {
            document.getElementById('hora').innerHTML="<option>Horario</option><option >5:00 pm</option>";
          }
          else  if (hora >= 13)  {
            document.getElementById('hora').innerHTML =  "<option>Horario</option><option >4:00 pm</option><option>5:00 pm</option>";
          }
          else  if (hora >= 12)  {
            document.getElementById('hora').innerHTML =  "<option>Horario</option><option >3:00 pm</option><option >4:00 pm</option><option>5:00 pm</option>";
          }
          else  if (hora >= 11)  {
            document.getElementById('hora').innerHTML =  "<option>Horario</option><option >2:00 pm</option><option >3:00 pm</option><option >4:00 pm</option><option>5:00 pm</option>";
          }
          else  if (hora >= 10)  {
            document.getElementById('hora').innerHTML =  "<option>Horario</option><option >1:00 pm</option><option >2:00 pm</option><option >3:00 pm</option><option >4:00 pm</option><option>5:00 pm</option>";
          }
          else  if (hora >= 9)  {
            document.getElementById('hora').innerHTML =  "<option>Horario</option><option >12:00 pm</option><option >1:00 pm</option><option >2:00 pm</option><option >3:00 pm</option><option >4:00 pm</option><option>5:00 pm</option>";
          }
          else  if (hora >= 8)  {
            document.getElementById('hora').innerHTML =  "<option>Horario</option><option >11:00 am</option><option >12:00 pm</option><option >1:00 pm</option><option >2:00 pm</option><option >3:00 pm</option><option >4:00 pm</option><option>5:00 pm</option>";
          }
          else  if (hora >= 7)  {
            document.getElementById('hora').innerHTML =  "<option>Horario</option><option >10:00 am</option><option >11:00 am</option><option >12:00 pm</option><option >1:00 pm</option><option >2:00 pm</option><option >3:00 pm</option><option >4:00 pm</option><option>5:00 pm</option>";
          }
          else  if (hora >= 0)  {
            document.getElementById('hora').innerHTML =  "<option>Horario</option><option >9:00 am</option><option >10:00 am</option><option >11:00 am</option><option >12:00 pm</option><option >1:00 pm</option><option >2:00 pm</option><option >3:00 pm</option><option >4:00 pm</option><option>5:00 pm</option>";
          }
          
          
  }
  else if ( servExp.value == manana) {
    document.getElementById('express').innerHTML = "<option >4hrs $430</option><option >5hrs $525</option><option >6hrs $615</option><option >7hrs $695</option><option >8hrs $785</option>";
    document.getElementById('hora').innerHTML =  "<option>Horario</option><option >9:00 am</option><option >10:00 am</option><option >11:00 am</option><option >12:00 pm</option><option >1:00 pm</option><option >2:00 pm</option><option >3:00 pm</option><option >4:00 pm</option><option>5:00 pm</option>";
  }
  else  if (servExp.value > manana){
    document.getElementById('express').innerHTML = "<option >4hrs $390</option><option >5hrs $475</option><option >6hrs $540</option><option >7hrs $630</option><option >8hrs $720</option>"; 
    document.getElementById('hora').innerHTML =  "<option>Horario</option><option >9:00 am</option><option >10:00 am</option><option >11:00 am</option><option >12:00 pm</option><option >1:00 pm</option><option >2:00 pm</option><option >3:00 pm</option><option >4:00 pm</option><option>5:00 pm</option>";
  }

 

 
}

horario.addEventListener("change", horamanana, false);

function horamanana () {
  if (servExp.value == manana && hora >= 16 ){
    if (horario.value == "5:00 pm") {
      document.getElementById('express').innerHTML = "<option >4hrs $390</option><option >5hrs $475</option><option >6hrs $540</option><option >7hrs $630</option><option >8hrs $720</option>";      
    }
    else if (horario.value != "5:00 pm") {
      document.getElementById('express').innerHTML = "<option >4hrs $430</option><option >5hrs $525</option><option >6hrs $615</option><option >7hrs $695</option><option >8hrs $785</option>";

    }
    }

    else if (servExp.value == manana && hora >= 15 ){
      if (horario.value == "5:00 pm" || horario.value == "4:00 pm") {
        document.getElementById('express').innerHTML = "<option >4hrs $390</option><option >5hrs $475</option><option >6hrs $540</option><option >7hrs $630</option><option >8hrs $720</option>";      
      }
      else if (horario.value != "5:00 pm" || horario.value != "4:00 pm") {
        document.getElementById('express').innerHTML = "<option >4hrs $430</option><option >5hrs $525</option><option >6hrs $615</option><option >7hrs $695</option><option >8hrs $785</option>";
  
      }
      }

      else if (servExp.value == manana && hora >= 14 ){
        if (horario.value == "5:00 pm" || horario.value == "4:00 pm" || horario.value == "3:00 pm") {
          document.getElementById('express').innerHTML = "<option >4hrs $390</option><option >5hrs $475</option><option >6hrs $540</option><option >7hrs $630</option><option >8hrs $720</option>";      
        }
        else if (horario.value != "5:00 pm" || horario.value != "4:00 pm" || horario.value != "3:00 pm") {
          document.getElementById('express').innerHTML = "<option >4hrs $430</option><option >5hrs $525</option><option >6hrs $615</option><option >7hrs $695</option><option >8hrs $785</option>";
    
        }
        }

        else if (servExp.value == manana && hora >= 13 ){
          if (horario.value == "5:00 pm" || horario.value == "4:00 pm" || horario.value == "3:00 pm" || horario.value == "2:00 pm") {
            document.getElementById('express').innerHTML = "<option >4hrs $390</option><option >5hrs $475</option><option >6hrs $540</option><option >7hrs $630</option><option >8hrs $720</option>";      
          }
          else if (horario.value != "5:00 pm" || horario.value != "4:00 pm" || horario.value != "3:00 pm" || horario.value != "2:00 pm") {
            document.getElementById('express').innerHTML = "<option >4hrs $430</option><option >5hrs $525</option><option >6hrs $615</option><option >7hrs $695</option><option >8hrs $785</option>";
      
          }
          }


          else if (servExp.value == manana && hora >= 12 ){
            if (horario.value == "5:00 pm" || horario.value == "4:00 pm" || horario.value == "3:00 pm" || horario.value == "2:00 pm" || horario.value == "1:00 pm") {
              document.getElementById('express').innerHTML = "<option >4hrs $390</option><option >5hrs $475</option><option >6hrs $540</option><option >7hrs $630</option><option >8hrs $720</option>";      
            }
            else if (horario.value != "5:00 pm" || horario.value != "4:00 pm" || horario.value != "3:00 pm" || horario.value != "2:00 pm" || horario.value != "1:00 pm") {
              document.getElementById('express').innerHTML = "<option >4hrs $430</option><option >5hrs $525</option><option >6hrs $615</option><option >7hrs $695</option><option >8hrs $785</option>";
        
            }
            }          

            else if (servExp.value == manana && hora >= 11 ){
              if (horario.value == "5:00 pm" || horario.value == "4:00 pm" || horario.value == "3:00 pm" || horario.value == "2:00 pm" || horario.value == "1:00 pm" || horario.value == "12:00 pm") {
                document.getElementById('express').innerHTML = "<option >4hrs $390</option><option >5hrs $475</option><option >6hrs $540</option><option >7hrs $630</option><option >8hrs $720</option>";      
              }
              else if (horario.value != "5:00 pm" || horario.value != "4:00 pm" || horario.value != "3:00 pm" || horario.value != "2:00 pm" || horario.value != "1:00 pm" || horario.value != "12:00 pm") {
                document.getElementById('express').innerHTML = "<option >4hrs $430</option><option >5hrs $525</option><option >6hrs $615</option><option >7hrs $695</option><option >8hrs $785</option>";
          
              }
              }   

              else if (servExp.value == manana && hora >= 10){
                if (horario.value == "5:00 pm" || horario.value == "4:00 pm" || horario.value == "3:00 pm" || horario.value == "2:00 pm" || horario.value == "1:00 pm" || horario.value == "12:00 pm" || horario.value == "11:00 am") {
                  document.getElementById('express').innerHTML = "<option >4hrs $390</option><option >5hrs $475</option><option >6hrs $540</option><option >7hrs $630</option><option >8hrs $720</option>";      
                }
                else if (horario.value != "5:00 pm" || horario.value != "4:00 pm" || horario.value != "3:00 pm" || horario.value != "2:00 pm" || horario.value != "1:00 pm" || horario.value != "12:00 pm" || horario.value != "11:00 am") {
                  document.getElementById('express').innerHTML = "<option >4hrs $430</option><option >5hrs $525</option><option >6hrs $615</option><option >7hrs $695</option><option >8hrs $785</option>";
            
                }
                }   

                else if (servExp.value == manana && hora >= 9){
                  if (horario.value == "5:00 pm" || horario.value == "4:00 pm" || horario.value == "3:00 pm" || horario.value == "2:00 pm" || horario.value == "1:00 pm" || horario.value == "12:00 pm" || horario.value == "11:00 am" || horario.value == "10:00 am") {
                    document.getElementById('express').innerHTML = "<option >4hrs $390</option><option >5hrs $475</option><option >6hrs $540</option><option >7hrs $630</option><option >8hrs $720</option>";      
                  }
                  else if (horario.value != "5:00 pm" || horario.value != "4:00 pm" || horario.value != "3:00 pm" || horario.value != "2:00 pm" || horario.value != "1:00 pm" || horario.value != "12:00 pm" || horario.value != "11:00 am" || horario.value != "10:00 am") {
                    document.getElementById('express').innerHTML = "<option >4hrs $430</option><option >5hrs $525</option><option >6hrs $615</option><option >7hrs $695</option><option >8hrs $785</option>";
              
                  }
                  }   

                  else if (servExp.value == manana && hora >= 8){
                    if (horario.value == "5:00 pm" || horario.value == "4:00 pm" || horario.value == "3:00 pm" || horario.value == "2:00 pm" || horario.value == "1:00 pm" || horario.value == "12:00 pm" || horario.value == "11:00 am" || horario.value == "10:00 am" || horario.value == "9:00 am") {
                      document.getElementById('express').innerHTML = "<option >4hrs $390</option><option >5hrs $475</option><option >6hrs $540</option><option >7hrs $630</option><option >8hrs $720</option>";      
                    }
                    else if (horario.value != "5:00 pm" || horario.value != "4:00 pm" || horario.value != "3:00 pm" || horario.value != "2:00 pm" || horario.value != "1:00 pm" || horario.value != "12:00 pm" || horario.value != "11:00 am" || horario.value != "10:00 am" || horario.value != "9:00 am") {
                      document.getElementById('express').innerHTML = "<option >4hrs $430</option><option >5hrs $525</option><option >6hrs $615</option><option >7hrs $695</option><option >8hrs $785</option>";
                
                    }
                    }   

                    else if (servExp.value == manana && hora >= 7){
                      if (horario.value == "5:00 pm" || horario.value == "4:00 pm" || horario.value == "3:00 pm" || horario.value == "2:00 pm" || horario.value == "1:00 pm" || horario.value == "12:00 pm" || horario.value == "11:00 am" || horario.value == "10:00 am" || horario.value == "9:00 am"  || horario.value == "8:00 am") {
                        document.getElementById('express').innerHTML = "<option >4hrs $390</option><option >5hrs $475</option><option >6hrs $540</option><option >7hrs $630</option><option >8hrs $720</option>";      
                      }
                      else if (horario.value != "5:00 pm" || horario.value != "4:00 pm" || horario.value != "3:00 pm" || horario.value != "2:00 pm" || horario.value != "1:00 pm" || horario.value != "12:00 pm" || horario.value != "11:00 am" || horario.value != "10:00 am" || horario.value != "9:00 am"  || horario.value != "8:00 am") {
                        document.getElementById('express').innerHTML = "<option >4hrs $430</option><option >5hrs $525</option><option >6hrs $615</option><option >7hrs $695</option><option >8hrs $785</option>";
                  
                      }
                      }   
    
        
    
    

    
  }



