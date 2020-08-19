import PropTypes from 'prop-types'
import React, { useState } from 'react'
const Dashboard = ({ products, categories }) => {
    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="h3 mb-2 text-gray-800">Dashboard</h1>
            </div>
            <div className="row">
                {/* Earnings (Monthly) Card Example */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Tổng số danh mục</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{categories.length}</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-box-open fa-2x text-gray-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Earnings (Monthly) Card Example */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Tổng số sản phẩm</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{products.length}</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fab fa-battle-net fa-2x text-gray-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Dashboard.propTypes = {

}

export default Dashboard
