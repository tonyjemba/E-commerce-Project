import React from 'react';
import {Icon} from 'antd';

const Icons = ({iconType,contStyle}) => {

   let icon = iconType.map((value,index) => <div className='black mb1 '><Icon type={value} key={index}style={{marginRight:'5px'}} /></div>)
    return(
             <div className={contStyle}>{icon}</div>
    )
}

export default Icons;