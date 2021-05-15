import React from 'react'
import Header from './Header'
import '../styles/global.css'

const Layout = (props) => {
    return (
        <div>
            <div>
                <Header  pageTitle={props.pageTitle}/>
                <div className="my-8 ml-2 mr-4 md:ml-20 md:mr-24 lg:ml-36 lg:mr-40 xl:ml-72 xl:mr-80">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Layout