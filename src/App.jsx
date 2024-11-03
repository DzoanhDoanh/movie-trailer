import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Header from './components/Header'
import MovieList from './components/MovieList'
import { useEffect } from 'react'
import MovieSearch from './components/MovieSearch'
import { MovieProvider } from './Context/MovieProvider'

function App() {
  const [movies, setMovies] = useState([])
  const [moviesRate, setMoviesRate] = useState([])
  const [upComingMovies, setUpComingMovies] = useState([])
  const [movieSearch, setMovieSearch] = useState([])

  const handleSearch = async (searchValue) => {
    setMovieSearch([])
    try{
      const searchUrl = `https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=false&language=en-US&page=1`
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
        }
      };
      const searchMovie = await fetch(searchUrl, options)
      const data = await searchMovie.json()
      setMovieSearch(data.results)
    }
    catch(error){
      console.log(error)
    }
  }

  useEffect(()=> {
    const hotMovieUrl = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
    const topRatedMovieUrl = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
    const upComingMoviesUrl = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
    const fetchMovie = async() => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
        }
      };

      const [res1, res2, res3] = await Promise.all([
        fetch(hotMovieUrl, options),
        fetch(topRatedMovieUrl, options),
        fetch(upComingMoviesUrl, options),
      ])
      
      const dataHotMovies = await res1.json()
      const dataTopMovies = await res2.json()
      const dataUpComingMovies = await res3.json()

      setMovies(dataHotMovies.results)
      setMoviesRate(dataTopMovies.results)
      setUpComingMovies(dataUpComingMovies.results)

      // console.log(dataTopMovies.results)
    }
    fetchMovie()
  }, [])
  return (
    <MovieProvider>
      <div className='bg-black pb-10'>
        <Header onSearch={handleSearch} />
        <Banner/>
        {movieSearch.length > 0 ? (<MovieSearch title={'Search result'} data={movieSearch}/>)
        : (
          <>
            <MovieList title ={'Hot Movies'} data={movies}/>
            <MovieList title ={'Top Rated'} data={moviesRate}/>
            <MovieList title ={'Upcoming'} data={upComingMovies}/>
          </>
        )
      }
      </div>
    </MovieProvider>
  )
}

export default App
