import React from 'react'
import Header from './header'
import '../styles/global.css'

const Layout = (props) => {
    return (
        <div>
            <div>
                <Header pageTitle={props.pageTitle}/>
                <div className="mt-20 mb-10 mx-4 md:mx-20 lg:mx-40 xl:mx-60">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Layout