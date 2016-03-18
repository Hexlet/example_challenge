-- BEGIN
SELECT employees.name
FROM employees JOIN employees AS manager ON (employees.manager_id = manager.id)
WHERE employees.salary > manager.salary;
-- END
