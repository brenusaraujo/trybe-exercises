db.movies.find(
  {
    description: {
      $regex: /humanity.$/
    }
  }
).pretty();