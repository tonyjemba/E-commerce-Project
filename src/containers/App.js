import React from 'react';
import HomeScreen from './HomeScreen';
import Footer from '../components/Footer';
import CartScreen from './CartScreen';
import Navbar from './Navbar';
import '../css/App.css';
// import '../media/app_media.css';

function App() {
	return (
		<div>
			<div className="scrollover">
			<Navbar />

				<HomeScreen/>
			{/* <CartScreen/> */}
			</div>
			<Footer />
		</div>
	);
}

export default App;
