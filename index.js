/*SERVIDOR ESTATICO CON EXPRESS*/

const express = require('express');
const app = express();
let port = 3000;
app.get("/", (req,res) =>
{
    //enviar solo un mensaje (texto plano)
    res.send('HOLA HOLA desde  un servidor de EXPRESS');

})


app.listen(port , () =>
{
    console.log(`Servidor ejecutandose en el puerto ${port}`)
});





/*


app.use(express.static('public'));



app.get("/", (req,res) =>
{
    enviar solo un mensaje (texto plano)
    res.send('HOLA HOLA desde  un servidor de EXPRESS');

    enviar un SOLO archivo
    res.sendFile(__dirname + '/public/index.html');
});





 */