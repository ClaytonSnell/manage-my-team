SELECT roles.title.salary AS roles, employee, first_name.last_name
FROM employee
LEFT JOIN employee
ON employee.role_id = roles.id
ORDER BY roles.title.salary;
