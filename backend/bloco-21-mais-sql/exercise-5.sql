SELECT theater.name, theater.location, movies.title, movies.id, movies.director, movies.year, movies.length_minutes, movies.theater_id
FROM Pixar.Theater as theater
RIGHT JOIN Pixar.Movies as movies
ON theater.id = movies.id
ORDER BY theater.name;