SELECT customer.first_name, customer.last_name, customer.email, customer.customer_id, address.district, address.address_id
FROM sakila.customer AS customer
INNER JOIN sakila.address AS address
ON address.district = 'California' AND (customer.first_name LIKE '%rene%' OR customer.last_name LIKE '%rene%')

