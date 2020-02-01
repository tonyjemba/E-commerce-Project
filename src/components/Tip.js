import React from 'react';
import {Tooltip} from 'antd';

const Tip = ({placement,title,children}) => {
    return(
            <Tooltip placement={placement} title={title} >
            {children}
        </Tooltip>
     
    )
}

export default Tip;
