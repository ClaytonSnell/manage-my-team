INSERT INTO department (department_name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal"),
       ("HR");

INSERT INTO role (department_id, title, salary)
VALUES (1, "Sr. Sales Manager", 150000 ),
       (3, "Sr. Accountant", 120000 );

-- add roles

INSERT INTO employee (role_id, manager_id, first_name, last_name)
VALUES (1, NULL, "Clayton", "Snell"),
       (2, 1, "Travis", "Leany");

