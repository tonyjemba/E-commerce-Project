import React from 'react';
import HomeShow from '../components/HomeShow';
import '../css/homeproduct.css';
import '../media/homeproductmedia.css';

/*
styling and all data for products on the home screen is passed in here
*/
const HomeProduct = () => (
	<div className="flex justify-center items-center">
	 <div className="ingrid">
		<HomeShow
    
        itemStyle="items_Style"
		homePageItemsArray={['pants', 'troggie', 'sweater', 'coat', 'hat', 'suit', 'sun glasses', 'shoes','another']}
	/>
	  </div>
	  </div>
);

export default HomeProduct;
