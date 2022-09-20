SELECT staff.first_name, staff.last_name, AVG(payment.amount)
FROM sakila.staff AS staff
INNER JOIN sakila.payment AS payment
ON staff.staff_id = payment.staff_id
GROUP BY staff.staff_id;

