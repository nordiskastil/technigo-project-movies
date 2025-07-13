# Movies

- Brief description of the assignment
Create a Movie site using React and APIs from a moviedb.org. 

- How you approached the task, what tools and techniques you used, and how you planned it
First I created an account on moviedb.org and copied the API key and used this to fetch information. 

I created a new file PopularList.jsx to display a list of popular movies. I added the API key and base URL for fetching popular movies and an image URL. 
const API_KEY = '4edc49af7db98a8713ed472b95849e61';
const BASE_URL = 'https://api.themoviedb.org/3/movie';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w780';

I used const fetchMovies to allow the user to switch between different movie categories: Upcoming, Popular and Top rated. 

I also created Detail.jsx for fetching movie details to the individual movie pages: Release Date, Rating, Overview and Genre. Here I also used FetchMovies

NotFound.jsx creates a component to display a 404 Not Found page and a simple link back to the home page

In App.jsx I created the routes and imported these tree files. 

For the layout I added a CSS grid and styling, to create the movie card that adjust to the screensize and style the details page. Here I added a yellow IMDb style button. I added a 1930's style font and a simple dropdown. 

- If you had more time, what would be next?
Maybe add more options or styling. 

- How to run the project locally

## View it live
https://nathalies-movie-library.netlify.app/

