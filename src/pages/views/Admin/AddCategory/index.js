import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { BrowserRouter as Router, useParams, useHistory, Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const AddCategory = ({ onAdd }) => {
    const { register, handleSubmit, errors } = useForm();
    let history = useHistory();

    const onHandleSubmit = (data) => {
        const newData = {
            id: Math.random().toString(36).substr(2, 9),
            ...data
        }
        console.log(newData);
        onAdd(newData);
        history.push("/admin/categories")
    }
    return (
        <div>
            <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">Danh sách danh mục</h6>
                </div>
                <div className="card-body">
                    <form className="" onSubmit={handleSubmit(onHandleSubmit)} method="POST">
                        <div className="form-group">
                            <label htmlFor="">Tên danh mục</label>
                            <input type="text" name="name" className="form-control" id="cateName" ref={register({ required: true, minLength: 5 })} />
                            {errors.name && errors.name.type === "required" && <p className="text-danger mt-2">Bạn phải nhập tên danh mục</p>}
                            {errors.name && errors.name.type === "minLength" && <p className="text-danger mt-2">Bạn phải nhập ít nhất 5 ký tự</p>}
                        </div>
                        <Link to="/admin/categories">
                            <button type="button" class="btn btn-danger">Hủy</button>
                        </Link>
                        <button type="submit" className="btn btn-primary ml-1">Thêm</button>
                    </form>
                </div>
            </div>
        </div >
    )
}

AddCategory.propTypes = {
    onAdd: PropTypes.func
}

export default AddCategory