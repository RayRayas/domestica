const {Router} = require('express');
const router = Router();



router.post('/email', (req,res) => {
    const {nombre, mail, telefono, ciudad, direccion, colonia, tipo, cuartos, banos, fecha, hora, mascotas, limpieza, Lavado, planchado, cocina} = req.body;
    
    contentHTMML = `
    
    <h1> informacion </h1>
    <p>nombre: ${nombre} </p>
    <p>mail: ${mail} </p>
    <p>telefono: ${telefono} </p>
    <p>ciudad: ${ciudad} </p>
    <p>Dirección: ${direccion, colonia} </p>
    <p>Tipo: ${tipo} </p>
    <p>Cuartos: ${cuartos} </p>
    <p>Baños: ${banos} </p>
    <p>Fecha: ${fecha} </p>
    <p>Hora: ${hora} </p>
    <p>Mascotas: ${mascotas} </p>
    <p>Limpieza: ${limpieza} </p>
    <p>Lavado: ${Lavado} </p>
    <p>Planchado: ${planchado} </p>
    <p>Cocina: ${cocina} </p>`
    res.send('received');
    console.log(contentHTMML);
});

module.exports = router; 

