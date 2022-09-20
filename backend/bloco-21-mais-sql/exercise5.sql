SELECT customer.first_name, customer.last_name, COUNT(address.address)
FROM sakila.customer AS customer
INNER JOIN sakila.address AS address
ON address.address_id = customer.address_id AND (customer.active IS TRUE)
GROUP BY customer.customer_id;

