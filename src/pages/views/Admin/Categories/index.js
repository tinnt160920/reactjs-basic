import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const CategoriesManager = ({ categories, onRemove }) => {
    const removeHandle = (id) => {
        Swal.fire({
            title: 'Bạn có chắc chắn muốn xóa danh mục này?',
            text: 'Xóa xong sẽ không thể khôi phục dữ liệu!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Có, xóa danh mục!',
            cancelButtonText: 'Không, quay lại'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'Xóa thành công!',
                    'Danh mục của bạn đâ bị xóa',
                    'success',
                    onRemove(id)
                )
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Xóa không thành công!',
                    'Danh mục của bạn an toàn :)',
                    'error'
                )
            }
        })
    }
    return (
        <div>
            <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex justify-content-between">
                    <h6 className="mt-2 font-weight-bold text-primary">Danh sách danh mục</h6>
                    <Link to="/admin/category/add" className="btn btn-primary">Thêm Danh Mục</Link>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered text-center">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col" width="50px">#</th>
                                    <th scope="col">Tên danh mục</th>
                                    <th scope="col" width="150px">Hoạt động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map(({ id, name }, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{name}</td>
                                        <td>
                                            <Link className="btn btn-success" to={`/admin/category/edit/${id}`}>Sửa</Link>
                                            <button className="btn btn-danger ml-1" onClick={() => removeHandle(id)}>Xóa</button>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

CategoriesManager.propTypes = {
    products: PropTypes.array,
    onRemove: PropTypes.func
}

export default CategoriesManager
