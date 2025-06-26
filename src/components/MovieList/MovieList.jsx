import React, { useEffect, useState } from 'react'
import './MovieList.css'
import Popular from '../../Assets/popular.png'
import MovieCard from '../MovieCard/MovieCard'

const MovieList = () => {
    const [movies, setmovies] = useState([]);


    useEffect(() => {
       fetchMovies()
 }, []);


 const fetchMovies = async () => {
    const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=6c49363081dc61599b7f8b05a02f25a2"
        )
        const data = await response.json()
        setmovies(data.results)
 }


    return (
        <section className='movie-list'>
            <header className='align-center movie-list-header'>
                <h2 className='align-center movie-list-heading'>Popular <img src={Popular} alt="popular emoji" className='navbar-emoji' /></h2>

                <div className="align-center movie-list-fs">
                    <ul className="align-center movie-filter">
                        <li className="movie-filter-item active">8+ Star</li>
                        <li className="movie-filter-item">7+ Star</li>
                        <li className="movie-filter-item">6+ Star</li>
                    </ul>
                    <select name="" id="" className="movie-sorting">
                        <option value="">SortBy</option>
                        <option value="">Date</option>
                        <option value="">Rating</option>
                    </select>
                    <select name="" id="" className="movie-sorting">
                        <option value="">Ascending</option>
                        <option value="">Descending</option>

                    </select>
                </div>
            </header>
            <div className="movie-cards">
                {
                    movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)
                }
                
                
            </div>
        </section>
    )
}

export default MovieList