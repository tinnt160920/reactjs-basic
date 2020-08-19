import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ProductsManager = ({ products, categories, onRemove }) => {
    const removeHandle = (id) => {
        Swal.fire({
            title: 'Bạn có chắc chắn muốn xóa sản phẩm này?',
            text: 'Xóa xong sẽ không thể khôi phục dữ liệu!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Có, xóa sản phẩm!',
            cancelButtonText: 'Không, quay lại'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'Xóa thành công!',
                    'Sản phẩm của bạn đã bị xóa',
                    'success',
                    onRemove(id)
                )
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Xóa không thành công!',
                    'Sản phẩm của bạn an toàn :)',
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
                    <Link to="/admin/product/add" className="btn btn-primary">Thêm sản phẩm</Link>
                </div>
                <div className="card-body">
                    <table className="table table-bordered text-center">
                        <thead>
                            <tr>
                                <th scope="col" width="50px">#</th>
                                <th scope="col">Danh mục</th>
                                <th scope="col">Tên sản phẩm</th>
                                <th scope="col">Ảnh sản phẩm</th>
                                <th scope="col">Giá</th>
                                <th scope="col" width="150px">Hoại động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(({ id, name, cate_id, image, price }, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{categories.map(cate => cate.id == cate_id ? cate.name : console.log("Lỗi"))}</td>
                                    <td>{name}</td>
                                    <td><img src={image} alt="" width="50" /></td>
                                    <td>{price}</td>
                                    <td>
                                        <Link className="btn btn-success" to={`/admin/product/edit/${id}`}>Sửa</Link>
                                        <button className="btn btn-danger ml-1" onClick={() => removeHandle(id)} >Xóa</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

ProductsManager.propTypes = {
    products: PropTypes.array,
    onRemove: PropTypes.func
}

export default ProductsManager
