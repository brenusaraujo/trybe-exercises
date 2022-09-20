SELECT job_id, salary * COUNT(*) AS 'amount of money to pay salaries'
FROM hr.employees
WHERE job_id = 'it_prog'
GROUP BY job_id;


