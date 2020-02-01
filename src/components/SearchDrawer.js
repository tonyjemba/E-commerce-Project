import React from 'react'
import { Drawer,Divider,Icon} from 'antd';

 const SearchDrawer = ({onClose,visible}) => {

  
    return (
      <div>
      
        <Drawer
         
          placement="top"
          closable={true}
          onClose={onClose}
          visible={visible}
        >
          <p>WHAT ARE YOUR LOOKING FOR?</p>
          <div className=" w-90 flex flex-row ">
               <input placeholder="Search Products..." type="text" spellcheck="false" className="  black fw4 f3-ns h3 w-100 bb-0 bl-0 br-0 bt-0 pt4 pb4" style={{outline:'none',textDecoration:'none'}}/>
               <div className="pointer mr-auto self-center">
                    <Icon type="search" style={{fontSize:'23px'}}/>
               </div>
               
          </div>
          <Divider className="ma0"/>
         
        </Drawer>
      </div>
    );
  
}

export default SearchDrawer;