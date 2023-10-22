const findTheMovie = (movieTitle, movieYear, arrOfMovies) =>{
    const favMovie = arrOfMovies.find(movie => movieTitle == movie.title && movieYear == movie.year);
    return favMovie;
    }


const nameMov = 'Star Wars';

const time =   1977;
    
const movieArr =   [
      { 
        title: 'Star Wars', 
        director: 'George Lucas', 
        year: 1977 
      },
                   
      { 
        title: 'The  Dark Knight', 
        director: 'Christopher Nolan', 
        year: 2008 
      }
    ]

const findedMovie = findTheMovie(nameMov, time, movieArr)
console.log(findedMovie);