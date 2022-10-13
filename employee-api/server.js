/**
 * archivo: server.js
 * descripcion: archivo responsable de toda la configuracion y execucion del Back-kend ('employee')
 * data:12/10/2022
 */


const app= require('./src/app');

const port =process.env.PORT || 3000;

app.listen(port,()=>{
    console.log('Aplicacion corriendo en el puerto...:', port);
})