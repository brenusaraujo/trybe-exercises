db.movies.find({
  category: {

    $size: 2
  }
}).pretty();