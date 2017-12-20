import React from 'react'
import {Link} from 'react-router-dom'
import Background from '../images/logo.png'



const Header = () => {
    return(
        <header>
            <div className="flexbox-containter" >
              <Link to="/" className="logo">
              <img src={ Background } alt="imghe" />
           
              </Link>
              <nav>
                  <Link to="/teams">Teams</Link>
              </nav>    
            </div>
        </header>    
    )
}

export default Header