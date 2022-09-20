SELECT (box.domestic_sales + box.international_sales) AS 'total_sales', movies.title
FROM Pixar.BoxOffice as box
INNER JOIN Pixar.Movies as movies
ON box.movie_id = movies.id
WHERE box.international_sales > box.domestic_sales;