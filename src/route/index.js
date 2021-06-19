const {Router} = require('express');
const router = Router();

router.post('/email', (req,res) => {
    const {name, email, phone, message} = req.body;
    contentHTMML = `
    
    <h1> informacion </h1>
    <p>popo: ${name} </p>`
    res.send('received');
    console.log(contentHTMML);
});

module.exports = router; 

