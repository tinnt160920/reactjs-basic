import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Navbar = props => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-secondary" id="mainNav">
                <div className="container">
                    <Link to="/" className="navbar-brand js-scroll-trigger" href="#page-top"><img src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg" alt="" /></Link>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
              <i className="fas fa-bars ml-1" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase ml-auto">
                            <li className="nav-item"><Link to="" className="nav-link js-scroll-trigger" href="">Services</Link></li>
                            <li className="nav-item"><Link to="" className="nav-link js-scroll-trigger" href="">Portfolio</Link></li>
                            <li className="nav-item"><Link to="/about" className="nav-link js-scroll-trigger" href="">About</Link></li>
                            <li className="nav-item"><Link to="" className="nav-link js-scroll-trigger" href="">Team</Link></li>
                            <li className="nav-item"><Link to="" className="nav-link js-scroll-trigger" href="">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

Navbar.propTypes = {

}

export default Navbar
