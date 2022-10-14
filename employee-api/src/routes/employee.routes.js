/**
 * archivo: routes/employed-routes.js
 * descripcion: archivo responsable de hacer las rutas de la API
 * data:12/10/2022
 */

const route = require('express-promise-router')();
const employeeController= require('../controllers/employee-controllers');

//==> Definiendo las rutas del crud - Employee

// ==> Rutas responsable de crear un nuevo Colaborador(a): (POST): localhost:3000/api/employee
route.post('/employees', employeeController.createEmployee);

// ==> Ruta responsable de listar todos los Colaboradores: (GET): localhost:3000/api/employee
route.get('/employees', employeeController.listAllEmployee);

module.exports=route;