import React, { useState, useEffect } from 'react';
import Routers from './routers'
import apiProduct from './api/productApi';
import apiCategory from './api/categoryApi';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    //danh sách sản phẩm
    useEffect(() => {
        const getProducts = async () => {
            try {
                const { data } = await apiProduct.getAll();
                setProducts(data);
            } catch (error) {
                console.log('failed to request API: ', error)
            }
        }
        getProducts();
    }, []);

    //Xóa sản phẩm
    const onHandleRemoveProduct = (id) => {
        console.log(id);
        const result = apiProduct.remove(id);
        const newProduct = products.filter(pro => pro.id !== id);
        setProducts(newProduct);
    }

    //Thêm sản phẩm
    const onHandleAddProduct = async (newData) => {
        console.log(newData);
        try {
            const result = await apiProduct.create(newData);
            setProducts([
                ...products,
                newData
            ])
        } catch (error) {
            console.log('failed to request API: ', error)
        }
    }

    //Cập nhật sản phẩm
    const onHandleUpdateProduct = async (data) => {
        try {
            const { id } = data;
            console.log(data)
            const result = await apiProduct.update(id, data);
        } catch (error) {
            console.log('failed to request API: ', error)
        }
    }

    
    //Danh sách danh mục
    useEffect(() => {
        const getCategories = async () => {
            try {
                const { data } = await apiCategory.getAll();
                setCategories(data);
            } catch (error) {
                console.log('failed to request API: ', error)
            }
        }
        getCategories();
    },[]);

    //Xóa danh mục
    const onHandleRemoveCategory = (id) => {
        console.log(id);
        const result = apiCategory.remove(id);
        const newCate = categories.filter(cate => cate.id !== id);
        setCategories(newCate);
    }

    //Thêm danh mục
    const onHandleAddCategory = async (newData) => {
        try {
            const result = await apiCategory.create(newData);
            setCategories([
                ...categories,
                newData
            ])
        } catch (error) {
            console.log('failed to request API: ', error)
        }
    }

    //Sửa danh mục
    const onHandleUpdateCategory = async (data) => {
        try {
            const { id } = data;
            console.log(data)
            const result = await apiCategory.update(id, data);
        } catch (error) {
            console.log('failed to request API: ', error)
        }
    }


    return (
        <div className="App">
            <Routers products={products} onRemoveProduct={onHandleRemoveProduct} onAddProduct={onHandleAddProduct} onUpdateProduct={onHandleUpdateProduct}
                categories={categories} onRemoveCategory={onHandleRemoveCategory} onAddCategory={onHandleAddCategory} onUpdateCategory={onHandleUpdateCategory} />
        </div>
    )
}
export default App;