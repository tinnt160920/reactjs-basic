import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Header = props => {
    return (
        <div>
            <header className="masthead">
                <div className="container">
                    <div className="masthead-subheading">Welcome To Our Studio!</div>
                    <div className="masthead-heading text-uppercase">It's Nice To Meet You</div>
                    <Link to="/" className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="">Tell Me More</Link>
                </div>
            </header>
        </div>
    )
}

Header.propTypes = {

}

export default Header
