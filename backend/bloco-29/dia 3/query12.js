db.movies.find(
  {
    description: {
      $regex: /^The/
    }
  }
).pretty();