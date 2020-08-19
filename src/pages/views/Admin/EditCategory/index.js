import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { BrowserRouter as Router, useParams, useHistory, Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const EditCategory = ({ categories, onUpdate }) => {
    const { register, handleSubmit, errors } = useForm();
    let history = useHistory();
    let { id } = useParams();

    const cate = categories.find(cate => cate.id === cate.id);

    const [currentCategory, setCurrentCategory] = useState(cate);

    const onHandleSubmit = (e) => {
        e.preventDefault();
        onUpdate(currentCategory);
        history.push('/admin/categories');
    }
    const onHandleChange = e => {
        const { name, value } = e.target;
        setCurrentCategory({
            ...currentCategory,
            [name]: value
        })
    }
    return (
        <div>
            <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">Cập nhật danh mục</h6>
                </div>
                <div className="card-body">
                    <form className="" onSubmit={onHandleSubmit}>
                        <div className="form-group">
                            <label htmlFor="cateName">Tên danh mục</label>
                            <input type="text" name="name" className="form-control" id="cateName" value={currentCategory.name} onChange={onHandleChange} ref={register({ required: true, minLength: 5 })} />
                            {errors.name && errors.name.type === "required" && <p className="text-danger mt-2">Bạn phải nhập tên danh mục</p>}
                            {errors.name && errors.name.type === "minLength" && <p className="text-danger mt-2">Bạn phải nhập ít nhất 5 ký tự</p>}
                        </div>
                        <Link to="/admin/categories">
                            <button type="button" class="btn btn-danger">Hủy</button>
                        </Link>
                        <button type="submit" className="btn btn-primary ml-1">Cập nhật</button>
                    </form>
                </div>
            </div>
        </div >
    )
}

EditCategory.propTypes = {
    Categories: PropTypes.array
}

export default EditCategory