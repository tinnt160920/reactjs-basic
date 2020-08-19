import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { BrowserRouter as Router, useParams, useHistory, Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import firebase from '../../../../firebase'

const AddProduct = ({ onAdd, categories }) => {
    const { register, handleSubmit, errors } = useForm();
    let history = useHistory();
    const [Gallery, setGallery] = useState([]);
    // console.log(categories);
    const onHandleSubmit = (data) => {
        console.log(data)
        let file = data.image[0];
        // // tạo reference chứa ảnh trên firesbase
        let storageRef = firebase.storage().ref(`images/${file.name}`);
        console.log(storageRef);
        // // đẩy ảnh lên đường dẫn trên
        storageRef.put(file).then(function () {
            storageRef.getDownloadURL().then((url) => {
                console.log(url);
                // Tạo object mới chứa toàn bộ thông tin từ input
                const newData = {
                    id: Math.random().toString(36).substr(2, 9),
                    ...data,
                    // desc,
                    image: url
                }
                console.log(newData);
                // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
                onAdd(newData)
                history.push("/admin/products");
            })
        });
    }
    return (
        <div>
            <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">Thêm sản phẩm</h6>
                </div>
                <div className="card-body">
                    <form className="" onSubmit={handleSubmit(onHandleSubmit)} method="POST">
                        <div className="form-group">
                            <label>Danh mục</label>
                            <select className="form-control" name="cate_id" ref={register}>
                                {categories.map(cate => (
                                    <option value={cate.id}>{cate.name}</option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="productName">Tên sản phẩm</label>
                            <input type="text" name="name" className="form-control" id="productName" ref={register({ required: true, minLength: 5 })} />
                            {errors.name && errors.name.type === "required" && <p className="text-danger mt-2">Bạn phải nhập tên sản phẩm</p>}
                            {errors.name && errors.name.type === "minLength" && <p className="text-danger mt-2">Bạn phải nhập ít nhất 5 ký tự</p>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="productPrice">Ảnh sản phẩm</label>
                            <div className="input-group">
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input" id="inputGroupFile02" name="image" ref={register({ required: true })} />
                                    <label className="custom-file-label" htmlFor="">Choose image</label>
                                </div>
                            </div>
                            {errors.image && errors.image.type === "required" && <p className="text-danger mt-2">Bạn phải nhập ảnh sản phẩm</p>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="productPrice">Giá sản phẩm</label>
                            <input type="text" name="price" className="form-control" id="productPrice" ref={register({ required: true, min: 0 })} />
                            {errors.price && errors.price.type === "required" && <p className="text-danger mt-2">Bạn phải nhập giá sản phẩm</p>}
                            {errors.price && errors.price.type === "min" && <p className="text-danger mt-2">Giá sản phẩm phải lớn hơn 0</p>}
                        </div>

                        <Link to="/admin/products">
                            <button type="button" class="btn btn-danger">Hủy</button>
                        </Link>
                        <button type="submit" className="btn btn-primary ml-1">Thêm</button>
                    </form>
                </div>
            </div>
        </div >
    )
}

AddProduct.propTypes = {
    onAdd: PropTypes.func
}

export default AddProduct