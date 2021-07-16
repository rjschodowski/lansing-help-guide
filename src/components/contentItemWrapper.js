import React from 'react'

const ContentItemWrapper = (props) => {
    return (
        <div className={props.wrapperStyle}>{props.children}</div>
    )
}

export default ContentItemWrapper