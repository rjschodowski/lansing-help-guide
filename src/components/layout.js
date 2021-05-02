import React from 'react'
import Header from './Header'

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