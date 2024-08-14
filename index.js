/*SERVIDOR ESTATICO CON EXPRESS*/

const express = require('express');
const app = express();
let port = 3000;

const usuariosRouter = require('./routes/usuarios')

app.use(express.json());

app.use('/usuarios', usuariosRouter);

app.get('/', (req,res)=>
{
    res.send('Hola desde el puerto LOCALHOST:3000')
});

app.listen(port , () =>
    {
        console.log(`Servidor ejecutandose en el puerto ${port}`)
    });
    

/*
app.get("/", (req,res) =>
{
    //enviar solo un mensaje (texto plano)
    res.send('HOLA HOLA desde  un servidor de EXPRESS');
});

app.get("/contacto", (req,res) =>
{
    res.sendFile(__dirname+'/public/contacto.html')
});
 */






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