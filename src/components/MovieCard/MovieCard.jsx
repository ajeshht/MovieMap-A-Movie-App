import './MovieCard.css'
import TopRated from '../../Assets/top-rated.png'
const MovieCard = () => {
  return (
    <a href="" className='movie-card'>
        <img src="https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1500x1500/products/90301/98769/the-creator-original-movie-poster-one-sheet-final-style-buy-now-at-starstills__81077.1697644483.jpg?c=2" alt="movieposter" className='movie-poster'/>
        <div className="movie-details">
            <h3 className='movie-details-heading'>Movie Name</h3>
            <div className="align-center movie-data-rating">
                <p>10-12-2025</p>
                <p>8.0 <img src={TopRated} alt="rateicon" className='card-emoji' /></p>
            </div>
            <p className='movie-description'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis cum architecto laborum ex vitae possimus!
            </p>
        </div>
    </a>
  )
}

export default MovieCard
