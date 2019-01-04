# Movie Zone

## Brief

Display a list of now showing movies, using TMDb API, allowing the user to filter by genre and rating.

This React project was bootstrapped from [this starter](https://github.com/mtendotnet/react-starter) with [Create React App](https://github.com/facebookincubator/create-react-app) origins.

## Input

- [TMDb Movies Now Playing API](https://developers.themoviedb.org/3/movies/get-now-playing)
- [TMDb Movie genres API](https://developers.themoviedb.org/3/genres/get-movie-list)
- [TMDb Image API](https://developers.themoviedb.org/3/getting-started/images)
- Minimum rating input with a range between 0 and 10, increments of 0.5 and a default set to 3.
- Multiple genres input (checkboxes). Must only contain genres from the TMDb API that are in the returned movie result set.

## Tasks/Contraints

- [ ] Display a list of movies, each showing their title, genres and poster image.
- [ ] The movies should be ordered by popularity (most popular first - popularity property).
- [ ] Movies should be filterable by multiple genres, the user should have the ability to toggle movies depending on all of its assigned genres. For example if 'Action' and 'Drama' genres are selected listed movies must have both 'Action' and 'Drama' genres.
- [ ] Movies should also be filterable by their rating (vote_average property). i.e If rating was set to 5, you would expect to see all movies with a rating of 5 or higher.
- [ ] The input API's should only be called once.
