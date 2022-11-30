db.movies.find({
  category: {

    $all: ["adventure"]
  },
  ratings: {
    $elemMatch: {
      $gt: 103,
    }
  }
}).pretty();