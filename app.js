const express = require('express');
const app = express();
const port = 3000;
app.use(express.static("public"));

//comprobar la letra 
app.get('/dniCli', function (req, res) {
    let dni = req.query.dni;
    var numero
    var letr
    var letra
    var mensaje;
    //como en el index con el pattern compruebo la estructura solo tengo que validar que la letra sea correcta
    numero = dni.substr(0, dni.length - 1);
    letr = dni.substr(dni.length - 1, 1);
    numero = numero % 23;
    letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
    letra = letra.substring(numero, numero + 1);
    if (letra != letr.toUpperCase()) {
        mensaje = { msg: "La letra es incorrecta" };
    } else {
        mensaje = { msg: "Perfecto!!! DNI valido!!!" };
    }

    res.send(mensaje);
});


app.listen(port, () => console.log("Escuchando por el puerto " + port));
