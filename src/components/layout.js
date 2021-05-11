import React from 'react'
import Header from './Header'
import '../styles/global.css'

const Layout = (props) => {
    return (
        <div>
            <div>
                <Header />
                <div className="my-8 ml-2 mr-4">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Layout