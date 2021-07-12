const {Router} = require('express');
const nodemailer = require('nodemailer');
const router = Router();



router.post('/email', async(req,res) => {
    const {nombre, mail, telefono, ciudad, direccion, colonia, tipo, cuartos, banos, fecha, hora, mascotas, limpieza, Lavado, planchado, cocina, entrada, horas} = req.body;
    
    contentHTMML = `

    <h1> Domestica Tu Aliada </h1>
    <h2> Nueva Cita Generada </h2>
    <h3>Esta es la informacion ingresada por el cliente</h3>
    <ul>
    <li>nombre: ${nombre} </li>
    <li>mail: ${mail} </li>
    <li>telefono: ${telefono} </li>
    <li>ciudad: ${ciudad} </li>
    <li>Dirección: ${direccion, colonia} </li>
    <li>Tipo: ${tipo} </li>
    <li>Cuartos: ${cuartos} </li>
    <li>Baños: ${banos} </li>
    <li>Fecha: ${fecha} </li>
    <li>Hora: ${hora} </li>
    <li>Cuantas horas: ${horas}</li>
    <li>¿Como entrara?: ${entrada} </li>
    <li>Mascotas: ${mascotas} </li>
    <li>Limliieza: ${limpieza} </li>
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
            pass: 'I[h?htHKThP&'
        },
        tls: {
            rejectUnauthorized: false,

        },
    });

    const info = await transporter.sendMail ({
        from: "'Domestica tu aliada' <webmaster@domesticatualiada.com>",
        // to: 'spadilla2003@yahoo.com, domesticamx@gmail.com ', 
        to: 'rayas..duran@gmail.com',
        subject: 'Nueva Cita',
        html: contentHTMML,

    });
    console.log('mensaje enviado', info.messageId)

    res.redirect('/gracias.html');
    console.log(contentHTMML);

});


module.exports = router;