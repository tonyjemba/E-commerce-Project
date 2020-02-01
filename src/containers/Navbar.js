import React,{Component}from 'react';
import '../css/navbar.css';
import Sticky from 'react-sticky-el';
import '../css/Animate.css';
import '../media/navbar_media.css';
import SearchDrawer from '../components/SearchDrawer';
import Women from '../components/Women';
import Men from '../components/Men';
import NavCategory from '../components/NavCategory';
import { Divider, Icon,Popover,Input,Select } from 'antd';
import LeftDrawer from '../components/LeftDrawer';
import Tip from '../components/Tip';

const { Option } = Select;
const InputGroup = Input.Group;


const help = (
	<div>
		<div className="myfs pointer">About Us</div>
		<div className="myfs pointer">Customer Service</div>

	</div>
)
export default class Navbar extends Component{
	
	
		state={
			visible:false,
			show:false,
			menShow:false,
			catShow:false,
			Drawervisible:false
		}
	
	onClose = ()=>{
		this.setState({visible:false})
	}
	openSearchDrawer = () =>{
		this.setState({visible:true})
	}
	doShow = () =>{
		this.setState({show:true,menShow:false,catShow:false})
	}
	hideShow = () =>{
		this.setState({show:false})
	}
	doMenShow = () => {
		this.setState({menShow:true,show:false,catShow:false})
	}
	hideMenShow = () => {
		this.setState({menShow:false,catShow:false})
	}
	doCatShow = () => {
		this.setState({catShow:true})
	}
	hideCatShow = () => {
		this.setState({catShow:false})
	}
	openDrawer = () => {
		this.setState({Drawervisible:true})
	}
	draweronClose = () => {
		this.setState({Drawervisible:false})
	}
	render(){
		return (
			<nav className=" hparent z-4 ">
				<SearchDrawer visible={this.state.visible} onClose={this.onClose}/>
				{/* <SearchDrawer visible={this.state.visible} onClose={this.onClose}/> */}
				<div className="  hchild flex justify-center items-center ">
					<div className=" w-90  flex flex-row ">
						<div className="h2  width justify-between flex flex-row items-center  self-start black ">
							<div className="show pointer  " onClick={this.openDrawer}>
							   <Icon type="menu-unfold" style={{fontSize:'15px'}} />
							</div >
								<LeftDrawer
								placement="left"
								closable={true}
								onClose={this.draweronClose}
								visible={this.state.Drawervisible}
								/>
								
							<div className=" h-75">
							 <p style={{fontFamily: 'Fruktur'}} className="logoSize">Grabit</p>
							</div>
							
						</div>
						<div className=" dsktpwid justify-between flex ml-auto flex-row  ">
						<Tip placement="bottom" title="Help">
						<div className="  self-center pa2  pointer hover-black" >
							
							<Icon type="question-circle" style={{fontSize:"18px"}} />
							</div>
						</Tip>
							<div className="  self-center pointer hover-black" >
							<Icon type="user" style={{fontSize:"18px"}} />
							</div>
							<div className="  self-center pointer hover-black" >
							<Icon type="heart"  style={{fontSize:"18px"}}/>
							</div>
							<div className="  self-center pointer hover-black">
							<Icon type="shopping-cart"style={{fontSize:"18px"}} />
							</div>
							<div className=" self-center relative vanish myfs">
							<InputGroup compact className="myfs">
								<Select defaultValue="UGX(Shs)">
									<Option value="Option1" style={{fontSize:'14px'}}>{"USD($)"}</Option>
		 							<Option value="Option2" style={{fontSize:'14px'}}>{"UGX(Shs)"}</Option>
								</Select>
								</InputGroup>
							</div>
						</div>
					</div>
				</div>
				<Divider className="ma0 relative z-1" />
				<Sticky topOffset={83} stickyClassName={'animated fadeIn ontop hidden'}>
					<div className=" hchild2  flex justify-center items-center  bg-white-80 transparent ">
						<div className=" w-90  items-center  flex flex-row ">
					<div className="w3  mt2  items-center justify-between flex self-start w-50 flex-row " >
							<div className="pointer hover-black-90 items-center justify-center vanish" onMouseEnter={this.hideCatShow}>
									<p
										style={{
											fontSize: '14px',
											verticalAlign: 'middle',
											textAlign: 'center',
											display: 'table-cell',
										}}

									>
										HOME
									</p>
								</div>
								<div className="pointer hover-black-90 flex  flex-row vanish" onMouseEnter={this.doCatShow}>
									<div className="items-center ">
									<p
										style={{
											fontSize: '14px',
											verticalAlign: 'middle',
											textAlign: 'center',
											display: 'table-cell',
											 paddingRight:'3px'
										}}
									>
										CATEGORIES
									</p>
									</div>
									<div className=" flex to  ml-auto spin1 fw1 vanish">
										<Icon type="down" style={{ fontSize: '8px',paddingTop:'8px' }} />
									</div>
									
								</div>
								<div className="pointer hover-black-90 " onMouseEnter={this.hideMenShow}>
									<p
										style={{
											fontSize: '14px',
											verticalAlign: 'middle',
											textAlign: 'center',
											display: 'table-cell',
										}}
									>
										BEST SELLERS
									</p>
								</div>
								<div className="pointer hover-black-90 flex flex-row vanish " onMouseEnter={this.doMenShow} >
								<div className="items-center ">
									<p
										style={{
											fontSize: '14px',
											verticalAlign: 'middle',
											textAlign: 'center',
											display: 'table-cell',
											 paddingRight:'3px'
										}}
									>
										MEN'S
									</p>
									</div>
									<div className=" flex to  ml-auto spin1 fw1 vanish">
										<Icon type="down" style={{ fontSize: '8px',paddingTop:'8px' }} />
									</div>
								</div>
								<div className="pointer hover-black-90 flex  flex-row" onMouseEnter={this.doShow} >
								<div className="items-center ">
									<p
										style={{
											fontSize: '14px',
											verticalAlign: 'middle',
											textAlign: 'center',
											display: 'table-cell',
											 paddingRight:'3px'
										}}
									>
										WOMEN'S
									</p>
									</div>
									<div className=" flex to  ml-auto spin1 fw1 vanish">
										<Icon type="down" style={{ fontSize: '8px',paddingTop:'8px' }} />
									</div>
								</div>
								<div className="pointer hover-black-90 " onMouseEnter={this.hideShow}>
									<p
										style={{
											fontSize: '14px',
											verticalAlign: 'middle',
											textAlign: 'center',
											display: 'table-cell',
										}}
									>
										SELL
									</p>
								</div>
								<Popover placement="bottom" content={help}>
								<div className="pointer hover-black-90 vanish">
									<p
										style={{
											fontSize: '14px',
											verticalAlign: 'middle',
											textAlign: 'center',
											display: 'table-cell',
										}}
									>
										HELP
									</p>
								</div>
								</Popover>
							</div>
							<div className="h2 w3 pt1 flex flex-row ml-auto vanish items-center pointer hover-black-10" onClick={this.openSearchDrawer}>
								<div className="  items-center">
									<p
										style={{
											fontSize: '14px',
											verticalAlign: 'middle',
											textAlign: 'center',
											display: 'table-cell',
										}}
									>
										SEARCH
									</p>
								</div>
								<div className="ml-a flex flex-row ml-auto fw1 ">
									<Icon type="search" style={{ fontSize: '17px', color: '#141414' }} />
								</div>
							</div>
						</div>
					</div>
					<Divider className="ma0" />
							<Women show={this.state.show}  hide={this.hideShow}/>
				<Men show={this.state.menShow} hide={this.hideMenShow}/>
				<NavCategory show={ this.state.catShow} hide={this.hideCatShow}/>
				</Sticky>
			
			</nav>
		);
	}
};