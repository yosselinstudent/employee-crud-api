CREATE TABLE employee (
employee_Id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(), 
name VARCHAR(255) NOT NULL,
job_Role VARCHAR(255) NOT NULL,
salary NUMERIC(5,2),
date_of_Birth DATE NOT NULL,
employee_Resgistration INTEGER NOT NULL 
)