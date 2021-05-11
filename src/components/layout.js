import React from 'react'
import Header from './Header'
import '../styles/global.css'

const Layout = (props) => {
    return (
        <div>
            <div>
                <Header />
                <div className="my-8">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Layout