const {Router} = require ('express');
const nodemailer = require('nodemailer');
const router = Router();
const router2 = Router();



router.post('/email', async(req,res) => {
    const {nombre, mail, telefono, ciudad, direccion, colonia, tipo, cuartos, banos, fecha, hora, mascotas, limpieza, Lavado, planchado, cocina, entrada, horas} = req.body;
    
    contentHTMML = `

    <h1> Doméstica Tu Aliada </h1>
    <h2> Nueva Cita Generada </h2>
    <h3>Esta es la información ingresada por el cliente</h3>
    <ul>
    <li>Nombre: ${nombre} </li>
    <li>Mail: ${mail} </li>
    <li>Teléfono : ${telefono} </li>
    <li>Ciudad: ${ciudad} </li>
    <li>Dirección: ${direccion} </li>
    <li>Colonia: ${colonia} </li>
    <li>Tipo: ${tipo} </li>
    <li>Habitaciones: ${cuartos} </li>
    <li>Baños: ${banos} </li>
    <li>Fecha: ${fecha} </li>
    <li>Hora: ${hora} </li>
    <li>Cuantas horas: ${horas}</li>
    <li>¿Cómo entrará?: ${entrada} </li>
    <li>Mascotas: ${mascotas} </li>
    <li>Limpieza: ${limpieza} </li>
    <li>Lavado: ${Lavado} </li>
    <li>Planchado: ${planchado} </li>
    <li>Cocina: ${cocina} </li>
    </ul>
    `
  
    

    const transporter = nodemailer.createTransport({
        host: 'mail.domesticatualiada.com',
        port: 465,
        secure: true,
        auth: {
            user: 'webmaster@domesticatualiada.com',
            pass: 'I[h?htHKThP&1'
        },
        tls: {
            rejectUnauthorized: false,

        },
    });

    const info = await transporter.sendMail ({
        from: "'Doméstica tu aliada' <webmaster@domesticatualiada.com>",
        to: 'spadilla2003@yahoo.com, domesticamx@gmail.com ', 
        // to: "rayas.duran@gmail.com",
  
        subject: 'Nueva Cita',
        html: contentHTMML,

    });
    console.log('mensaje enviado', info.messageId)
   
    const contentHTMMLGracias = `<!doctype html>
    <html lang="en">
    
    <head>
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
      <title>Doméstica tu Aliada</title>
    
      <!-- Template CSS -->
      <link rel="stylesheet" href="https://domesticatualiada.com/assets/css/style-starter.css">
        <link rel="stylesheet" href="https://domesticatualiada.com/assets/css/animate.min.css">
    
      <!-- web fonts -->
      <link href="//fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700;800;900&display=swap" rel="stylesheet">
        
         
        
    <script src="https://domesticatualiada.com/assets/js/wow.js"></script>
        <script src="https://domesticatualiada.com/assets/js/wow.min.js"></script>
                  <script>
                  new WOW().init();
                  </script>
    
        
        <link rel="stylesheet" href="https://domesticatualiada.com/assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://domesticatualiada.com/assets/css/style.css">
        
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
        
    </head>
        
        <body>
    
         
            
      <div class="new-block top-bottom">
        <div class="container">
          <div class="middle-section">
            <div class="section-width">
             <center> <h3> <font color="#0082a4">Gracias por elegir Doméstica, a partir de este momento estamos eligiendo a la mejor profesional de la limpieza para ti. </font></h3></center>
            </div>
            <div class="link-list-menu">
             <center>  <p class="mt-md-4 mt-3 mb-md-5 mb-4 wow animate__animated animate__pulse"><font color="#0082a4">
    Te recordamos que cuando una Doméstica te vaya a visitar, una persona mayor de 18 años este presente durante los primeros 10 minutos para que puedas explicarle cuáles son tus prioridades en el servicio que realizara Doméstica.
    </font></p></center>
                
                  <center>  <p class="mt-md-4 mt-3 mb-md-5 mb-4 wow animate__animated animate__pulse"><font color="#0082a4">
    <strong>Estos son los detalles de tu reserva:</strong>  <br>
    <strong>Fecha: </strong> ${fecha}.<br>
    <strong>Duración: </strong> ${horas}.<br>
    <strong>Domicilio:</strong>${direccion}
    
    </font></p></center>
                
                
               
                
                
                
            </div>
          </div>
        </div>
      </div>
    
             
            
            
            
            
            
      
        </body>
    </html>`
    
    res.send(contentHTMMLGracias);

});



module.exports = router;
