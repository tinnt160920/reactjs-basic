import React from 'react';
import Header from '../../components/Main/Header'
import Footer from '../../components/Main/Footer'
import Navbar from '../../components/Main/NavBar'
import '../../assets/css/main/styles.css'

export default ({ children }) => {

    console.log('render Main')

    return (
            <div className ="wrapper">
                <Header />
                <Navbar />
                    <div className="content">
                        {children}
                    </div>
                <Footer />
            </div>
    )
}
