import React from 'react';
import styled from 'styled-components'

const BigCard = ({title,body}) => {
    return(
        <div style={{backgroundColor:'papayawhip'}} className="flex justify-center items-center">
              <div className=" flex flex-column w-70 ">
    <div className=" black-70 tc">{title}</div>
    <div className=" fw5 black f3 mt1 tc">{body}</div>
                 <div className=" flex tc justify-center ma1 ">
                     <Button className="ba pointer bg-animate b--black bg-black white pa1 pl2 pr2" >DISCOVER MORE!</Button>
                 </div>
              </div>
        </div>
    )
}

const Button = styled.div`
    :hover{
        background-color:white;
        color:black
    }
`;
export default BigCard;