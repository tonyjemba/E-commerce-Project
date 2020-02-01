import React from 'react';
const Title = ({title,className}) => {
    return(
    <div className={className}>
        <div>{title}</div>
    </div>
    )
}

export default Title;