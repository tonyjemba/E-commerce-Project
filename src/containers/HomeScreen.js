import React from 'react';
import Cover from '../components/Cover';
import Catergory from './Category';
import BigCards from './Bigcards';
import HomeProductScroll from './HomeProductScroll';
import Title from '../components/Title';
import Brand from '../components/Brand';
import SocialMedImages from '../components/SocialMediaImages';
import HomeProduct from './HomeProduct';
import { Divider } from 'antd';
import '../css/Home.css';
import '../media/Home_media.css'

const HomeScreen = () => {
    return(
        
			<div >
				
			<Cover />
			<div className="categorySection">
				<Catergory />
			</div>
			
			<div ><HomeProduct /></div>
			<div className=" flex justify-center "><BigCards /></div>
			
			<Title title="Trending Now" className="f4 tc mt4 mb3" />
			<HomeProductScroll />
			<div className="divider">
				<Divider />
			</div>
			<Brand />
			<Title title="@ jemy follow us on instagram .icons." className="f4 tc mt4 mb3" />
			<SocialMedImages />
			</div>
    )
}
export default HomeScreen;