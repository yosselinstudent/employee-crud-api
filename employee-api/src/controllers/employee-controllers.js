/**
 * archivo: controllers/employee-controllers.js
 * descripcion: archivo responsable de crear la logica del CRUD (API- employee)
 * data:12/10/2022
 */

const db=require('../config/database');

// ==> Metodo responsable de crear un nuevo employee
exports.createEmployee=async(req,res)=>{
    const { name, job_role, salary, date_of_birth, employee_resgistration } = req.body;
     await db.query(
        "INSERT INTO employee (name, job_role, salary, date_of_birth, employee_resgistration) VALUES ($1, $2, $3, $4, $5)",
        [name, job_role, salary, date_of_birth, employee_resgistration]
    );
    res.status(201).send({
        message: 'Employee agregado exitosamente!',
        body:{
            employee:{ name, job_role, salary, date_of_birth, employee_resgistration }
        },
    });
};

// ==> Metodo responsable de listar los Employees
exports.listAllEmployee=async(req,res)=>{
    const response=await db.query('SELECT * FROM employee ORDER BY name ASC');
    res.status(200).send(response.rows);
};

//Metodo responsable para listar un determinado employee por id
exports.findEmployeeById=async(req,res)=>{
    const employeeId=req.params.id;
    const response=await db.query('SELECT * FROM employee WHERE employee_id = $1', [employeeId]);
    res.status(200).send(response.rows);
};