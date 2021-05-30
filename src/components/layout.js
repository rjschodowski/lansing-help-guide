import React from 'react'
import Header from './header'
import '../styles/global.css'

const Layout = (props) => {
    return (
        <div>
            <div>
                <Header pageTitle={props.pageTitle}/>
                <div className="mt-20 mb-10 ml-2 mr-2">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Layout