import React,{Component} from 'react';
import { Divider,Icon } from 'antd';
import Icons from './Icons';
import ListComponent from '../containers/ListComponent'
import '../css/footer.css';
import '../media/footer_media.css';

class Footer extends Component {
	constructor(){
		super();
		this.state = {
			email:''
		}
	}

	handleEmailInput = (event) => {
		this.setState({email: event.target.value})
	}
render(){
	
	return (
		<div className="fcontainer goes ">
			<Divider className="mt1 z-0 bg-black-40 " />
			<div className=" w-90 self-center loheight flex flex-column ">
				<div className=" w-100 self-center h25 flex flex-row mt4 mb3 ">
					<div className="w-50 flex flex-column">
						<div className="f5 black">NEWSLETTER SUBSCRIPTION</div>
						<div className="black-40">
							Sign up for Grabit updates to receive information about new arrivals, future events and
							specials.
						</div>
					</div>
					<div className="w-50  flex flex-row justify-center items-center">
						<div className="ba w-60 h-75 b--black-40 bbb">
							<input
								placeholder="Enter Your Email Address "
                                type="email"
								style={{outline:'none',border:'none',paddingLeft:'5px',textDecoration:'none',height:'100%',width:'100%'}}
								onChange = {this.handleEmailInput}
								required
								spellCheck="false"
							/>
						</div>
						<div className="pointer bgc hover-bg-black hover-white bg-animate ba w-20 h-75 tc justify-center items-center flex ml3 ">SUBSCRIBE!</div>
					</div>
				</div>
				<div className=" w-100 self-center  flex flex-row  justify-between mt3">
                            <div className="bg-purple  "></div>
                            <div className="w-20">
								<div className="black pointer mb2">SHOP</div>
							   <ListComponent listData={['New In','Sales & Special Offers',"women's","men's",'shoes','Accessories']}/>
							</div>
                            <div className="w-20">
							<div className="black pointer  mb2">INFORMATION</div>
							<ListComponent listData={['About Us','Customer Service',"Blog","FAQs",'Contact Us']}/>
							</div>
                            <div className="w-20">
							<div className="black pointer  mb2">ORDER</div>
							<ListComponent listData={['My Account','View Cart',"Privacy Policy","Cookies Policy"]}/>
							</div>
                            <div className="w-20">
							<div className="black pointer  mb2">HERE TO HELP</div>
									<div className=" pointer black-40">Have a question?You may also check our FAQs</div>
							<div className="black pointer mt1 mb1">Customer Services</div>
							<div className="flex flex-row items-center pointer">
								<Icon type="phone" style={{color:'black',paddingRight:'3px'}}/>
								<div>Call Us: +256 754579213</div>
							</div>
							<div className="flex flex-row mt2  pointer">
							<Icon type="schedule" style={{color:'black',paddingTop:'5px',paddingRight:'3px'}} />
							<div className="flex ma0 flex-column">
								<div className="balck-40">Mon-Fri: 8:00 am - 7:00 pm</div>
								<div className="balck-40">Sat: 9:00 am - 6:00 pm</div>
								<div className="balck-40">Sun: 9:00 am - 1:00 pm</div>
							</div>
							</div>
							<div className="flex flex-row mt2 items-center pointer">
							<Icon type="mail" style={{color:'black',paddingRight:'3px'}} />
							<div className="balck-40 underline hover-black">Send us an Email</div>
							</div>
							</div>
							<div className="w-20 ml4">
							<div className="black pointer  mb2">FOLLOW US</div>
							<div className="flex flex-row">
							<div><Icons iconType={['facebook','twitter','google-plus','instagram','slack','github']}/></div>
							<div><ListComponent listData={['Facebook','Twitter',"Google","Instagram",'slack','github']} /></div>
							</div>
							</div>

                </div>
			</div>
			<Divider className="ma0 bg-black-40 " />

			<div className=" w-100 pl3 flex flex-row items-center loh ma0">
					<div className-="h-100  flex items-center  w-10">
					© 2020 Grabit Fashion Store . All Rights Reserved. Ecommerce Software by Jemba Tony.
					</div>
					<div className="ml-auto flex flex-row">
						<div className="f5">Powered By:</div>
					<Icons contStyle="flex flex-row ml3 mr3 f4" iconType={['alibaba','amazon','ant-design','meduim','github','android','apple','windows','google']}/>
					</div>
			</div>
		</div>
	);
}
};

export default Footer;
