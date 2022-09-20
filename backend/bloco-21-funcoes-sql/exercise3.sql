SELECT job_id, ROUND(AVG(salary), 2) AS 'average'
FROM hr.employees
GROUP BY job_id
ORDER BY average;
