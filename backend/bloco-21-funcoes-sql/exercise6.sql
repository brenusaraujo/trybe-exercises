SELECT job_id, COUNT(*) AS 'quantity'
FROM hr.employees
WHERE job_id = 'it_prog'
GROUP BY job_id;


