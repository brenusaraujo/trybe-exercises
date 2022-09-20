SELECT first_name, last_name, DATEDIFF(now(), hire_date) AS 'how_long_working'
FROM hr.employees;

