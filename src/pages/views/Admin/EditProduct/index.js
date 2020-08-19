import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { BrowserRouter as Router, useParams, useHistory, Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const EditProduct = ({ products, categories, onUpdate }) => {
    const { register, handleSubmit, errors } = useForm();
    let { id } = useParams();
    let history = useHistory();

    const product = products.find(product => product.id === id);

    const [currentProduct, setCurrentProduct] = useState(product);

    const onHandleSubmit = (e) => {
        e.preventDefault();
        onUpdate(currentProduct);
        history.push('/admin/products');
    }
    const onHandleChange = e => {
        const { name, value } = e.target;
        setCurrentProduct({
            ...currentProduct,
            [name]: value
        })
    }
    return (
        <div>
            <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">Cập nhật sản phẩm</h6>
                </div>
                <div className="card-body">
                    <form action="" onSubmit={onHandleSubmit} className="">
                        <div className="form-group">
                            <label>Danh mục</label>
                            <select className="form-control" name="cate_id" ref={register}>
                                {categories.map(cate => (
                                    <option value={cate.id} selected={cate.id == currentProduct.cate_id} onChange={onHandleChange}>{cate.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Tên sản phẩm</label>
                            <input type="text" name="name" value={currentProduct.name} onChange={onHandleChange} className="form-control" ref={register({ required: true, minLength: 5 })} />
                            {errors.name && errors.name.type === "required" && <p className="text-danger mt-2">Bạn phải nhập tên danh mục</p>}
                            {errors.name && errors.name.type === "minLength" && <p className="text-danger mt-2">Bạn phải nhập ít nhất 5 ký tự</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="productPrice">Ảnh sản phẩm</label>
                            <div className="input-group">
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input" name="image" ref={register({ required: true })} />
                                    <label className="custom-file-label" htmlFor="">Choose image</label>
                                </div>
                            </div>
                            {errors.image && errors.image.type === "required" && <p className="text-danger mt-2">Bạn phải nhập ảnh sản phẩm</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Giá sản phẩm</label>
                            <input type="text" name="price" value={currentProduct.price} onChange={onHandleChange} className="form-control" ref={register({ required: true, min: 0 })} />
                            {errors.price && errors.price.type === "required" && <p className="text-danger mt-2">Bạn phải nhập giá danh mục</p>}
                            {errors.price && errors.price.type === "min" && <p className="text-danger mt-2">Giá sản phẩm phải lớn hơn 0</p>}
                        </div>
                        <Link to="/admin/products">
                            <button type="button" class="btn btn-danger">Hủy</button>
                        </Link>
                        <button className="btn btn-primary ml-1">Cập nhật</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

EditProduct.propTypes = {
    products: PropTypes.array
}

export default EditProduct