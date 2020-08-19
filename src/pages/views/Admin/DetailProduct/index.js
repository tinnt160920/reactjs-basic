import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom';

const DetailProduct = ({ products }) => {
    let { id } = useParams();
    const productInfo = products.find(product => product.id === id);

    return (
        <div>
            
        </div>
    )
}

DetailProduct.propTypes = {

}

export default DetailProduct
