db.movies.find({
  ratings: {
    $elemMatch: {
      $gt: 100,
      $lte: 105
    }
  }
}, {
  title: 1,
  ranking: 1
});