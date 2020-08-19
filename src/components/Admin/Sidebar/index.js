import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Sidebar = props => {
    return (
        <div>
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                {/* Sidebar - Brand */}
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/admin">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink" />
                    </div>
                    <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                </Link>
                {/* Divider */}
                <hr className="sidebar-divider my-0" />
                {/* Nav Item - Dashboard */}
                <li className="nav-item">
                    <Link to="/admin" className="nav-link">
                        <i className="fas fa-fw fa-tachometer-alt" />
                        <span>Dashboard</span>
                    </Link>
                </li>
                {/* Divider */}
                <hr className="sidebar-divider" />
                <div className="sidebar-heading">
                    Danh mục
                </div>
                <li className="nav-item">
                    <Link to="/admin/categories" className="nav-link">
                        <i className="fas fa-fw fas fa-box-open" />
                        <span>Quản lý danh mục</span>
                    </Link>
                </li>
                {/* Divider */}
                <hr className="sidebar-divider" />
                <div className="sidebar-heading">
                    Sản phẩm
                </div>
                <li className="nav-item">
                    <Link to="/admin/products" className="nav-link">
                        <i className="fab fa-fw fab fa-battle-net" />
                        <span>Quản lý sản phẩm</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

Sidebar.propTypes = {

}

export default Sidebar
