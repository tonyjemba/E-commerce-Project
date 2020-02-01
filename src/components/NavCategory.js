import React from 'react';
import '../css/navcategory.css';
import {Divider} from 'antd';
import ListComponent from '../containers/ListComponent'

const NavCategory = ({show,hide}) => {
   if(show){
    return(
        <div>
            <div className="navcat animated fadeIn faster bg-white" onMouseLeave={hide}>
            <div >
            <div className=" flex flex-column ">
                <div className="f5 mt3 black mb2">MEN COLLECTION</div>
                  <ListComponent listData={['Coats','Blazers','Playsuits & Jumpsuits','Sweatshirts & Hoodies','Jackets','Trousers','Jeans','Knitwear','T-shirts','Bodysuits','Shirts','Skirts','Shorts']}/>
                </div>
            </div>
            <div >
            <div className=" flex flex-column ">
                <div className="f5 mt3 black mb2">WOMEN COLLECTION</div>
                  <ListComponent listData={['Coats','Blazers','Playsuits & Jumpsuits','Sweatshirts & Hoodies','Jackets','Trousers','Jeans','Knitwear','T-shirts','Bodysuits','Shirts','Skirts','Shorts']}/>
                </div>
            </div>
            <div >
            <div className=" flex flex-column ">
                <div className="f5 mt3 black mb2">ACCESSORIES</div>
                  <ListComponent listData={['Coats','Blazers','Playsuits & Jumpsuits','Sweatshirts & Hoodies','Jackets','Trousers','Jeans','Knitwear','T-shirts','Bodysuits','Shirts','Skirts','Shorts']}/>
                </div>
            </div>
            <div >
            <div className=" flex flex-column ">
                <div className="f5 mt3 black mb2">ELECTRONICS</div>
                  <ListComponent listData={['Coats','Blazers','Playsuits & Jumpsuits','Sweatshirts & Hoodies','Jackets','Trousers','Jeans','Knitwear','T-shirts','Bodysuits','Shirts','Skirts','Shorts']}/>
                </div>
            </div>
            <div > 
            <div className=" flex flex-column ">
                <div className="f5 mt3 black mb2">OTHERS</div>
                  <ListComponent listData={['Coats','Blazers','Playsuits & Jumpsuits','Sweatshirts & Hoodies','Jackets','Trousers','Jeans','Knitwear','T-shirts','Bodysuits','Shirts','Skirts','Shorts']}/>
                </div>
            </div>
            
        </div>
        <Divider className="ma0"/>
        </div>
    )
   }
   else{
       return null;
   }
}

export default NavCategory;