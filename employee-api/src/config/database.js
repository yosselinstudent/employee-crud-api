/**
 * archivo: config/database.js
 * descripcion: archivo responsable de hacer la conexionString (Cosmos y postgres)
 * data:12/10/2022
 */

const { Pool }= require('pg');

const dotenv = require('dotenv');

dotenv.config();

//==>Conexion a la base de datos
const pool=new Pool({
    connectionString: process.env.DATABASE_URL
});

pool.on('error',(err,client)=>{
    console.log('Ha ocurrido un error en la conexion con el servidor', err);
    process.exit(-1);
});

pool.on('connect', ()=>{
    console.log('Base de datos conectada con exito!');
});

module.exports={
    query: (text, params)=>pool.query(text,params),
}