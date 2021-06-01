import React from 'react'
import Header from './header'
import Footer from './footer'
import '../styles/global.css'

const Layout = (props) => {
    return (
        <div>
            <div>
                <Header pageTitle={props.pageTitle}/>
                <div className="mt-20 mb-20 mx-4 md:mx-20 lg:mx-40 xl:mx-60">
                    {props.children}
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Layout