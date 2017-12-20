import React from 'react'
import Background from '../images/logo.png'

const Footer = () => {
    return(
        <footer>
            <div className="flexbox-container">
               <div className="logo">
               <img src={ Background } alt="imgfoo"/>
               </div>    
            </div>
        </footer>    
    )
}

export default Footer