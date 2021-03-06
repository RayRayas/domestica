const express = require('express');

const app = express(); 
const path = require('path');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(require('./route/index'));
app.use(express.static(path.join(__dirname, 'app')));

app.listen(process.env.PORT || 5000, () => {
    // app.listen(3000, () => {
    console.log("server on port 3000");
}

);






