import React from 'react'
import PropTypes from 'prop-types'
import { Link, Route, Switch, useParams } from 'react-router-dom';

const Home = ({ products }) => {
    return (
        <div>
            <section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Danh sách sản phẩm</h2>
                        <h3 className="section-subheading text-muted">Một số sản phẩm nổi bật của chúng tôi.</h3>
                    </div>
                    <div className="row">
                        {products.map(({ id, name, image, price }, index) => (
                            <div className="col-lg-4 col-sm-6 mb-4" key={index}>
                                <div className="portfolio-item">
                                    <Link to={`/product/detail/${id}`} className="portfolio-link">
                                        <img className="img-fluid" src={image} alt="" />
                                    </Link>
                                    <div className="portfolio-caption">
                                        <div className="portfolio-caption-heading">{name}</div>
                                        <div className="portfolio-caption-subheading text-muted">{price}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

Home.propTypes = {

}

export default Home
