import React,{Component} from 'react';
import Color from './Color';
import Size from './Size';
import { Icon, Rate } from 'antd';
import styled from 'styled-components'
import '../css/productdescription.css';
import '../media/productdescription_media.css';

class ProductDescription extends Component{
        
    state = {
        status:true,
        wishList:''
    }

       wishState = () =>{
           this.setState({status:!this.state.status})
           if(!this.state.status){
               this.setState({wishList:"outlined"})
           }
           else{
            this.setState({wishList:"filled"})
           }
       } 

    
    render(){
        return (
            //arrays from database
            <div className="containerSize flex flex-column overflow-hidden ">
                <div className=" ght pointer">brand</div>
        <div className=" ght pointer">{this.props.itemName}</div>
                <div className=" ght ghtphone flex flex-row">
                    <div className=" pointer">real price</div>
                    <div className=" pointer">discounted</div>
                </div>
                <div className=" ght flex flex-row ">
                    <Color colors={['black', 'yellow', 'red', 'orange']} />
                </div>
                <div className="ght flex item-center  phoneNO">
                    <Size sizes={['XXL', 'XL', 'L']} />
                </div>
                <div className=" h2 mgt flex flex-row ">
                    {/* add to cart btn using the size component  */}
    
                    <ButtonEffect className="pointer ba items-center justify-center flex flex-row pl1 pr1 w-60 bg-animate  ">
                        <div className="animated faster fadeOutLeftBig  fadeInLeft ">
                            <Icon type="shopping-cart" />
                        </div>
                        <div style={{ fontSize: '14px', verticalAlign: 'middle' }} className="tc phonfont">
                            ADD TO CART
                        </div>
                    </ButtonEffect>
    
                    <div className=" flex flex-row items-center justify-center ml3">
                        <div className=" flex item-center pointer" onClick={this.wishState}>
                            <Icon type="heart" style={{color:'black',fontSize:'18px',fontWeight:'1px'}} theme={this.state.wishList} />
                        </div>
                        <div className="ml3 phoneEye">
                           <Icon type="eye" style={{color:'black',fontSize:'20px',fontWeight:'1px'}}/>
                        </div>
                    </div>
                </div>
                <div className="ght flex flex-row ">
                    <Rate allowHalf defaultValue={2.5} style={{color:'black',fontSize:'small'}}/>
                </div>
            </div>
        );
    }
	
};

const ButtonEffect = styled.div`
    
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

@-webkit-keyframes fadeOutLeftBig {
    from {
      opacity: 1;
    }
  
    to {
      opacity: 0;
      -webkit-transform: translate3d(-2000px, 0, 0);
      transform: translate3d(-2000px, 0, 0);
    }
  }
  
  @keyframes fadeOutLeftBig {
    from {
      opacity: 1;
    }
  
    to {
      opacity: 0;
      -webkit-transform: translate3d(-2000px, 0, 0);
      transform: translate3d(-2000px, 0, 0);
    }
  }
  
  .fadeOutLeftBig {
    -webkit-animation-name: fadeOutLeftBig;
    animation-name: fadeOutLeftBig;
  }
    
    :hover{
        background-color:black;
        border-color:black;
        color: white;

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

    }
`;

export default ProductDescription;
