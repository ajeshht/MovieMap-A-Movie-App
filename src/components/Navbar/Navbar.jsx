
import './Navbar.css'
import Popular from '../../Assets/popular.png'
import TopRated from '../../Assets/top-rated.png'
import Trending from '../../Assets/trending.png'

function Navbar() {
  return (
    
        <nav className='navbar' >

            <h1>CineScope</h1>

            <div className="navbar-links">
                <a href="">Popular <img src={Popular} alt="Popular emoji" className='navbar-emoji' /></a>
                <a href="">Top Rated <img src={TopRated} alt="TopRated emoji" className='navbar-emoji' /></a>
                <a href="">Trending <img src={Trending} alt="Trending emoji" className='navbar-emoji' /></a>
                
            </div>

        </nav>
  )
}

export default Navbar