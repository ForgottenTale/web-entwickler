import React from 'react'
import './css/navbar.scss'

function Navbar(){
    return(
        <div className="navbar">
            <div>Logo</div>
            <ul className = "navbar__links">
                 <a href="#" className="navbar__links__a">Home</a>
                 <a href="#" className="navbar__links__a">Do's</a>
                 <a href="#" className="navbar__links__a">Dont's</a>
                 <a href="#" className="navbar__links__a">Updates</a>
            </ul>
        </div>
    )
}

export default Navbar;