import React from 'react'
import Header from './Header'
import '../styles/global.css'

const Layout = (props) => {
    return (
        <div>
            <div>
                <Header />
                {props.children}
            </div>
        </div>
    )
}

export default Layout