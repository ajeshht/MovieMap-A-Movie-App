import React from 'react'
import './MovieList.css'
import Popular from '../../Assets/popular.png'
import MovieCard from '../MovieCard/MovieCard'

const MovieList = () => {
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
                <MovieCard/>
            </div>
        </section>
    )
}

export default MovieList