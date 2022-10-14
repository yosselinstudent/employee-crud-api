/**
 * archivo: src/app.js
 * descripcion: archivo responsable de hacer la conexion con el archivo server.js
 * data:12/10/2022
 */


const express=require('express');
const cors =require('cors');
const app=express();

//==>Rutas de API (Employee)
const index=require('./routes/index');
const employeeRoute=require('./routes/employee.routes');

app.use(express.urlencoded({ extend: true }));
app.use(express.json());
app.use(express.json({ type: 'aplication/vnd.api+json' }));
app.use(cors());

app.use(index);
app.use('/api/', employeeRoute);

module.exports=app;