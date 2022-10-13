/**
 * archivo: routes/index.js
 * descripcion: archivo rresponsable de la llamada de la API a la aplicacion
 * data:12/10/2022
 */


const express=require('express');

const router=express.Router();

router.get('/api',(req, res)=>{
    res.status(200).send({
        success:'true',
        message:'Sea bienvenido a la API Nodejs + Postgresql + Azure',
        version: '1.0.0'
    });
});

module.exports=router;