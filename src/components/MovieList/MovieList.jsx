import React, { useEffect, useState } from 'react'
import './MovieList.css'
import Popular from '../../Assets/popular.png'
import MovieCard from '../MovieCard/MovieCard'

const MovieList = () => {
    const [movies, setmovies] = useState([]);
    const [minRating, setminRating] = useState(0);
    const [filterMovies, setfilterMovies] = useState([]);
    const [sort, setsort] = useState({
        by: "default",
        order: "asc"
    });


    useEffect(() => {
        fetchMovies()
    }, []);


    const fetchMovies = async () => {
        const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=6c49363081dc61599b7f8b05a02f25a2"
        )
        const data = await response.json()
        setmovies(data.results)
        setfilterMovies(data.results)
    }
    const filterHandle = rate => {
        if (rate == minRating) {
            setminRating(0)
            setfilterMovies(movies)
        } else {
            setminRating(rate)

            const filtered = movies.filter(movie => movie.vote_average >= rate)
            setfilterMovies(filtered)
        }

    }


    const handleSort = e => {
        const { name, value } = e.target;
        setsort(prev => ({ ...prev, [name]: value }))
    }

    return (
        <section className='movie-list'>
            <header className='align-center movie-list-header'>
                <h2 className='align-center movie-list-heading'>Popular <img src={Popular} alt="popular emoji" className='navbar-emoji' /></h2>

                <div className="align-center movie-list-fs">
                    <ul className="align-center movie-filter">
                        <li className={minRating == 8 ? 'movie-filter-item active' : 'movie-filter-item'} onClick={() => {
                            filterHandle(8)
                        }}>8+ Star</li>
                        <li className={minRating == 7 ? 'movie-filter-item active' : 'movie-filter-item'} onClick={() => {
                            filterHandle(7)
                        }}>7+ Star</li>
                        <li className={minRating == 6 ? 'movie-filter-item active' : 'movie-filter-item'} onClick={() => {
                            filterHandle(6)
                        }}>6+ Star</li>
                    </ul>
                    <select name="by" id="" onChange={handleSort} value={sort.by} className="movie-sorting">
                        <option value="default">SortBy</option>
                        <option value="release_date">Date</option>
                        <option value="vote_average">Rating</option>
                    </select>
                    <select name="order" id="" onChange={handleSort} value={sort.order} className="movie-sorting">
                        <option value="asc">Ascending</option>
                        <option value="dsc">Descending</option>

                    </select>
                </div>
            </header>
            <div className="movie-cards">
                {
                    filterMovies.map(movie => <MovieCard key={movie.id} movie={movie} />)
                }


            </div>
        </section>
    )
}

export default MovieList