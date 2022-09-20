SELECT job_id, salary * COUNT(*) AS 'amount of money to pay salaries'
FROM hr.employees
GROUP BY job_id;


