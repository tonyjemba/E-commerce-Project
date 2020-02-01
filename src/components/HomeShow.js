import React from 'react';
import { Row, Col } from 'antd';
import ProductDescription from '../components/ProductDescription';
import ProductImage from '../components/ProductImage';


/*this shows the products that first show on the home screen accepts prop(array) homePageItemsArray
of the products to display  (HomeProduct provides the Array)
itemStyle is the styling fro each item div
*/

const HomeShow = ({homePageItemsArray,itemStyle}) => {

    let homeItems = homePageItemsArray.map((itemName,index) => (
    
            <Col className={itemStyle} key={index} span={8} >
        <ProductImage  />
        <ProductDescription itemName={itemName}/>
         </Col>
        
    ))
    return(
    <Row  gutter={[20, 40]} >{homeItems}</Row>
    )
}

export default HomeShow;