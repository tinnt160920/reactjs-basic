import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Footer = props => {
    return (
        <div>
            <footer className="footer py-4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 text-lg-left">Copyright © Your Website 2020</div>
                        <div className="col-lg-4 my-3 my-lg-0">
                            <Link to="" className="btn btn-dark btn-social mx-2" href=""><i class="fab fa-twitter"></i></Link>
                            <Link to="" className="btn btn-dark btn-social mx-2" href=""><i className="fab fa-facebook-f" /></Link>
                            <Link to="" className="btn btn-dark btn-social mx-2" href=""><i className="fab fa-linkedin-in" /></Link>
                        </div>
                        <div className="col-lg-4 text-lg-right">
                            <Link to="" className="mr-3" href="">Privacy Policy</Link>
                            <Link to="" href="">Terms of Use</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

Footer.propTypes = {

}

export default Footer
