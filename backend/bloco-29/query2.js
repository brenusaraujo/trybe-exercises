db.movies({
  category: {
    $all: ["action", "sci-fi"]
  },
  imdbRating: {
    $gt: 7
  }
});
