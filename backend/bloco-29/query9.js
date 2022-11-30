db.movies.find({
  budget: {
    $mod: [5,0]
  },
  category: {
  }
}).pretty();