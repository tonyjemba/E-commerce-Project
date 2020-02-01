import React from 'react';
import ListComponent from '../containers/ListComponent';
import '../css/women.css';
import { Divider } from 'antd';
const Women = ({ show, hide }) => {
	if (show) {
		return (
			<div>
				<div className="ct animated fadeIn faster bg-white" onMouseLeave={hide}>
					<div className=" flex flex-column ">
						<div className="f5 mt3 black mb2">CLOTHING</div>
						<ListComponent
							listData={[
								'Coats',
								'Blazers',
								'Playsuits & Jumpsuits',
								'Sweatshirts & Hoodies',
								'Jackets',
								'Trousers',
								'Jeans',
								'Knitwear',
								'T-shirts',
								'Bodysuits',
								'Shirts',
								'Skirts',
								'Shorts',
							]}
						/>
					</div>
					<div className="">
						<div className="f5 mt3 black mb2">SHOES</div>
						<ListComponent
							listData={[
								'Trainers',
								'Heels',
								'Zara',
								'Flats',
								'Platforms',
								'Boots & Ankle Boots',
								'Heeled Sandles',
							]}
						/>
					</div>
					<div className="">
						<div className="f5 mt3 black mb2">ACCESORIES</div>
						<ListComponent
							listData={[
								'Braaaaas',
								'Nickas',
								'Bags',
								'Jewellery',
								'Earrings',
								'iPhone Cases',
								'Glasses',
								'Hats & Beanie',
								'Purses',
								'Belts',
								'Socks',
								'Gadgets',
							]}
						/>
					</div>
					<div className="inGrd  mt3">
						<div className="b pointer flex justify-center ">
							<div className="h-25 w-90 mt6 bg-white-80 transparent tc">
								<div className="black f6">NEW IN</div>
								<div className="back-40">check out your favorites</div>
							</div>
						</div>
						<div className="b pointer flex justify-center">
							<div className="h-25 w-90 bg-white-80 transparent tc mt6">
								<div className="black f6">FEATURED</div>
								<div className="back-40">popular items</div>
							</div>
						</div>
						<div className="b pointer flex justify-center">
							<div className="h-25 w-90 bg-white-80 transparent tc mt6">
								<div className="black f6">SALE & SPECIAL OFFERS</div>
								<div className="back-40">get up to 20.20% off</div>
							</div>
						</div>
						<div className="b pointer flex justify-center">
							<div className="h-25 w-90 bg-white-80 transparent tc mt6">
								<div className="black f6">COMING SOON</div>
								<div className="back-40"> this coming season</div>
							</div>
						</div>
					</div>
				</div>
				<Divider className="ma0" />
			</div>
		);
	} else {
		return null;
	}
};

export default Women;
