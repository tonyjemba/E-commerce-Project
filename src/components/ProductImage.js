import React from 'react';
import styled from 'styled-components';
import {Icon} from 'antd';
import '../css/productimage.css'
import '../media/productimage_media.css'


const ProductImage = ({imgArray}) =>{
    return(
         <HoverWork className="imgsize relative overflow-hidden pointer ">
             <img src={imgArray} alt="Product Images"/>
             <div className=" absolute flex flex-row justify-between item-center w-100 het top-0">
                 <div className="pa1 tc wid">
                     <div className="bg-red white fD" >-20%</div>
                 </div>
                 <div className="w3 flex justify-center item-center pa1 pho_hide">
                     <div className="bg-white flex justify-center items-center circle z-1  animated faster fadeOutUp fadeInDown"><Icon type="eye" style={{color:'black',fontSize:'18px'}} /></div>
                 </div>
                 
             </div>
             <div className=" botm w-100 absolute flex flex-row justify-between item-center">
             <div className=" pa1 tc w4">
                     <div className="bg-red white f" >count down</div>
                 </div>
                 <div className=" miwid flex flex-row justify-between item-center pa1 pho_hide">
                     <div className="bg-white flex justify-center mr2 items-center circle z-1 relative animated faster fadeOutLeft  fadeInLeft">
                         <Icon type="left" style={{color:'black',fontSize:'15px'}} />
                         </div>
                         <div className="bg-white flex justify-center items-center circle z-1 relative animated faster fadeOutRight  fadeInRight">
                         <Icon type="right" style={{color:'black',fontSize:'15px'}} />
                         </div>
                 </div>
                 </div>
         </HoverWork>
    )
}

const HoverWork = styled.div`
.animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  .animated.faster {
    -webkit-animation-duration: 500ms;
    animation-duration: 500ms;
  }
 
@-webkit-keyframes fadeOutUp {
    from {
      opacity: 1;
    }
  
    to {
      opacity: 0;
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }
  }
  
  @keyframes fadeOutUp {
    from {
      opacity: 1;
    }
  
    to {
      opacity: 0;
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }
  }
  
  .fadeOutUp {
    -webkit-animation-name: fadeOutUp;
    animation-name: fadeOutUp;
  }

  
@keyframes fadeOutRight {
    from {
      opacity: 1;
    }
  
    to {
      opacity: 0;
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
    }
  }
  
  .fadeOutRight {
    -webkit-animation-name: fadeOutRight;
    animation-name: fadeOutRight;
  }

  
@-webkit-keyframes fadeOutLeft {
    from {
      opacity: 1;
    }
  
    to {
      opacity: 0;
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
  }
  
  @keyframes fadeOutLeft {
    from {
      opacity: 1;
    }
  
    to {
      opacity: 0;
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
  }
  
  .fadeOutLeft {
    -webkit-animation-name: fadeOutLeft;
    animation-name: fadeOutLeft;
  }

  :hover{
      
@keyframes fadeInDown {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }
  
    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  
  .fadeInDown {
    -webkit-animation-name: fadeInDown;
    animation-name: fadeInDown;
  }
  @-webkit-keyframes bounceInLeft {
    from,
    60%,
    75%,
    90%,
    to {
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
  
    0% {
      opacity: 0;
      -webkit-transform: translate3d(-3000px, 0, 0);
      transform: translate3d(-3000px, 0, 0);
    }
  
    60% {
      opacity: 1;
      -webkit-transform: translate3d(25px, 0, 0);
      transform: translate3d(25px, 0, 0);
    }
  
    75% {
      -webkit-transform: translate3d(-10px, 0, 0);
      transform: translate3d(-10px, 0, 0);
    }
  
    90% {
      -webkit-transform: translate3d(5px, 0, 0);
      transform: translate3d(5px, 0, 0);
    }
  
    to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  
@-webkit-keyframes fadeInLeft {
    from {
      opacity: 0;
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
  
    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  
  @keyframes fadeInLeft {
    from {
      opacity: 0;
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
  
    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  
  .fadeInLeft {
    -webkit-animation-name: fadeInLeft;
    animation-name: fadeInLeft;
  }
  @-webkit-keyframes fadeInRight {
    from {
      opacity: 0;
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
    }
  
    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  
  @keyframes fadeInRight {
    from {
      opacity: 0;
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
    }
  
    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  
  .fadeInRight {
    -webkit-animation-name: fadeInRight;
    animation-name: fadeInRight;
  }
  }
`;

export default ProductImage;