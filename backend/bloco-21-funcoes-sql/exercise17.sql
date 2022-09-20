SELECT last_name, DATE_FORMAT(hire_date, '%Y-%m') AS year_and_month
FROM hr.employees;