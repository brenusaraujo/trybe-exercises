db.movies.find({
  ratings: {
    $elemMatch: {
      $gt: 64,
      $lte: 105,
      $mod: [9,0]
    }
  }
}, {
  title: 1,
  ranking: 1
});