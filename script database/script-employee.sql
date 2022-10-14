CREATE TABLE employee (
employee_Id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(), 
name VARCHAR(255) NOT NULL,
job_role VARCHAR(255) NOT NULL,
salary NUMERIC(7,2) NOT NULL,
date_of_birth DATE NOT NULL,
employee_resgistration INTEGER NOT NULL 
)