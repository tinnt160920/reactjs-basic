import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LayoutMain from '../pages/layouts/LayoutMain'
import LayoutAdmin from '../pages/layouts/LayoutAdmin'
//Admin
import Dashboard from '../pages/views/Admin/Dashboard'
import ProductsManager from '../pages/views/Admin/Products'
import AddProduct from '../pages/views/Admin/AddProduct';
import EditProduct from '../pages/views/Admin/EditProduct';
import CategoriesManager from '../pages/views/Admin/Categories'
import AddCategory from '../pages/views/Admin/AddCategory';
import EditCategory from '../pages/views/Admin/EditCategory';
//Views
import About from '../pages/views/Main/About'
import Home from '../pages/views/Main/Home'
import DetailProduct from '../pages/views/Admin/DetailProduct';


const Routers = ({ categories, products, onAddProduct, onUpdateProduct, onRemoveProduct, onAddCategory, onUpdateCategory, onRemoveCategory }) => {
    {/* Phần products */}
    const onHandleAddProduct = (product) => {
        onAddProduct(product);
    }

    const onHandleUpdateProduct = (id) => {
        onUpdateProduct(id);
    }

    const onHandleRemoveProduct = (id) => {
        onRemoveProduct(id)
    }

    {/* Phần categories */}
    const onHandleAddCategory = (cate) => {
        onAddCategory(cate);
    }

    const onHandleUpdateCategory = (id) => {
        onUpdateCategory(id);
    }

    const onHandleRemoveCategory = (id) => {
        onRemoveCategory(id)
    }
    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?">
                    <LayoutAdmin>
                        <Switch>
                            <Route path='/admin' exact>
                                <Dashboard products={products} categories={categories} />
                            </Route>

                            {/* Phần products */}
                            <Route path='/admin/products'>
                                <ProductsManager products={products} categories={categories} onRemove={onHandleRemoveProduct} />
                            </Route>
                            <Route path="/admin/product/add">
                                <AddProduct onAdd={onHandleAddProduct} categories={categories} />
                            </Route>
                            <Route path="/admin/product/edit/:id">
                                <EditProduct products={products} categories={categories} onUpdate={onHandleUpdateProduct} />
                            </Route>

                            {/* Phần categories */}
                            <Route path='/admin/categories'>
                                <CategoriesManager categories={categories} onRemove={onHandleRemoveCategory} />
                            </Route>
                            <Route path="/admin/category/add">
                                <AddCategory onAdd={onHandleAddCategory} />
                            </Route>
                            <Route path="/admin/category/edit/:id">
                                <EditCategory categories={categories} onUpdate={onHandleUpdateCategory} />
                            </Route>
                        </Switch>
                    </LayoutAdmin>
                </Route>
                <Route path="/">
                    <LayoutMain>
                        <Switch>
                            <Route path="/" exact>
                                <Home products={products}/>
                            </Route>
                            <Route path="/product/detail/:id">
                                <DetailProduct products={products} />
                            </Route>
                            <Route path="/about">
                                <About />
                            </Route>
                        </Switch>
                    </LayoutMain>
                </Route>
            </Switch>
        </Router>
    )
}

Routers.propTypes = {

}

export default Routers
